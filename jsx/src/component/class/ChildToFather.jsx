import { Button } from 'antd'
import React,{Component} from 'react'

export default class  ComponentChildToFather extends Component{
    render() {
        const {onClick} = this.props
        return (
            <div>
                   <Button type="primary" onClick={onClick}>子组件改变父组件值</Button>
            </div>
        )
    }
}
