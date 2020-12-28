import React, { Component } from "react";
import Child from "./Child";
export default class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: [
        {
          id: 666,
          name: "yukiice",
          age: 18,
          sex: "man",
        },
        {
          id: 999,
          name: "huahua",
          age: 20,
          sex: "women",
        },
      ],
      title: "hello world",
    };
  }
  FathersClick(id) {
    const titles = id + this.state.title;
    this.setState({
      title: titles,
    });
  }
  render() {
    return (
      <div>
        <Child
          count={this.state.count}
          FatherClick={this.FathersClick.bind(this)}
        ></Child>
        <br />
        <h2>{this.state.title}</h2>
      </div>
    );
  }
}
