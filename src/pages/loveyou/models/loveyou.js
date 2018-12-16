import * as usersService from '../service';

export default {
  namespace: 'loveyou',
  state: {
    list: [],
    total: null,
    page: null,
    loveYou: null,
  },
  reducers: {
    save(state, {payload: {data:list}}) {
      return {...state, list};
    },
  },
  effects: {

    * loveYou({payload: id}, {call, put}) {
      yield call(usersService.loveYou, id);
      const {data} = yield call(usersService.loveYou, id);
      console.log(data)
      yield put({
        type: 'save',
        payload: {
          data: data
        },
      });
    }, * remove({payload: id}, {call, put, select}) {
      yield call(usersService.remove, id);
      const page = yield select(state => state.users.page);
      yield put({type: 'fetch', payload: {page}});
    },
    * patch({payload: {id, values}}, {call, put, select}) {
      yield call(usersService.patch, id, values);
      const page = yield select(state => state.users.page);
      yield put({type: 'fetch', payload: {page}});
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/loveyou') {
          dispatch({type: 'loveYou'});
        }
      });
    },
  },
};

