import React, {Component} from "react";
import css from './Header.module.css';

class Header extends Component {
    render() {
        return (
            <div className={css.header}>
                <div className={css.logo}>
                   <h1>BledHuid</h1>
                </div>
                <div className={css.info}>
                    Интернет магазин <br/>
                    электронной техники
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
                            <p>Корзина</p>
                            <p className={css.total}>12 980 Р</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;