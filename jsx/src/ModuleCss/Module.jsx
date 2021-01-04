import React, { PureComponent } from 'react'

import style from './style.module.css'

export default class Module extends PureComponent {
    render() {
        return (
            <div>
                <h2 className={style.home}>
                    hello
                </h2>
            </div>
        )
    }
}
