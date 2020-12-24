import React, { Component, Fragment } from 'react'


export class Jsx1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [{
                name: '花花1'
            },
            {
                name: '花花2'
            },
            {
                name: '花花3'
            },]

        }
    }
    liClick = (item, index, e) => {
        console.log(item, index, e)
    }
    render() {
        return (
            <Fragment>
                <div >
                    <div>
                        {
                            this.state.arr.map((item, index) => {
                                return <li onClick={e => { this.liClick(item, index, e) }} key={index}>{item.name}</li>
                            })
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}