import { Button } from 'antd'
import React, { Component,createRef } from 'react'

// Ref的值根据根节点的类型不同而有所不同
// 当ref属性作用于HTML元素时候，构造函数中使用createRef创建的ref接收底层DOM元素将其作为current属性
// 当ref属性用于自定义class组件时候，ref对象接收组件的挂载实例作为其current属性
// 你不能在函数组件中使用ref对象，因为他们没有实例
// 但是如果你真的想要获取函数组件中的某个DOM元素
// 那么可以通过React.forwardRef，还有就是HOOKS里面


export default class Refs extends Component {
    constructor(props){
        super(props)
        this.objRef = createRef()
    }
    changeClick(){
        console.log(this.objRef.current);
        this.objRef.current.innerHTML = 'hello'
    }
    render() {
        return (
            <div>
                <h2 ref={this.objRef}>
                    hello Yukiice
                </h2>
                <Button onClick={()=>this.changeClick()}>change</Button>
            </div>
        )
    }
}
