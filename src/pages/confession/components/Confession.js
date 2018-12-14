import React from "react"
import {Button} from "antd"
import {connect} from "dva";
import ConfessionForm from "./ConfessionForm";
import styles from "../../users/components/Users.css";

class Confession extends React.Component{
  createHandler(values) {
  this.props.dispatch({
    type: 'users/create',
    payload: values,
  });
}
  render(){
    return(
        <div>
          <div className={styles.create}>
            <ConfessionForm record={{}} onOk={this.createHandler}>
              <Button type="primary">这是一个神奇的开始，你可以通过它来表白你喜欢的人！</Button>
            </ConfessionForm>
          </div>
          <div className={styles.create}>
            <h3>这是你的表白二维码：。。。</h3>
          </div>
      </div>
    )
  }
}
function mapStateToProps(state) {
  const { loveUrl } = state.confession;
  return {
    loveUrl,
    loading: state.loading.models.confession,
  };
}
export default connect(mapStateToProps)(Confession);
