import React, { PureComponent } from 'react'
import { Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import moment from 'moment'
export default class CommonInput extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            content:''
        }
    }
    changeClick(){
        const commendInfo = {
            id:moment().valueOf(),
            avatar:'https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/导航List_bilibili.png',
            name:'yukiice',
            datetime:moment(),
            content:this.state.content
        }
        this.props.submitConment(commendInfo)
        this.setState({
            content:''
        })
    }
    valueChange(e){
        this.setState({
            content:e.target.value
        })
    }
    render() {
        return (
            <div>
                <TextArea rows={4} value={this.state.content} onChange={(e)=>this.valueChange(e)}></TextArea>
                <br/>
                <Button type="primary" onClick={()=>this.changeClick()} >确认</Button>
            </div>
        ) 
    }
}
