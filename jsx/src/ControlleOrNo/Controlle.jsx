import { Input } from 'antd'
import React, { PureComponent } from 'react'
// 这里是受控组件  
// 这个例子很好的展示了react的单向数据流

// 非受控组件指操作DOM来进行完成表单事件  不推荐

export default class Controlle extends PureComponent {
    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:'',
            age:''
        }
    }
    handleClick(e){
        e.preventDefault()
        // 这里就是绑定完完成的数据
        const {username,password,age} = this.state
        console.log(username,password,age);
    }
    handleChange(e){
        this.setState({
            // es6写法  计算属性名
            [e.target.name]:e.target.value
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={e=>this.handleClick(e)}>
                    <label htmlFor="username">
                        用户<Input type="text" value={this.state.username}  id="username" name="username" onChange={e=>this.handleChange(e)}></Input>
                    </label>
                    <label htmlFor="username">
                        密码<Input type="text" value={this.state.password}  id="password" name="password" onChange={e=>this.handleChange(e)}></Input>
                    </label>
                    <label htmlFor="username">
                        年龄<Input type="text" value={this.state.age}  id="age" name="age" onChange={e=>this.handleChange(e)}></Input>
                    </label>
                    <br/>
                    <input type="submit" value="提交"/> 
                </form>
            </div>
        )
    }
}
