import React, { Component } from 'react'
import { render } from 'react-dom'
// import './index.less'
import { Button } from 'antd';
class App extends Component {
    render() {
        return (
            <div>
                App<Button type='primary'>按钮</Button>
            </div>
        )
    }
}
render(
    <App />,
    document.querySelector('#root')
)