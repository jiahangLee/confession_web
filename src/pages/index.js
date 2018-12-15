import React from 'react';
import {connect} from 'dva';
import styles from './index.css';

function IndexPage() {
  // alert("我要跟你白天么么哒，晚上啪啪啪");//用你的手机号替换12345678
  // let shoujihao = "12345678";
  //
  // function foo() {
  //   let a = new Date();
  //   let hour = a.getHours();
  //   let r = "NO";
  //   if (hour < 18 && hour > 6) {
  //     r = prompt("我现在就要跟你么么哒,YES/NO?", "YES");
  //     console.log(r);
  //   } else {
  //     r = prompt("我现在就要跟你啪啪啪,YES/NO?", "YES");
  //     console.log(r);
  //   }
  //   if (r && r.toLowerCase() === "yes") {
  //     alert("call me baby, " + shoujihao);
  //     clearInterval(timerid);
  //   } else {
  //     r = prompt("你不爱我了吗？,YES/NO?", "YES");
  //   }
  // }
  //
  // let timerid = setInterval(foo, 1000);


  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome}/>
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {};

export default connect()(IndexPage);
