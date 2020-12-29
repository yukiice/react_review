import React, { PureComponent } from "react";
import { EventEmitter } from "events";
import { Button } from "antd";
const eventBus = new EventEmitter();

export default class Profile extends PureComponent {
  toChangeBus() {
    eventBus.emit("sayHello", "hello", 123);
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.toChangeBus()}>Profile</Button>
      </div>
    );
  }
}
