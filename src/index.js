import React, { Component } from 'react'
import { render } from 'react-dom'
// import './index.less'
class App extends Component {
    render() {
        return (
            <div>
                App
            </div>
        )
    }
}
render(
    <App />,
    document.querySelector('#root')
)