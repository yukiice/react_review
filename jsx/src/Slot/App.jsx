import React, { Component } from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";

export default class App extends Component {
  
  
  render() {
    const leftSlot = <div>aaa</div>
    const middleSlot = <div>bbb</div>
    const rightSlot = <div>ccc</div>
    return (
      <div>
        <Navbar>
          <div>aaa</div>
          <div>bbb</div>
          <div>ccc</div>
        </Navbar>
        <br />
        <Navbar2 leftSlot={leftSlot} middleSlot={middleSlot} rightSlot={rightSlot}></Navbar2>
      </div>
    );
  }
}
