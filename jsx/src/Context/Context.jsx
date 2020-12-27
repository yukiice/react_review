import React, { Component } from 'react'
import Consumer from './Consumer'
import Profile from './Profile'

// 这里面内部的 主要是默认值
export const UserContext = React.createContext({
    name:'cyukiice',
    level:0
})

// 将此绑定上去
Consumer.contextType = UserContext


export default class Context extends Component {
    constructor(props){
        super(props)
        this.state = {
            name:'yukice',
            level:99
        }
    }
    render() {
        return (
            <div>
                <Profile {...this.state}></Profile>
                <br/>
                <br/>
                <UserContext.Provider value={ this.state}>
                <Consumer></Consumer>
                </UserContext.Provider>
            </div>
        )
    }
}
