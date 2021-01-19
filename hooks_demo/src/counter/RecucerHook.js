import React, { useReducer } from 'react'
import { Button } from 'antd'


// 定义reducer函数
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count + 1 }

        case 'decrement':
            return { ...state, count: state.count - 1 }
        default:
            return state
    }
}

export default function RecucerHook() {


    // userReducer实际可以传入三个值，reducer,initstate,func  但第三个是一个函数，并不经常用
    const [state, dispatch] = useReducer(reducer, { count: 0 })
    return (
        <div>
            <h2>当前计数：{state.count}</h2>
            <Button onClick={() => dispatch({ type: "increment" })}>增加</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })}>减少</Button>
        </div>
    )
}
