import { Button } from 'antd'
import React,{useState,useEffect,useLayoutEffect} from 'react'

// useLayoutEffect 与  useEffect非常的相似，实际他们也就是只有一点区别而已
// useEffect 会在渲染的内容更新到DOM上后执行，不会阻塞DOM的更新
// useLayoutEffect 会在渲染的内容更新到DOM上之前执行，会阻塞DOM的更新
// 如果我们希望在某些操作发生之前再更新DOM，那么应该将整个这个操作放到useLayoutEffect上

export default function LayoutEffectHook() {
    const  [count,setCount]  = useState(5)
    useLayoutEffect(()=>{
        if(count ===0) {
            setCount(Math.random())
        }
    },[count])
    return (
        <div>
            <h2>
                {count}
            </h2>
            <Button onClick={()=>setCount(0)}>点击</Button>
        </div>
    )
}
