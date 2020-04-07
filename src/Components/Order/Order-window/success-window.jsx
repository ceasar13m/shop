import React, {Component} from "react";
import css from "./success-window.module.css";
import {NavLink} from "react-router-dom";

class SuccessWindow extends Component {
    render() {
        return (
                <div className={css.layer} >
                    <div className={css.window}>
                        <div className={css.intro}>
                            Успешно!
                                <div onClick={() => {this.props.store.closeSuccessWindow()}} className={css.close}>
                                    <NavLink to="/">х</NavLink>
                                </div>
                        </div>
                        <div className={css.text}>
                            <p>Ваш заказ принят, ожидайте звонок менеджера для уточнения деталей.</p>
                        </div>
                    </div>
                </div>
        )
    }
}

export default SuccessWindow;