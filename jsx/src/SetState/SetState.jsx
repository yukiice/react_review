import React, { Component } from 'react'
import GlobalEvent from './GlobalEvent'
// import SetStateNoChange from './SetStateNoChange'
// import Memo from './Memo'
// import RenderNest from './RenderNest'
// import SetStateCombine from './SetStateCombine'
// import SetStateAsync from './StateAsync'

export default class SetState extends Component {
    render() {
        return (
            <div>
                {/* 异步原因 */}
                {/* <SetStateAsync></SetStateAsync> */}
                {/* setstate数据合并 */}
                {/* <SetStateCombine></SetStateCombine> */}
                {/* render嵌套 */}
                {/* <RenderNest></RenderNest> */}
                {/* Memo的使用 */}
                {/* <Memo></Memo> */}
                {/* <SetStateNoChange></SetStateNoChange> */}
                <GlobalEvent></GlobalEvent>
            </div>
        )
    }
}
