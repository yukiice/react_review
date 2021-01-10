import React, { PureComponent } from "react";

import { connect } from "react-redux";

import { Button } from "antd";
import {
  addAction,
  subAction,
  addNullAction,
  fetcHomeMultiDataAction
} from "../flow/actionCreators";
class SplitDemo5 extends PureComponent {
  componentDidMount() {
    this.props.getHomeMultiData();
  }
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
        <br />
        <h2>Banners</h2>
        {this.props.banners.map((item, index) => {
          return (
            <li key={index}>
              <div>{item.title}</div>
              <img src={item.image} alt="" />
            </li>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    banners: state.banners,
    recommend: state.recommends,
  };
};

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
  getHomeMultiData() {
    dispatch(fetcHomeMultiDataAction);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SplitDemo5);
