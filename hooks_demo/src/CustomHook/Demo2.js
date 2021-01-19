import React, { useState, useEffect } from 'react'
import GetScrollPostion from './scrollPostionHook'
export default function Demo2() {
   const position  = GetScrollPostion()
    return (
        <div>
            <h2 style={{ position: "fixed", left: "0", top: '0' }}>{position }</h2>
            <h2 style={{ padding: "1000px 0" }}>
                hello
            </h2>
        </div>
    )
}
