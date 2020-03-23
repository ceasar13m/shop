import React, {Component} from "react";
import css from "../Content/content.module.css";
import BasketItem from "./BasketItem";

class Cart extends Component{

    render() {
        return (
            <div className={css.basket}>
                <div className={css.basketElements}>
                    {this.props.cart.map(good => <BasketItem good={good} store={this.props.store}/> )}
                </div>
            </div>
        )
    }
}

export default Cart;