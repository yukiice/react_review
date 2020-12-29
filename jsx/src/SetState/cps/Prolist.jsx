import React, { PureComponent } from "react";

import { EventEmitter } from "events";
import { Button } from "antd";
const eventBus = new EventEmitter();

export default class Prolist extends PureComponent {
  componentDidMount() {
    eventBus.addListener("sayHello", this.handleCatch);
  }
  componentWillUnmount() {
    eventBus.removeListener("sayHello", this.handleCatch);
  }
  handleCatch(name,age) {
    console.log(name,age); 
  }  
  render() {
    return (
      <div>
        <Button type="danger">
          Prolist
        </Button>
      </div>
    );
  }
}
