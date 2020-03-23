import React, {Component} from "react";
import css from './item.module.css'

class Item extends Component {


    render() {

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
                    <div className={css.incart}>
                        <button onClick={()  => {this.props.store.addProductOnCart(this.props.product)}}>В корзину</button>
                    </div>
                    <div className={css.cart}>
                        <button href="/23">В корзине</button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Item;
