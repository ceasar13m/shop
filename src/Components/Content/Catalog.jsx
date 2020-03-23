import React, {Component} from 'react';
import css from './content.module.css'
import Item from "./Item";
import BasketItem from "../Cart/BasketItem";


class Catalog extends Component {

    render() {

        return (
            <div>
                <div className={css.row}>
                    <h3>BLEDHUID - любая техника и даже больше</h3>
                </div>
                <div className={css.container}>
                    {this.props.products.map(product => <Item product={product} store={this.props.store}/>)}
                </div>
            </div>


        )
    }

}


export default Catalog;