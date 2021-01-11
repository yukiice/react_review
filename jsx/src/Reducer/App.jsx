import { Button } from "antd";
import React, { PureComponent } from "react";
import store from "./index";
import { addAction, delAction } from "./actionCreators";
import { message } from "antd";
export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }
  componentDidMount() {
    this.unsubscribue = store.subscribe(() => {
      this.setState(store.getState());
    });
  }
  componentWillUnmount() {
    this.unsubscribue();
  }
  changeClick(e) {
    switch (e) {
      case 1:
        store.dispatch(addAction());
        break;
      case -1:
        store.dispatch(delAction());
        break;
      default:
        message.success("error", 5);
        break;
    }
  }
  render() {
    return (
      <div>
        <h2>数字变换</h2>
        <br />
        <h2>{this.state.count}</h2>
        <br />
        <Button type="primary" onClick={() => this.changeClick(1)}>
          +1
        </Button>
        <br />
        <Button type="danger" onClick={() => this.changeClick(-1)}>
          -1
        </Button>
      </div>
    );
  }
}
