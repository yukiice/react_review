import React, { PureComponent } from "react";

import { eventBus } from "./Profile";

import { Button } from "antd";

export default class Prolist extends PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleCatch);
  }
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleCatch);
  }
  handleCatch(name, age) {
    console.log(name, age);
  }
  render() {
    return (
      <div>
        <Button type="danger">Prolist</Button>
      </div>
    );
  }
}
