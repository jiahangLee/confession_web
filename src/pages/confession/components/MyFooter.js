import { Row, Col } from 'antd';
import React from 'react'
import styles from './Const.css'
import 'antd/dist/antd.less';

export default class MyFooter extends React.Component{
  render(){
    return(
      <footer>
        <Row>
          <Col span={2}>

          </Col>
          <Col span={20} className={styles.footer}>
            &copy;&nbsp;2018.08.18 by jiahanglee.All Rights Reserved.
          </Col>
          <Col span={2}>

          </Col>
        </Row>
      </footer>
    )
  }
}
