import React, { PureComponent } from "react";
// 引入connect 使得 React 组件可以被连接
import { connect } from "react-redux";

import { Button } from "antd";
import { addAction, subAction, addNullAction } from "../flow/actionCreators";
class SplitDemo2 extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <br />
        <h2>当前计数：{this.props.count}</h2>
        <br />

        <Button type="primary" onClick={() => this.props.addFiveClick(5)}>
          +5
        </Button>
        <br />
        <Button onClick={() => this.props.delFiveClick(5)}>-5</Button>
        <br />
        <Button type="danger" onClick={() => this.props.addOneClick()}>
          +1
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  addFiveClick() {
    dispatch(addAction());
  },
  delFiveClick() {
    dispatch(subAction());
  },
  addOneClick() {
    dispatch(addNullAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SplitDemo2);
