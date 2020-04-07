import React, {Component} from "react";
import css from './error-window.module.css'

class ErrorWindow extends Component {
    render() {
        return(
            <div className={css.layer} onClick={() => {this.props.store.closeErrorWindow()}}>
                <div className={css.window}>
                    <div className={css.intro}>
                        Внимание!
                        <div onClick={() => {this.props.store.closeErrorWindow()}} className={css.close}>
                            х
                        </div>
                    </div>
                    <div className={css.text}>
                        <p>Заполните все поля отмеченные <span>*</span></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ErrorWindow;