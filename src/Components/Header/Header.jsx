import React, {Component} from "react";
import css from './Header.module.css';
import {NavLink} from 'react-router-dom';

class Header extends Component {


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
            <div className={css.header}>
                <div className={css.logo}>
                    <NavLink className={css.navLink} to="/"><h1>BLEDHUID</h1></NavLink>
                </div>
                <div className={css.info}>
                    Интернет магазин <br/>
                    электронной техники jhvghv
                </div>
                <div className={css.container}>
                    <div className={css.tel}>
                        <img src="https://zurmarket.ru/bitrix/templates/aspro_next/images/svg/Phone_black.svg" alt=""/>
                        +7 (843) 240-65-10
                    </div>
                    <div className={css.cart}>
                        <div className={css.cartImg}>
                            <img src="https://img.icons8.com/pastel-glyph/64/000000/shopping-cart--v2.png" alt=""/>
                        </div>
                        <div className={css.cartInfo}>
                            <NavLink className={css.navLinkCart} to="/cart">Корзина</NavLink>
                            <p className={css.total}>{total} Р</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;