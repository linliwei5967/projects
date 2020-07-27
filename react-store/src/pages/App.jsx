import React from 'react'
import Header from 'components/Header'
import Products from 'components/Products'


class App extends React.Component{

    render() {
        return (
            <div>
                <Header nickName="Admin"/>
                <Products />
            </div>
        )
    }

}

export default App