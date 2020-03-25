import React, {Component} from "react";
import css from './CartItem.module.css';

class CartItem extends Component {

    render() {

        // Итого
        let total = 0;
        total = this.props.good.count * this.props.good.price;


        return (
            <div className={css.item}>
                <div className={css.itemImg}>
                    <img src={this.props.good.icon}/>
                </div>
                <div className={css.itemName}>
                    <h3>{this.props.good.name}</h3>
                </div>
                <div className={css.itemPrice}>
                    {(this.props.good.price).toLocaleString('ru')} &#x20BD;
                    <p>цена за 1 шт</p>
                </div>
                <div className={css.countBlock}>
                    <div className={css.itemCount}>
                        <button onClick={() => {this.props.store.countDecr(this.props.good)}}>
                            -
                        </button>
                        <div className={css.count}>
                            {this.props.good.count}
                        </div>
                        <button onClick={() => {
                            this.props.store.countIncr(this.props.good)
                        }}>+
                        </button>
                    </div>
                    <p>шт</p>
                </div>
                <div className={css.itemTotal}>
                    {(total).toLocaleString('ru')} &#x20BD;
                </div>
                <div className={css.itemDellButton}>
                    <button onClick={() => {
                        this.props.store.dellProductOnCart(this.props.good)
                    }}>&#215;
                    </button>
                </div>
            </div>

        )
    }
}

export default CartItem;