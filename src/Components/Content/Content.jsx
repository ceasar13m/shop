import React, {Component} from 'react';
import css from './content.module.css'
import Item from "./Item";
import BasketItem from "../Cart/BasketItem";


class Catalog extends Component {

    state = {
        product: [
            {
                id: 1,
                name: 'Смартфон Xiaomi Mi9T 6/64Gb Black',
                price: 19980,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/7d7/170_170_1/25658.750x0.jpg'
            },
            {
                id: 2,
                name: 'Наушники Apple AirPods Pro',
                price: 20480,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/548/170_170_1/orig1.jpg'
            },
            {
                id: 3,
                name: 'Фитнес-браслет Xiaomi Mi Band 4',
                price: 2049,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/f47/170_170_1/orig.jpg'
            },
            {
                id: 4,
                name: 'Беспроводные наушники Apple AirPods 2 (беспроводная зарядка чехла)',
                price: 12980,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/cba/170_170_1/vtoroy1.jpg'
            },
            {
                id: 5,
                name: 'Беспроводные наушники Apple AirPods 2 (без беспроводной зарядки чехла)',
                price: 10460,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/e30/170_170_1/tretiy.jpg'
            },
            {
                id: 6,
                name: 'Смартфон Samsung Galaxy S10e 6/128Gb цитрус',
                price: 35890,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/7c4/170_170_1/s10_e_yellow.jpg'
            },
            {
                id: 7,
                name: 'Смартфон Samsung Galaxy S10e 6/128Gb аквамарин',
                price: 35890,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/f9d/170_170_1/60yn0kx4u5d18lq_db5b2af8.jpg'
            },
            {
                id: 8,
                name: 'Смартфон Samsung Galaxy S10e 6/128Gb перламутр',
                price: 35890,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/bd0/170_170_1/f.png'
            },
            {
                id: 9,
                name: 'Смартфон Samsung Galaxy S10e 6/128Gb перламутр',
                price: 35490,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/e95/170_170_1/aaaaaaaa.jpeg'
            },
            {
                id: 10,
                name: 'Смартфон Xiaomi Redmi Note 7 4/64gb Black (черный)',
                price: 19990,
                icon: 'https://zurmarket.ru/upload/resize_cache/iblock/b01/170_170_1/y.jpg'
            }
        ],
        cart: []
    };

    //Обновляет state

    rerender() {
        this.setState({
            state: this.state
        })
    }


    //Добавляет товар в Корзину

    addProductOnCart(id, name, price, icon) {

        let value = false;
        for (let i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].id == id) {
                value = true;
                this.state.cart[i].count += 1;
                this.rerender()
            }
        }
        if (value != true) {
            this.setState({
                cart: this.state.cart.concat({
                    id: id,
                    name: name,
                    price: price,
                    icon: icon,
                    count: 1
                })
            })

        }

    }

    //Удаляет товар полность из корзины

    dellProductOnCart(name, price) {
        this.setState({
            cart: this.state.cart.filter(b => b.name != name)

        });
        debugger
    }

    countIncr(id) {
        for (let i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].id == id) {
                this.state.cart[i].count += 1
                this.rerender()
            }
        }
    }

    countDecr(id) {
        for (let i = 0; i < this.state.cart.length; i++) {
            if (this.state.cart[i].id == id && this.state.cart[i].count > 1) {
                this.state.cart[i].count -= 1;
                this.rerender()
            }
        }
    }


    render() {

        //Общая сумма/ Стоимость
        let total = 0;
        let arr = this.state.cart;

        let basketSum = () => {
            for (let i = 0; i < arr.length; i++) {
                total += arr[i].price * arr[i].count
            }
        };
        basketSum();

        return (
            <div>
                <div className={css.row}>
                    <h3>BLEDHUID - любая техника и даже больше</h3>
                </div>
                <div className={css.container}>
                    {this.state.product.map(p => <Item id={p.id} name={p.name} icon={p.icon} price={p.price}
                                                       state={this.state}
                                                       total={total}
                                                       addProductOnCart={this.addProductOnCart.bind(this)}/>)}
                </div>
                {/*<div className={css.basket}>*/}
                {/*    <div className={css.basketElements}>*/}
                {/*        {this.state.cart.map(b => <BasketItem name={b.name}*/}
                {/*                                              icon={b.icon}*/}
                {/*                                              price={b.price}*/}
                {/*                                              count={b.count}*/}
                {/*                                              id={b.id}*/}
                {/*                                              countIncr = {this.countIncr.bind(this)}*/}
                {/*                                              countDecr = {this.countDecr.bind(this)}*/}
                {/*                                              dellProductOnCart={this.dellProductOnCart.bind(this)}*/}
                {/*                                              state={this.state}/>)}*/}
                {/*    </div>*/}
                {/*    <div className={css.total}>*/}
                {/*        Стоимость: {(total).toLocaleString('ru')} &#x20BD;*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>


        )
    }

}


export default Catalog;