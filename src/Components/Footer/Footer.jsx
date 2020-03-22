import React, {Component} from "react";
import css from './Footer.module.css'

class Footer extends Component {
    render() {
        return (
            <div className={css.footer}>
                <div className={css.container}>
                    <h3>Компания</h3>
                    <p>О компании</p>
                    <p>Акции</p>
                    <p>Вакансии</p>
                    <p>Магазины</p>
                    <p>Политика</p>
                </div>
                <div className={css.container}>
                    <h3>Информация</h3>
                    <p>Рассрочка</p>
                    <p>Сервис</p>
                </div>
                <div className={css.container}>
                    <div>
                        <h3>Будьте всегда в курсе!</h3>
                        <input type="text"/>
                        <button></button>
                    </div>
                    <div>
                        <h3>Оставайтесь на связи</h3>
                    </div>
                </div>
                <div className={css.container}>
                    <h3>Связаться с нами</h3>
                    <p>+7 (843) 240-65-10</p>
                </div>
            </div>
        )
    }
}

export default Footer;
