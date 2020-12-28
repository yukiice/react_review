import { Button } from "antd";
import React, { Component, memo } from "react";

// memo就可以使得func组件  只有当其数据改变的时候 才会改变


const MemoDemo = memo(function Demo() {
  console.log("Demo");
  return <h2>Demo</h2>;
});
function Demo1() {
  console.log("demo1 appear");
  return <h2>Demo1</h2>;
}
export default class Memo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  changeClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <div>
        <MemoDemo></MemoDemo>
        <br />
        <Demo1></Demo1>
        <br />
        <div>当前数字：{this.state.count}</div>
        <Button onClick={() => this.changeClick()}>change</Button>
      </div>
    );
  }
}
