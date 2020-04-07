import React, {Component} from 'react';
import css from './Catalog.module.css'
import Item from "./Item";


class Catalog extends Component {
    render() {
        let products = [];
        for (let [key, value] of this.props.products) {
            products.push(value)
        }
        return (
            <div>
                <div className={css.row}>
                    <h3><span>ЯхшыМаркет</span> - любая техника и даже больше</h3>
                </div>
                <div className={css.container}>
                    {products.map(product => <Item product={product} store={this.props.store}/>)}
                </div>
            </div>
        )
    }
}
export default Catalog;