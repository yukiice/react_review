import React, { PureComponent } from 'react'


function loginHoc(WrappedComponent){
    return ({...props})=> {
    const {isLogin} = props
    if (isLogin) {
        return <WrappedComponent {...props}></WrappedComponent>
    }else {
        return <LoginPage></LoginPage>
    }
    }
}

// 登录鉴权操作

class LoginPage extends PureComponent {
    render() {
        return (
            <div>
                Login
            </div>
        )
    }
}
class CardPage extends PureComponent {
    render() {
        return (
            <div>
                Card
            </div>
        )
    }
}

const HocLogin = loginHoc(CardPage)


export default class LoginJudge extends PureComponent {
    render() {
        return (
            <div>
               <HocLogin isLogin={true}></HocLogin> 
            </div>
        )
    }
}
