import React, { PureComponent } from "react";

class Home extends PureComponent {
  render() {
    return (
      <div>
        <h2>HOME {`姓名 ${this.props.name} 区域：${this.props.local}`}</h2>
      </div>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <div>
        <h2>About {`姓名 ${this.props.name} 区域：${this.props.local}`}</h2>
      </div>
    );
  }
}

// 定义高阶函数
// 增强props
function enchanceLocal(WrappedComponent) {
  return ({ ...props }) => <WrappedComponent {...props} local="中国" />;
}


// 
const EnchanceHome = enchanceLocal(Home);
const EnchanceAbout = enchanceLocal(About);

class EnchanceHOC extends PureComponent {
  render() {
    return (
      <div>
        <EnchanceHome name="yukiice"></EnchanceHome>
        <br />
        <EnchanceAbout name="meimei"></EnchanceAbout>
      </div>
    );
  }
}

export default EnchanceHOC;
