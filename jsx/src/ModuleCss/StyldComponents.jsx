import React, {useState } from 'react'
import { Home,Img } from "./style";


export default function StyldComponents() {
    const [imgs,setImgs] = useState('https://dss1.bdstatic.com/5aAHeD3nKgcUp2HgoI7O1ygwehsv/media/ch1000/png/%E5%AF%BC%E8%88%AAList_bilibili.png')
    return (
        <div>
            <Home>
                <div>
                    <div className="banner">
                        <span className="active">
                        hellos
                        </span>
                    </div>
                    <Img src={imgs}></Img>
                </div>
            </Home>
        </div>
    )
}
