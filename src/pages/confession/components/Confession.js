import React from "react"
import {Button, Row, Col, Layout, Carousel} from "antd"
import {connect} from "dva";
import ConfessionForm from "./ConfessionForm";
import MyFooter from "./MyFooter";
import MyImg from "./MyImg";

class Confession extends React.Component {
  constructor() {
    super()
    this.state = {
      editorHtml: '',
      editorText: '',
    }
  }

  createHandler(values) {
    this.props.dispatch({
      type: 'confession/create',
      payload: values,
    });
  }

  render() {
    const QRCode = require('qrcode-react');
    const {
      Header, Footer, Sider, Content,
    } = Layout;
    // const DemoBox = props => <p className={`height-${props.value}`}>{props.children}</p>;
    const url = this.props.loveUrl
    return (
      <div style={{height: "100%", backgroundColor: "#ccc"}}>
        <Row>
          <Col span={24}>
            <Header><h1 style={{color: "#fff"}}>木之本樱</h1></Header>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <div style={{width: 200, margin: "20px auto"}}>
              <h1 style={{color: "#343653"}}>效果图如下：</h1>

            </div>
            <div style={{width: "800px", margin: "10px auto"}}>
              <img style={{width: "100%"}} alt="example"
                   // src="https://b-ssl.duitang.com/uploads/item/201801/15/20180115155640_XsY8k.jpeg"
                   src={require('../../../assets/20180115155640_XsY8k.jpeg')}
              />
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <div>
              <ConfessionForm record={{}} onOk={this.createHandler.bind(this)}>
                <Button style={{width: "100%"}} type="primary">开始制作！</Button>
              </ConfessionForm>
            </div>
            <div style={{height: "250px"}}>

              {console.log(null?"true":"false")}
              {
                //这里不能直接写url?,他可能只是value属性为null
                  url===null?
                  <div>
                    <h3>这是示例二维码：{url}</h3>
                    <QRCode value="http://www.jiahanglee.club:8080/xiaoying.html"/>
                  </div>
                  :
                  <div>
                    <h3>这是你的二维码：{url}</h3>
                    <QRCode value="http://www.jiahanglee.club:8080/xiaoying.html"/>
                  </div>
              }
              {/*{url}?return(<QRCode value="http://www.jiahanglee.club:8080/xiaoying.html"/>):<QRCode value="http://facebook.github.io/react/"/>*/}
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>

        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <MyFooter style={{marginButton: "0px", height: 60}}/>
          </Col>
          <Col span={4}></Col>
        </Row>

      </div>
    )
  }
}

function mapStateToProps(state) {
  const {loveUrl} = state.confession;
  return {
    loveUrl
  };
}

export default connect(mapStateToProps)(Confession);
