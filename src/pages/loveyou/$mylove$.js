import config from "../confession/config.js"
import Comment from "./components/Comment";
import React from "react"
import {connect} from "dva";

const {api} = config

class $mylove$ extends React.Component {

  constructor(){
    super();
    this.state = {
      time:new Date()
    }
  }
  componentWillMount(){
    const p = this.props.match.params.mylove
    console.log(p)
    this.props.dispatch({
      type: 'loveyou/loveYou',
      payload: p,
    });
  }

  changeTime= () =>{
    this.setState({
      time:new Date(),
    });
  }
  componentDidMount(){
    setInterval(this.changeTime, 1000);
  }
  render() {

    const p = this.props.match.params.mylove
    const ob = this.props.list
    console.log("这个东西"+JSON.stringify(ob))
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    let date1 = new Date();
    let date2 = new Date();
    let i = this.props.list.loveTime
    let c = JSON.stringify(this.props.list)
    let o = "dfds"

    if(isiOS){
      console.log("是ios的")
      i = i?i.replace(/\T/g," "):i
      i = i?i.replace(/(.*):{1}(.*)/, '$1'):i
      date1 = i?new Date("2018-12-03 08:30".replace(/-/g, "/")):new Date()
      date2 = this.state.time
    }else {
      console.log("不是ios的")
      console.log(i)
      console.log(typeof i)
      console.log(c)
      console.log(typeof o)
      i = i?i.replace(/\T/g," "):i
      let dat1 = i?new Date(i.replace(/\-/g, "/")):new Date();
      console.log("djfidjfid---"+dat1)
      i?console.log(dat1):console.log("props没有")
      console.log(this.state.time)
      date1 = dat1
      date2 = this.state.time
    }
    console.log("date1："+date1+"---date2："+date2)
    var s1 = date1.getTime(),s2 = date2.getTime();
    var total = (s2 - s1)/1000;

    var day = parseInt(total / (24*60*60));//计算整数天数
    var afterDay = total - day*24*60*60;//取得算出天数后剩余的秒数
    var hour = parseInt(afterDay/(60*60));//计算整数小时数
    var afterHour = total - day*24*60*60 - hour*60*60;//取得算出小时数后剩余的秒数
    var min = parseInt(afterHour/60);//计算整数分
    var afterMin = total - day*24*60*60 - hour*60*60 - min*60;//取得算出分后剩余的秒数

    let time = day+"天"+hour+"时"+min+"分"+Math.floor(afterMin)+"秒"
    return (
      <div style={{margin:"0px auto"}}>
        {console.log(p)}
        {/*<h1>loveyou=>{p}</h1>*/}
        {/*<h1>{api.createConfession + "/" + p}</h1>*/}
        {/*<h1>{JSON.stringify(this.props.list)}</h1>*/}
        <h1>love you=>{this.props.list.name}</h1>
        <h1>say to you=>{this.props.list.detail}</h1>
        <h1>together time=>{time}</h1>
        {/*<h1>together=>{new Date(this.props.list.loveTime).getDate()}</h1>*/}
        {/*<h1>now=>{new Date().getDate()}</h1>*/}

      </div>

    )
  }
}

function mapStateToProps(state) {
  const {list} = state.loveyou;
  return {
    list
  };
}

export default connect(mapStateToProps)($mylove$);

// export default ({ match }) =>
//   <div>
//     <h1>loveyou=>{match.params.mylove}</h1>
//     <h1>{api.createConfession+"/"+match.params.mylove}</h1>
//   </div>
