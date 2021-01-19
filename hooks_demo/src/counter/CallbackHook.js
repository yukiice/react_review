import { Button } from 'antd'
import React, { useState, useCallback, memo } from 'react'

// useCallback 在将一个组件中的函数，传递给子元素进行回调使用的时候。使用usecallback进行处理 

const HyButton = memo((props) => {
    console.log('hyButton重新渲染了')
    return <Button onClick={props.increment}>HyButton</Button>
})

export default function CallbackHook() {
    console.log('callBack重新渲染')
    const [count, setCount] = useState(0)

    const increment1 = () => {
        console.log('执行了increment1')
        setCount(count + 1)
    }
    const increment2 = useCallback(() => {
        console.log('执行了increment2')
        setCount(count + 1)
    }, [count])
    return (
        <div>
            <h2>
                {count}
            </h2>
            <HyButton title="btn1" increment={increment1}></HyButton>
            <HyButton title="btn2" increment={increment2}></HyButton>
        </div>
    )
}
