import React, { PureComponent } from "react";
import { Button } from "antd";
import store from "../flow";
import { addAction, subAction, addNullAction } from "../flow/actionCreators";
export default class InitDemo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState().count,
    };
  }
  componentDidMount() {
    this.unsubscribue =  store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }

  componentWillUnmount(){
      this.unsubscribue()
  }

  addClick(e) {
    switch (e) {
      case 1:
        store.dispatch(addNullAction());
        break;
      case 5:
        store.dispatch(addAction(5));
        break;
      case -5:
        store.dispatch(subAction(5));
        break;
      default:
        break;
    }
  }
  render() {
    return (
      <div>
        <h2>Home</h2>
        <br />
        <h2>当前计数：{this.state.count}</h2>
        <br />

        <Button type="primary" onClick={() => this.addClick(5)}>
          +5
        </Button>
        <br />
        <Button onClick={() => this.addClick(-5)}>-5</Button>
        <br />
        <Button type="danger" onClick={() => this.addClick(1)}>
          +1
        </Button>
      </div>
    );
  }
}
