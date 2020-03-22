import React, {Component} from "react";
import css from './item.module.css'

class Item extends Component {

    addProductOnCart() {
        let id = this.props.id;
        let name = this.props.name;
        let price = this.props.price;
        let icon = this.props.icon;
        let count = this.props.count;
        this.props.addProductOnCart(id, name, price, icon, count);
        debugger
    }

    render() {

        return (
            <div className={css.item}>
                <div className={css.itemImg}>
                    <img src={this.props.icon} alt=""/><br/>
                </div>
                <div className={css.itemName}>
                    <a><h3>{this.props.name}</h3></a>
                </div>
                <div className={css.venderCode}>
                    Артикул: {this.props.id}
                </div>
                <div className={css.itemPrice}>
                    <h4>{(this.props.price).toLocaleString('ru')} &#x20BD;/шт </h4>
                </div>
                <div className={css.itemButton}>
                    <div className={css.incart}>
                        <button className={css.test} onClick={this.addProductOnCart.bind(this)}>В корзину</button>
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
