import React, { Component } from 'react';

export class Demo extends Component {
    onClicks() {
        this.setState({
            name: 'hello react',
           
        })
    }
    constructor() {
        super()
        this.state = {
            name: 'hello world',
            movie: ['1', '2', '3', '4', '5']
        }
    }

    render() {

        return (
            <div>
                <div onClick={this.onClicks.bind(this)}>
                    {this.state.name}
                </div>
                    {
                        this.state.movie.map((item,index) => {
                            return <div key={index}>{item}</div>
                        })
                    }
            </div>

        )
    }
}