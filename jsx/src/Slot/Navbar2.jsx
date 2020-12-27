import React, { Component } from 'react'
import './index.css'
export default class Navbar2 extends Component {
    render() {
        const { leftSlot,middleSlot,rightSlot } = this.props
        return (
            <div className="item">
        <div className="left">
            {leftSlot}
        </div>
        <div className="middle">
            {middleSlot}
        </div>
        <div className="right">
            {rightSlot}
        </div>
      </div>
        )
    }
}
