import React from "react"
import {Button, Row, Col, Layout, Carousel} from "antd"
import {connect} from "dva";
import ConfessionForm from "./ConfessionForm";
import MyFooter from "./MyFooter";
import config from "../config.js"

const {api} = config

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
            <Header><h1 style={{color: "#fff"}}>萌王系列之表白二维码</h1></Header>
          </Col>
        </Row>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <div style={{width: "100%", margin: "20px auto"}}>
              {/*<h1 style={{color: "#343653"}}>写在前面：</h1>*/}

            </div>
            <div style={{width: "100%", height: "300px", margin: "10px auto", border: "3px dotted #000"}}>
              {/*<img style={{width: "100%"}} alt="example"*/}
              {/*// src="https://b-ssl.duitang.com/uploads/item/201801/15/20180115155640_XsY8k.jpeg"*/}
              {/*src={require('../../../assets/20180115155640_XsY8k.jpeg')}*/}
              {/*/>*/}
              {/*<h1 style={{textAlign:"center",lineHeight:"200px"}}>开发中···</h1>*/}
              {
                //这里不能直接写url?,他可能只是value属性为null
                url === null ?
                  <div style={{width: "100%", height: "100%", padding: "20px 0px"}}
                  >
                    <h2 style={{textAlign: "center"}}>示例二维码:</h2>
                    <div style={{display: "flex", justifyContent: "center"}}>
                      <QRCode value="http://www.jiahanglee.com/#/loveyou/1"/>
                    </div>
                    <h2 style={{textAlign: "center",marginTop:20}}>截图二维码送给TA:</h2>
                  </div>
                  :
                  <div style={{width: "100%", height: "100%", padding: "20px 0px"}}>
                    <h2 style={{textAlign: "center"}}>你的二维码:</h2>
                    {console.log(api.loveUrl + url.replace(/(.*)\/{1}(.*)/, '$2'))}
                    <div style={{display: "flex", justifyContent: "center"}}>
                      <QRCode value={api.loveUrl + url.replace(/(.*)\/{1}(.*)/, '$2')}/>
                    </div>
                    <h2 style={{textAlign: "center",marginTop:20}}>截图二维码送给TA:</h2>
                  </div>
              }
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <div>
              <ConfessionForm record={{}} onOk={this.createHandler.bind(this)}>
                <Button style={{width: "100%",marginTop:50}} type="primary">开始制作！</Button>
              </ConfessionForm>
            </div>
            <div style={{height: "70px"}}>

              {console.log(null ? "true" : "false")}

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
