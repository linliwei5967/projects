import React from 'react'
import {formatPrice} from 'commons/hepler'

class Product extends React.Component {

    render () {
    const {product}=this.props;
     return (
         <div className={product.status==="available"?"product":"product out-stock"}>
            <div className="p-content">
                <div className="img-wrapper">
                    <div className="out-stock-text">Out Of Stock</div>
                    <figure className="image is-4by3">
                        <img src={product.image} alt=""/>
                    </figure>
                </div>
                <p className="p-tags">{product.tags}</p>
                <p className="p-name">{product.name}</p>
            </div>
            <div className="p-footer">
                <p className="price">{formatPrice(product.price)}</p>
                <button className="add-cart" disabled={product.status==="available"?false:true}>
                    <i className="fas fa-shopping-cart"></i>
                    <i className="fas fa-exclamation"></i>
                </button>
            </div>
         </div>
     )   
    }
}
export default Product;