import React from "react"
import { Carousel } from "antd";
import 'antd/dist/antd.css';
import "./new.css"
class MyImg extends React.Component {
  render() {
    return (
      <Carousel autoplay>
        <div><img alt="example" src="https://b-ssl.duitang.com/uploads/item/201801/15/20180115155640_XsY8k.jpeg"
          /></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel>
    )
  }
}
export default MyImg;
