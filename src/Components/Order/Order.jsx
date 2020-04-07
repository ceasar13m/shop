import React, {Component} from "react";
import css from './Order.module.css'
import OrderCart from "./Order-Cart/Order-Cart";
import ErrorWindow from "./Order-window/error-window";
import SuccessWindow from "./Order-window/success-window";

class Order extends Component {


    render() {

        let cart = [];
        for (let [key, value] of this.props.store.goodState.cart) {
            cart.push(value);
        }
        let name = React.createRef();
        let email = React.createRef();
        let tel = React.createRef();
        let address = React.createRef();
        let comment = React.createRef();
        let checkList = {
            user: {
                name: name.current,
                email: email.current,
                tel: tel.current,
                address: address.current,
                comment: comment.current
            },
            products: cart
        };

        let errorWindowStyle = this.props.store.goodState.errorWindow ? {display: 'flex'} : {display: 'none'};
        let successWindowStyle = this.props.store.goodState.successWindow ? {display: 'block'} : {display: 'none'};

        return (
            <div>
                <div style={errorWindowStyle}>
                    <ErrorWindow store={this.props.store}/>
                </div>
                <div style={successWindowStyle}>
                    <SuccessWindow store={this.props.store}/>
                </div>
                <div className={css.order}>
                    <div className={css.intro}>
                        <h1>Оформление заказа</h1>
                    </div>
                    <div className={css.content}>
                        <div className={css.clientData}>
                            <h2>Покупатель</h2>
                            <h4>Ф.И.О.<span> *</span></h4>
                            <input type="text" ref={name}/>
                            <h4>E-Mail<span> *</span></h4>
                            <input type="email" ref={email}/>
                            <h4>Телефон<span> *</span></h4>
                            <input type="tel" ref={tel}/>
                            <h4>Адрес доставки<span> *</span></h4>
                            <textarea name="" id="" cols="30" rows="10" ref={address}></textarea>
                            <h4>Комментарии к заказу</h4>
                            <textarea name="" id="" cols="30" rows="10" ref={comment}></textarea>
                        </div>
                        <div className={css.orderCart}>
                            <h2>Товары в заказе</h2>
                            <OrderCart cart={cart}/>
                        </div>
                        <div className={css.buttonBlock}>
                            <button onClick={() => {
                                this.props.store.addData(name, email, tel, address, comment, cart)
                            }}>Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Order;