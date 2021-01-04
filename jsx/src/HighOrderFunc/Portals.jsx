import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
// 某些情况下，我们希望渲染的内容能用独立于父组件，甚至是独立于当前挂载的DOM元素中（因为默认都是挂载到id为ROOT的DOM元素中去的）

class Modal extends PureComponent {
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("modal")
    );
  }
}

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <Modal>
          <h2>Title</h2>
        </Modal>
      </div>
    );
  }
}

export default class Portals extends PureComponent {
  render() {
    return (
      <div>
        <Home></Home>
      </div>
    );
  }
}
