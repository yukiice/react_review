import React, { PureComponent, createContext } from "react";

// 创建Context对象
export const UserContext = createContext({
  name: "",
  level: -1,
  local: "中国",
});

class Home extends PureComponent {
  render() {
    return (
      <h2>
        HOME
        {`姓名 ${this.props.name} 等级：${this.props.level}  区域：${this.props.local}`}
      </h2>
    );
  }
}

class About extends PureComponent {
  render() {
    return (
      <h2>
        HOME
        {`姓名 ${this.props.name} 等级：${this.props.level}  区域：${this.props.local}`}
      </h2>
    );
  }
}

// 定义高阶函数
// 增强props

function withUser(WrappedComponent) {
  return ({ ...props }) => {
    return (
      <UserContext.Consumer>
        {(value) => {
          return <WrappedComponent {...props} {...value} />;
        }}
      </UserContext.Consumer>
    );
  };
}
const HocHome = withUser(Home);
const HocAbout = withUser(About);

class EnchanceHOCWithContext extends PureComponent {
  render() {
    return (
      <div>
        <UserContext.Provider
          value={{ name: "yukiice", level: 19, local: "中国" }}
        >
          <HocHome></HocHome>
          <br />
          <HocAbout></HocAbout>
        </UserContext.Provider>
      </div>
    );
  }
}

export default EnchanceHOCWithContext;
