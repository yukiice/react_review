import React, { Component } from 'react'
import Child from './Child'

export default class FatherChild extends Component {
    render() {
        return (
            <div>
                father
                <br/>
                <Child name="yukiice" age="18" sex="man"></Child>
            </div>
        )
    }
}
