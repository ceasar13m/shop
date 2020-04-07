import React, {Component} from "react";
import css from './Order-Cart.module.css'
import {NavLink} from "react-router-dom";

class OrderCart extends Component {
    render() {
        //итоговая сумма товаров в корзине
        let total = 0;
        let cartSum = () => {
            for (let i = 0; i < this.props.cart.length; i++) {
                total += this.props.cart[i].price * this.props.cart[i].count
            }
        };
        cartSum();

        return (
            <div>
                <table>
                    <tr>
                        <td className={css.name}>
                            Название
                        </td>
                        <td className={css.price}>
                            Стоимость
                        </td>
                        <td className={css.count}>
                            Количество
                        </td>
                        <td className={css.totalGood}>
                            Цена
                        </td>
                    </tr>
                    {this.props.cart.map((cart) => {
                        return (
                            <tr>
                                <td>
                                    {cart.name}
                                </td>
                                <td>
                                    {(cart.price).toLocaleString('ru')} &#x20BD;
                                </td>
                                <td>
                                    {cart.count}
                                </td>
                                <td>
                                    {(cart.price * cart.count).toLocaleString('ru')} &#x20BD;
                                </td>
                            </tr>
                        )
                    })}
                </table>
                <div className={css.container}>
                    <div className={css.block}>
                        Итого: <span>{(total).toLocaleString('ru')} &#x20BD;</span>
                        <div className={css.button}>
                            <a href="/">
                                <button>
                                    Изменить заказ
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default OrderCart;