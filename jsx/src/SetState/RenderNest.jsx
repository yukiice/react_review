import { Button } from "antd";
import React, { Component } from "react";

// 可以通过PureComponent来使得class组件完成类似操作

function Header() {
  console.log("herder被调用");
  return <h2>Header</h2>;
}
function Middle() {
  console.log("Middle被调用");
  return <h2>Middle</h2>;
}
function Footer() {
  console.log("Footer被调用");
  return <h2>Footer</h2>;
}

export default class RenderNest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // 这里一旦更新，就会改变所有render函数，  这太影响性能了
  changeClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  changeTextClick() {
    this.setState({
      text: "hello yukiice",
    });
  }
  // 因此，可以通过 shouldComponentUpdate 这个生命去来处理
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.count !== nextState.count) {
      return true;
    }
    return false;
  }
  render() {
    return (
      <div>
        <h2>当前计数：{this.state.count}</h2>
        <Button type="danger" onClick={() => this.changeClick()}>
          change
        </Button>
        <br />
        <br />
        <Button type="danger" onClick={() => this.changeTextClick()}>
          changeText
        </Button>
        <br />
        <Header></Header>
        <Middle></Middle>
        <Footer></Footer>
      </div>
    );
  }
}
