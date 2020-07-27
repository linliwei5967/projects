/*
1. 一次渲染，随需调用
2. 装载组件
*/

import React from 'react'
import { render } from 'react-dom'

class Panel extends React.Component {
    state = {
        active:false,
    }

    open = () =>{
        this.setState({
            active: true
        })
    }

    close = () =>{
        this.setState({
            active: false
        })
    }

    render() {
        const _class = {
            true: 'panel-wrapper active',
            false: 'panel-wrapper'
        }

        const { active } = this.state;
        return (
            <div className={_class[active]}>
                <div className="over-layer" onClick={this.close}></div>
                <div className="panel">
                    <div className="head">
                        <span className="close" onClick={this.close}>x</span>
                        <p className="has-text-centered">
                            children Component
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const _div = document.createElement('div')
document.body.appendChild(_div)
const _panel = render(<Panel />, _div)
// 此时导出的不是class模板 -> 是加载引用后的示例对象
export default _panel;