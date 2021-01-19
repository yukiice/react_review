import React,{useState,useEffect} from 'react'

export default function EffectDemo() {
    const [count,setCount] = useState(0)

    // dom加载完毕后  useEffect就会触发
    // useEffect 可以有第二个参数， 只有当第二个参数改变的时候，他才会被重新触发
    // 根据此，我们可以做性能的优化
    useEffect(() =>{
        document.title  = count
    })
    return (
        <div>
            {count}
        </div>
    )
}
