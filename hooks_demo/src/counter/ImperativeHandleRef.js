import React,{useRef,forwardRef,useImperativeHandle} from 'react'
import {  Button} from "antd";

// forwardRef


const HyInput = forwardRef((props,ref)=>{


    // 创建一个子组件自己的Ref
    const inputRef = useRef()


    useImperativeHandle(ref,()=>({
        // 这样就不会过多暴露子组件的ref
        // 这里调用的是子组件的自己的ref
        focus:()=>{
            inputRef.current.focus()
        }
    }))
    return <input type="text" ref={inputRef} />
})

export default function ImperativeHandleRef() {
    const inputRef = useRef()
    return (
        <div> 
        <HyInput ref={inputRef}></HyInput>
        <Button onClick={()=>inputRef.current.focus()}>点击</Button>
        </div>
    )
}
