import React, { Component } from "react";
import { Button } from "antd";
export default class SetStateAsync extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text:'last text'
    };
  }
  componentDidMount(){
      console.log(this.state.text,'这里是生命周期中的东西');
  }
  increment() {
    //   可以在其中的回调函数中拿到
      this.setState({
          count:this.state.count +1,
          text:'最新的文本'
          
      },()=>{
          console.log(this.state.text,'这里是回调函数里面的东西');
      })
      console.log(this.state.text);
  }
// setstate异步更新的原因
// 首先是setstate设计为异步的，可以显著的提升性能
// 如果你每次都调用setstate进行一次更新的话，那么意味着，render函数会被频繁的调用，界面重新渲染，这样效率太低
// 最好的办法是获取到多个更新，之后进行批量更新
// 如果同步更新了state，但是还没有执行render函数，那么state和props中就无法保持同步
// state和props不能保持一致性，会在开发中产生非常多的问题。


// 不过，setstate有时候他是同步更新的
// 比如将setstate放到定时器中
// 或者用原生绑定DOM的方式  加上点击事件  触发事件
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.count}</h2>
        <br/>
        <h2>{this.state.text}</h2>
        <Button type="primary" onClick={() => this.increment()}>
          点击
        </Button>
      </div>
    );
  }
}
