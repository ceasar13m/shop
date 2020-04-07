import React, {Component} from "react";
import css from './Header.module.css';
import {NavLink} from 'react-router-dom';
import cartImg from "./Img/cart.png"

class Header extends Component {


    render() {
        //Меняет цвет кол-ва товаров в шапке, в зависимости от наличия товара в корзине
        let cartState = {backgroundColor: '#9f9f9f'}
        if(this.props.store.goodState.cart.size !== 0) {
            cartState = {backgroundColor: 'red'}
        }

        let good = [];
        for (let [key, value] of this.props.store.goodState.cart) {
            good.push(value);
        }

        //итоговая сумма товаров в корзине
        let total = 0;
        let cartSum = () => {
            for (let i = 0; i < good.length; i++) {
                total += good[i].price * good[i].count
            }
        };
        cartSum();

        return (
            <div className={css.header}>
                <div className={css.logo}>
                    <NavLink className={css.navLink} to="/">ЯхшыМаркет</NavLink>
                </div>
                <div className={css.info}>
                    Интернет магазин <br/>
                    электронной техники
                </div>
                <div className={css.container}>
                    <div className={css.tel}>
                        <img src="https://zurmarket.ru/bitrix/templates/aspro_next/images/svg/Phone_black.svg" alt=""/>
                        8 (800) 355-35-35
                    </div>
                    <div className={css.cart}>
                        <div className={css.cartImg}>
                            <NavLink to="/cart"><img src={cartImg} alt=""/></NavLink>
                            <div style={cartState} className={css.countProducts}>
                                {this.props.store.goodState.cart.size}
                            </div>
                        </div>
                        <div className={css.cartInfo}>
                            <NavLink className={css.navLinkCart} to="/cart">Корзина</NavLink>
                            <p className={css.total}>{total.toLocaleString('ru')} &#x20BD;</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;