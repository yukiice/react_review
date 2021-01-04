import React, { PureComponent, createRef, forwardRef } from "react";
import { Button } from "antd";

// 创建高阶组件
const Profile = forwardRef(function (props, ref) {
  console.log(props.name);
  return <p ref={ref}>Profile</p>;
});

class Home extends PureComponent {
  render() {
    return <div>Home</div>;
  }
}

export default class RefHoc extends PureComponent {
  constructor(props) {
    super(props);
    this.objRef = createRef();
    this.homeRef = createRef();
    this.profileRef = createRef();
  }
  changeClick() {
    console.log(this.profileRef.current);
  }
  render() {
    return (
      <div>
        <h2 ref={this.objRef}>hello</h2>
        <br />
        <Home ref={this.homeRef}></Home>
        <br />
        <Profile ref={this.profileRef} name={"why"}></Profile>
        <Button type="primary" onClick={() => this.changeClick()}>
          点击
        </Button>
      </div>
    );
  }
}
