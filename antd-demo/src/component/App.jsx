import React, { PureComponent } from 'react'
import CommonInput from './CommonInput'
import CommonItem from './CommonItem'

export default class App extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            commentList:[]
        }
    }
    submitConment(e){
        this.setState({
            commentList:[...this.state.commentList,e]
        })
    }
    removeItem(index){
       const newList = [...this.state.commentList]
       newList.splice(index,1)
       this.setState({
           commentList:newList
       })
       
    }
    render() {
        return (
            <div >
                {
                    this.state.commentList.map((item,index)=>{
                        return <CommonItem items={item} key={index} removeItem={(e)=>this.removeItem(index)}></CommonItem>
                    })
                }
                <CommonInput submitConment={(e)=>this.submitConment(e)} ></CommonInput>
            </div>
        )
    }
}
