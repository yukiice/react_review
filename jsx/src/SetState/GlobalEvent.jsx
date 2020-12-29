import React, { PureComponent } from 'react'
import Profile from './cps/Profile'
import Prolist from './cps/Prolist'


export default class GlobalEvent extends PureComponent {
    render() {
        return (
            <div>
                <Profile></Profile>
                <Prolist></Prolist>
            </div>
        )
    }
}
