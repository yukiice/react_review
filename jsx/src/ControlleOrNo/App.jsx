import React, { Component } from 'react'
import Controlle from './Controlle'
// import Refs from './Refs'

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <Refs></Refs> */}

                {/* 受控组件  */}
                <Controlle></Controlle>
            </div>
        )
    }
}
