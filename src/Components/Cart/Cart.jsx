import React, {Component} from "react";
import css from "./Cart.module.css";
import CartItem from "./CartItem";
import {NavLink} from "react-router-dom";

class Cart extends Component{

    render() {

        let total = 0;
        let arr = this.props.store.goodState.cart;

        let cartSum = () => {
            for (let i = 0; i < arr.length; i++) {
                total += arr[i].price * arr[i].count
            }
        };
        cartSum();

        return (
            <div className={css.cart}>
                <div className={css.intro}>
                    <h1>Корзина</h1>
                </div>
                <div className={css.cartElements}>
                    {this.props.cart.map(good => <CartItem good={good} store={this.props.store}/> )}
                </div>
                <div className={css.container}>
                    <div className={css.total}>
                        <div className={css.totalName}>
                            Итого:
                        </div>
                        <div>
                            {(total).toLocaleString('ru')} &#x20BD;
                        </div>
                    </div>
                    <div className={css.cartButtons}>
                        <div className={css.checkoutButton}>
                            <button>
                                Оформить заказ
                            </button>
                        </div>
                        <div className={css.catalogButton}>
                            <NavLink to="/"><button>
                                Продолжить покупки
                            </button></NavLink>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Cart;