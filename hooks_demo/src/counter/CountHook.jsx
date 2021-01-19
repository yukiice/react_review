import  React,{useState} from 'react'
import {Button} from 'antd'
export default function CountHook() {
    const [count,setCout] = useState(0)

    const [student,setStudent] = useState([
        {name:'yukiice',age:18},
        {name:'yukiice',age:18},
        {name:'yukiice',age:18},
    ])
    function addClick(e){
        const newStudent = [...student]
        newStudent[e].age += 1 
        setStudent(newStudent)
    }
    return (
        <div>
            <Button type="primary" onClick={()=> setCout(count + 1)}>增加</Button>
        <h2>{count}</h2>
            <Button type="primary" onClick={()=> setCout(count - 1)}>减少</Button>

            <br/>
            <br/>
            
            <h2>这里是学生页面</h2>
            <br/>
            <ul>
                {
                    student.map((item,index)=>{
                        return (
                            <li key={index}>
                                <span>姓名：{item.name} 年龄：{item.age}</span>
                                <Button size="small" onClick={()=>addClick(index)}>增加</Button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
