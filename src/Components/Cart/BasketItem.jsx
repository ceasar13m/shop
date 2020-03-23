import React, {Component} from "react";
import css from './BasketItem.module.css';

class BasketItem extends Component {

    render() {

        // Итого
        let total = 0;
        total = this.props.good.count * this.props.good.price;


        return (
            <div className={css.item}>
                <table>
                    <tr>
                        <th colSpan="2">Название</th>
                        <th>Цена</th>
                        <th>Количество</th>
                        <th>Итого</th>
                    </tr>
                    <tr>
                        <td><img src={this.props.good.icon} alt="" width='70px' height='50px'/></td>
                        <td>{this.props.good.name}</td>
                        <td>{(this.props.good.price).toLocaleString('ru')} &#x20BD;</td>
                        <td>
                            <button onClick={() => {this.props.store.countDecr(this.props.good)}}>-</button>
                            {this.props.good.count}
                            <button onClick={() => {this.props.store.countIncr(this.props.good)}}>+</button>
                        </td>
                        <td>{(total).toLocaleString('ru')} &#x20BD;</td>
                    </tr>
                </table>
                <div>
                    <button onClick={() => {this.props.store.dellProductOnCart(this.props.good)}}>Убрать</button>
                </div>
            </div>

        )
    }
}

export default BasketItem;