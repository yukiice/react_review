import { Button } from "antd";
import React, { Component } from "react";

export default class SetStateCombine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      text: "hello yukiice",
    };
  }
//   源码中  是这样处理setstate   Object.assign({}, this.state, { text: "hello world" });
  changeClick() {
    // this.setState(
    //   {
    //     text: "hello world",
    //   },
    //   () => {

    //   }
    // );
    

    // setstate默认是合并你的操作的，也就是说，无论你执行多少次同样的setstate，他依然只会合并并取一个
    // 但可以通过一些方法，完成特殊情况，即将setstate合并时进行累加
    this.setState((prevState,props)=>{
        return { 
            count:prevState.count + 1
        }
    })
    this.setState((prevState,props)=>{
        return {
            count:prevState.count + 1
        }
    })
  }
  render() {
    return (
      <div>
        <h2>数字：{this.state.count}</h2>
        <h2>文字：{this.state.text}</h2>
        <Button type="danger" onClick={() => this.changeClick()}>
          改变
        </Button>
      </div>
    );
  }
}
