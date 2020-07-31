import React, { Component } from 'react'
import { Button } from 'antd'

const TestHoc = (WrappedCpmonent) => {
    return class HocComponent extends Component {
        render() {
            return (
                <>
                    <WrappedCpmonent />
                    这是高阶组件里面的东西
                </>
            )
        }
    }
}
@TestHoc
class App extends Component {
    render() {
        return (
            <div>
                App
                <Button type='primary'>按钮</Button>
            </div>
        )
    }
}
export default App
