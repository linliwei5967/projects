import React from 'react'

class ToolBox extends React.Component {

    state = {
        searcuText: ''
    }

    HanldChange = (e) => {
        const value = e.target.value;
        this.setState({
            searcuText: value
        })
        // 调用 Products -> 搜索 过滤方法
        this.props.search(value)
    }

    clearSearchText = (e) =>{
        this.setState({
            searcuText: ''
        })
        this.props.search('')
    }

    render () {
    const { searcuText } = this.state
     return (
         <div className="tool-box">
           <div className="logo-text">STORE</div>
           <div className="search-box">
               <div className="field has-addons">
                   <div className="control">
                        <input 
                            type="text" 
                            className="input search-input"
                            placeholder="Search Product"
                            value={searcuText}
                            onChange={this.HanldChange}
                        />   
                    </div>
                    <div className="control">
                        <button className="button" onClick={this.clearSearchText}>X</button>
                    </div>
               </div>
           </div>
           <div className="cart-box">
               <i className="fas fa-shopping-cart"></i>
               <span className="cart-num">(0)</span>
           </div>
         </div>
     )   
    }
}
export default ToolBox;