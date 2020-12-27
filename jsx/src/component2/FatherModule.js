import React, { Component } from 'react'
import TabControl from './TabControl'

export default class FatherModule extends Component {
    constructor(props){
        super()
        this.state  ={
            title:['新款','精选','流行'],
            currentTitle: '新款'
        }
    }
    render() {
        return (
            <div>
                <TabControl title={this.state.title} itemClick={index=>this.currentClick(index)}></TabControl>
                <br/>
                <div>
                    {this.state.currentTitle}
                </div>
            </div>
        )
    }
    currentClick(index){
        const title = this.state.title
        this.setState({
            currentTitle: title[index]
        })
    }
}
