import React, { PureComponent } from "react";
import { connect } from "./connect";
import { Button } from "antd";
import { addAction, subAction, addNullAction } from "../flow/actionCreators";
class SplitDemo1 extends PureComponent {
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

export default connect(mapStateToProps,mapDispatchToProps)(SplitDemo1);
