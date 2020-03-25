import React, {Component} from "react";
import css from './item.module.css'
import {NavLink} from "react-router-dom";

class Item extends Component {


    render() {
        let styleAddButton = this.props.product.button ? {display: 'block'} : {display: 'none'};
        let styleCartButton = this.props.product.button ? {display: 'none'} : {display: 'block'};

        return (
            <div className={css.item}>
                <div className={css.itemImg}>
                    <img src={this.props.product.icon} alt=""/><br/>
                </div>
                <div className={css.itemName}>
                    <a><h3>{this.props.product.name}</h3></a>
                </div>
                <div className={css.venderCode}>
                    Артикул: {this.props.product.id}
                </div>
                <div className={css.itemPrice}>
                    <h4>{(this.props.product.price).toLocaleString('ru')} &#x20BD;/шт </h4>
                </div>
                <div className={css.itemButton}>
                    <div style={styleAddButton} className={css.incart}>
                        <button onClick={()  => {this.props.store.addProductOnCart(this.props.product)}}>В корзину</button>
                    </div>
                    <div style={styleCartButton} className={css.cart}>
                        <NavLink to="/cart"><button>&#10003;В корзине</button></NavLink>
                    </div>
                </div>
            </div>
        )
    }
}


export default Item;
