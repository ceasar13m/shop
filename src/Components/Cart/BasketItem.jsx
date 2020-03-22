import React, {Component} from "react";
import css from './BasketItem.module.css';

class BasketItem extends Component {


    dellProduct() {
        let name = this.props.name;
        let price = this.props.price;
        this.props.dellProductOnCart(name, price)
    }

    countIncr() {
        let id = this.props.id;
        this.props.countIncr(id)
    }

    countDecr() {
        let id = this.props.id
        this.props.countDecr(id)
    }


    render() {

        //Итого
        let total = 0;
        total = this.props.count * this.props.price;


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
                        <td><img src={this.props.icon} alt="" width='70px' height='50px'/></td>
                        <td>{this.props.name}</td>
                        <td>{(this.props.price).toLocaleString('ru')} &#x20BD;</td>
                        <td>
                            <button onClick={this.countDecr.bind(this)}>-</button>
                            {this.props.count}
                            <button onClick={this.countIncr.bind(this)}>+</button>
                        </td>
                        <td>{(total).toLocaleString('ru')} &#x20BD;</td>
                    </tr>
                </table>
                <div>
                    <button onClick={this.dellProduct.bind(this)}>Убрать</button>
                </div>
            </div>

        )
    }
}

export default BasketItem;