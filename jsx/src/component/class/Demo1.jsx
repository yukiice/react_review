import React, { Component } from 'react'
import { Button } from "antd";

function Header(){
    return (
        <h2>Header</h2>
    )
}
function Main(){
    return (
        <h2>Main</h2>
    )
}
function Footer(){
    return (
        <h2>Footer</h2>
    )
}

export default class Demo1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            count:1
        }
        this.changeClick = this.changeClick.bind(this)
        console.log('执行了constructor方法');
    }
    componentDidMount(){
        console.log('执行了didmount方法');
    }
    componentDidUpdate(){
        console.log('更新了');
    }
    changeClick(){
        const counts =  {...this.state}
        counts.count ++
        this.setState({
            count: counts.count
        })
        console.log('count增加了');
    }
   
    render() {
        console.log('执行了render方法')
        return (
            <div>
               <div>
               {this.state.count}
               </div>
              <div>
                  Start
              </div>
               <br/>
               <br/>
               <Button type="primary" onClick={this.changeClick}>变化</Button>
               <br/>
               <Header></Header>
               <Main></Main>
               <Footer></Footer>
            </div>
        )
    }
}
