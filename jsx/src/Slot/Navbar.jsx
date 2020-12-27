import React, { Component } from "react";
import './index.css'
export default class Navbar extends Component {
  render() {
    return (
      <div className="item">
        <div className="left">
            {
                this.props.children[0]
            }
        </div>
        <div className="middle">
            {
                this.props.children[1]
            }
        </div>
        <div className="right">
            {
                this.props.children[2]
            }
        </div>
      </div>
    );
  }
}
