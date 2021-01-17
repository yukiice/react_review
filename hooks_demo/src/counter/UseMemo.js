import React,{useState,useMemo} from 'react'
import { Button } from "antd";
function calcNumber(count){
    console.log('计算了')
    let sum =  0
    for (let i=1;i<=count;i++){
        sum += i
    }
    return sum
}

export default function UseMemo() {
    const [count,setCount] = useState(10)
    const [show,isShow] = useState(true)

    const sum = useMemo(() => {
        return calcNumber(count)
        }, [count])
    return (
        <div>
            <h2>数字和：{sum}</h2>
            <Button onClick={()=>setCount(count + 1)}>增加</Button>
            <Button onClick={()=> isShow(!show)}>show切换</Button>
        </div>
    )
}
