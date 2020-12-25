import React, { Component } from "react";
import { Button } from "antd";

export class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  addClick() {
    this.setState({
      number: this.state.number + 1,
    });
  }
  reduceClick() {
    this.setState({
      number: this.state.number - 1,
    });
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.addClick.bind(this)}>
          {" "}
          添加{" "}
        </Button>{" "}
        <br /> {this.state.number} <br />
        <Button type="danger" onClick={this.reduceClick.bind(this)}>
          {" "}
          减少{" "}
        </Button>{" "}
      </div>
    );
  }
}
