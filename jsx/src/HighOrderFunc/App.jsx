import React, { Component } from 'react'
// import DemoHOC from './DemoHOC'
// import EnchanceHOC from './EnchanceHOC'
// import EnchanceHOCWithContext from './EnchanceHOCWithContext'
import LoginJudge from './LoginJudge'

export default class App extends Component {
    render() {
        return (
            <div>
               {/* <DemoHOC name="yukiice"></DemoHOC> */}
               {/* <EnchanceHOC></EnchanceHOC> */}
               {/* <EnchanceHOCWithContext></EnchanceHOCWithContext> */}
               <LoginJudge></LoginJudge>
            </div>
        )
    }
}
