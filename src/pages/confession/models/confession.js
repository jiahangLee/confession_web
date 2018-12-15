import * as usersService from '../services/confession';

export default {
  namespace: 'confession',
  state: {
    list: [],
    total: null,
    page: null,
    loveUrl: null,
  },
  reducers: {
    save(state, {payload: {loveUrl}}) {
      return {...state, loveUrl};
    },
  },
  effects: {
    * fetch({payload: {page = 1}}, {call, put}) {
      const {data, headers} = yield call(usersService.fetch, {page});
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(headers['x-total-count'], 10),
          page: parseInt(page, 10),
        },
      });
    },
    * remove({payload: id}, {call, put, select}) {
      yield call(usersService.remove, id);
      const page = yield select(state => state.users.page);
      yield put({type: 'fetch', payload: {page}});
    },
    * patch({payload: {id, values}}, {call, put, select}) {
      yield call(usersService.patch, id, values);
      const page = yield select(state => state.users.page);
      yield put({type: 'fetch', payload: {page}});
    },
    * create({payload: values}, {call, put}) {
      console.log(values)
      const {data} = yield call(usersService.create, values);
      console.log(data)
      yield put({
        type: 'save',
        payload: {
          loveUrl: data.loveUrl
        },
      });
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/lo') {
          dispatch({type: 'fetch', payload: query});
        }
      });
    },
  },
};
