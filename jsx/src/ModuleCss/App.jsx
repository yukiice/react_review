import React, { PureComponent } from 'react'
// import Module from './Module'
import StyldComponents from './StyldComponents'
import StyledProps from './StyledProps'

export default class App extends PureComponent {
    render() {
        return (
            <div>
                {/* <Module></Module> */}
                <StyldComponents></StyldComponents>
                <StyledProps></StyledProps>
            </div>
        )
    }
}
