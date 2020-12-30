import React, { PureComponent } from "react";
import { EventEmitter } from "events";
import { Button } from "antd";
export const eventBus = new EventEmitter();

export default class Profile extends PureComponent {
  toChangeBus() {
    eventBus.emit("sayHello", 123, 'hello');
  }
  render() {
    return (
      <div>
        <Button onClick={() => this.toChangeBus()}>Profile</Button>
      </div>
    );
  }
}
