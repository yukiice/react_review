import React, { PureComponent } from 'react'


class DemoHOC extends PureComponent {
    render() {
        return (
            <div>
                HOC
                <br/>
                {this.props.name}
            </div>
        )
    }
}

// 注意去F12 控制台看 component   看外层包裹

function enhanceComponent(WrapperComponent){
    return class NewComponent extends PureComponent{
        render() {
            return (
                <WrapperComponent {...this.props}></WrapperComponent>
            )
        }
    }
}
const EnhanceComponent = enhanceComponent(DemoHOC)


export default EnhanceComponent
