import React, {Component} from "react";
import css from './Order.module.css'

class Order extends Component {



    render() {
        return(
            <div className={css.order}>
                <div className={css.intro}>
                    <h1>Оформление заказа</h1>
                </div>

            </div>
        )
    }
}

export default Order;