import React, { Component } from 'react'
import Child from './Child'
import ChildToFather from './ChildToFather'
import FuncDemo from './FuncDemo'

export default class FatherChild extends Component {
    constructor(props){
        super()
        this.state = {
            count:1
        }
    }
    render() {
        return (
            <div>
                father
                <br/>
                <Child name="yukiice" age="18" sex="man"></Child>
                <br/>
                <FuncDemo name="funcname"></FuncDemo>
                <br/>
                <div>
                父组件值
                {this.state.count}
                </div>
                <ChildToFather onClick={this.addclcik}></ChildToFather>
            </div>
        )
    }
    addclcik = ()=>{
        this.setState({ 
            count:this.state.count +1
        })
    }
}
