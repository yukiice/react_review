import React, { PureComponent } from "react";
import styled from "styled-components";

// 1、props穿透
// 2、attrs使用
// 3、传入state作为props属性

const HyInput = styled.input.attrs({
  placeholder: "yukiice",
  bColor: "red",
})`
  background-color: lightblue;
  border-color: ${(props) => props.bColor};
  color: ${(props) => props.color};
`;

export default class StyledProps extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      color: "purple",
    };
  }
  render() {
    return (
      <div>
        <HyInput type="text" color={this.state.color}></HyInput>
      </div>
    );
  }
}
