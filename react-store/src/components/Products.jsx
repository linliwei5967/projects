import React from "react";
import axios from "commons/axios";
import ToolBox from "components/ToolBox";
import Product from "components/Product";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Panel from "components/Panel"
import AddInventory from "components/AddInventory"

class Products extends React.Component {
  state = {
    products: [],
    sourceProducts: [],
  };

  componentDidMount() {
    axios.get("/products").then((response) => {
      this.setState({
        products: response.data,
        sourceProducts: response.data,
      });
    });
  }

  // 搜索商品列表
  search = (text) => {
    // 1.获取原先数据 -> 解构
    let _products = [...this.state.sourceProducts];
    // 2.过滤后的数据 ->
    let count = 0
    _products = _products.filter((p) => {
        count++
        // console.log('w'+count,p.name)
        // console.log('a', p.name.match(new RegExp(text, "gi")))
        const matchArrayItem = p.name.match(new RegExp(text, "gi"));
        // !! -> 强制转换为Boolean类型 主要用于判断是否为为空
        return !!matchArrayItem;
    });
    // 3.set State
    this.setState({
      products: _products,
    });
  };

  toAdd = () =>{
    Panel.open()
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {/* {  console.log(this.state.products.length)} */}
            <TransitionGroup component={null}>
              {this.state.products.length > 0
                ? this.state.products.map((item, index) => {
                    return (
                      <CSSTransition
                        classNames="product-fade"
                        timeout={{ enter: 300, exit: 300 }}
                        key={item.id}
                      >
                        <div className="column is-3" key={item.id}>
                          <Product product={item} />
                        </div>
                      </CSSTransition>
                    );
                  })
                : ""}
            </TransitionGroup>
          </div>
          {/* 添加按钮 */}
          <button className="button is-primary add-btn" onClick={this.toAdd}>add</button>
        </div>
      </div>
    );
  }
}

export default Products;
