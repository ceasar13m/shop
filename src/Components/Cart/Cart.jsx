import React, {Component} from "react";
import css from "./Cart.module.css";
import CartItem from "./CartItem";
import {NavLink} from "react-router-dom";
import cartImg from "./Img/cart.png"
import Footer from "../Footer/Footer";

class Cart extends Component {

    render() {
        let cart = [];
        for (let [key, value] of this.props.cart) {
            cart.push(value);
        }

        //итоговая сумма товаров в корзине
        let total = 0;
        let cartSum = () => {
            for (let i = 0; i < cart.length; i++) {
                total += cart[i].price * cart[i].count
            }
        };
        cartSum();

        let state = true;
        if (this.props.cart.size !== 0){
            state = false
        }
        let styleIsGood = state ? {display: 'none'} : {display: 'block'};
        let styleNoGood = state ? {display: 'flex'} : {display: 'none'};
        return (
            <div className={css.cart}>
                <div className={css.intro}>
                    <h1>Корзина</h1>
                </div>
                {/*В корзине есть товар*/}
                <div style={styleIsGood}>
                    <div className={css.cartElements}>
                        {cart.map(good => <CartItem good={good} store={this.props.store}/>)}
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
                                <NavLink to="/order">
                                    <button>
                                        Оформить заказ
                                    </button>
                                </NavLink>
                            </div>
                            <div className={css.catalogButton}>
                                <NavLink to="/">
                                    <button>
                                        Продолжить покупки
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Корзина пуста*/}
                <div style={styleNoGood} className={css.noGood}>
                    <div className={css.noImg}>
                        <img src={cartImg} alt=""/>
                    </div>
                    <div className={css.noTitle}>
                        <h1>Ваша корзина пуста</h1>
                    </div>
                    <div className={css.noSubTitle}>
                        <NavLink to="/">Нажмите здесь</NavLink>, чтобы совершить покупку
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Cart;