import { Button } from "antd";
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Demos } from "./style";
import { delAction, addAction } from "../redux/Demo/actionCreators";
import {
  delFiveAction,
  addFiveAction,
} from "../redux/CountFive/actionCreators";
class Demo extends PureComponent {
  render() {
    return (
      <Demos>
        <div className="cursor-wait ...">{this.props.count}</div>
        <br />
        <Button onClick={() => this.props.delCountClick()}>减少</Button>
        <br />
        <Button onClick={() => this.props.addCountClick()}>增加</Button>

        <h2 className="mt1">这里是+5的count展示</h2>

        <div className="cursor-wait ...">{this.props.countFive}</div>
        <br />
        <Button onClick={() => this.props.delCountFiveClick(5)}>减少</Button>
        <br />
        <Button onClick={() => this.props.addCountFiveClick(5)}>增加</Button>
      </Demos>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.countInfo.count,
    countFive: state.countFiveInfo.count,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addCountClick() {
    dispatch(addAction);
  },
  delCountClick() {
    dispatch(delAction);
  },
  delCountFiveClick(num) {
    dispatch(delFiveAction(num));
  },
  addCountFiveClick(num) {
    dispatch(addFiveAction(num));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Demo);


