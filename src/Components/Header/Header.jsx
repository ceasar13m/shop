import React, {Component} from "react";
import css from './Header.module.css';
import {NavLink} from 'react-router-dom';
import cartImg from "./Img/cart.png"

class Header extends Component {


    render() {


        let cartState = {backgroundColor: '#9f9f9f'}
        if(this.props.store.goodState.cart.length != 0) {
            cartState = {backgroundColor: 'red'}
        }

        let total = 0;
        let arr = this.props.store.goodState.cart;

        let cartSum = () => {
            for (let i = 0; i < arr.length; i++) {
                total += arr[i].price * arr[i].count
            }
        };
        cartSum();

        return (
            <div className={css.header}>
                <div className={css.logo}>
                    <NavLink className={css.navLink} to="/"><h1>BLEDHUID</h1></NavLink>
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
                                {this.props.store.goodState.cart.length}
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