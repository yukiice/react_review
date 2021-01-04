import React, { PureComponent } from 'react'
import { Home } from "./style";

export default class StyldComponents extends PureComponent {
    render() {
        return (
            <Home>
                <div>
                    <div className="banner">
                        <span className="active">
                        hellos
                        </span>
                    </div>
                </div>
            </Home>
        )
    }
}
