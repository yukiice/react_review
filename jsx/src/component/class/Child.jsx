import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      name: "",
      age: "",
      sex: "",
    };
  }
  componentDidMount() {
    this.setState({
      name: this.props.name,
      age: this.props.age,
      sex: this.props.sex,
    });
  }
  render() {
    return (
      <div>
        {this.state.name}
        <br />
        {this.state.age}
        <br />
        {this.state.sex}
      </div>
    );
  }
}
