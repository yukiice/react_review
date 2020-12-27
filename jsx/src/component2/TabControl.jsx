import React, { Component } from 'react'
import './item.css'
export default class TabControl extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentIndex:0
        }
    }
    currentClick(index){
       this.setState({
          currentIndex:index
       })
    //    取出方法
       const {itemClick} = this.props
    //    传入index给父组件
       itemClick(index)
    }
    render() {
        const {title} = this.props
        const {currentIndex}  = this.state
        return (
            <div className="items">
              {
                  title.map((item,index)=>{
                      return (
                        <div key={index} onClick={e=>this.currentClick(index)} className={"item " + (index=== currentIndex ? 'active' :'')}>
                            {item}
                        </div> 
                      )
                  })
              }  
            </div>
        )
    }
}
