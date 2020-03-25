class Store {
    constructor(App) {
        this.App = App;
        this.goodState = {
            products: [
                {
                    id: 1,
                    name: 'Смартфон Xiaomi Mi9T 6/64Gb Black',
                    price: 19980,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/7d7/170_170_1/25658.750x0.jpg',
                    button: true
                },
                {
                    id: 2,
                    name: 'Наушники Apple AirPods Pro',
                    price: 20480,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/548/170_170_1/orig1.jpg',
                    button: true
                },
                {
                    id: 3,
                    name: 'Фитнес-браслет Xiaomi Mi Band 4',
                    price: 2049,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/f47/170_170_1/orig.jpg',
                    button: true

                },
                {
                    id: 4,
                    name: 'Беспроводные наушники Apple AirPods 2 (беспроводная зарядка чехла)',
                    price: 12980,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/cba/170_170_1/vtoroy1.jpg',
                    button: true
                },
                {
                    id: 5,
                    name: 'Беспроводные наушники Apple AirPods 2 (без беспроводной зарядки чехла)',
                    price: 10460,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/e30/170_170_1/tretiy.jpg',
                    button: true
                },
                {
                    id: 6,
                    name: 'Смартфон Samsung Galaxy S10e 6/128Gb цитрус',
                    price: 35890,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/7c4/170_170_1/s10_e_yellow.jpg',
                    button: true
                },
                {
                    id: 7,
                    name: 'Смартфон Samsung Galaxy S10e 6/128Gb аквамарин',
                    price: 35890,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/f9d/170_170_1/60yn0kx4u5d18lq_db5b2af8.jpg',
                    button: true
                },
                {
                    id: 8,
                    name: 'Смартфон Samsung Galaxy S10e 6/128Gb перламутр',
                    price: 35890,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/bd0/170_170_1/f.png',
                    button: true
                },
                {
                    id: 9,
                    name: 'Смартфон Samsung Galaxy S10e 6/128Gb перламутр',
                    price: 35490,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/e95/170_170_1/aaaaaaaa.jpeg',
                    button: true
                },
                {
                    id: 10,
                    name: 'Смартфон Xiaomi Redmi Note 7 4/64gb Black (черный)',
                    price: 19990,
                    icon: 'https://zurmarket.ru/upload/resize_cache/iblock/b01/170_170_1/y.jpg',
                    button: true
                }
            ],
            cart: []
        }
    }

    //Добавляет товар в Корзину

    addProductOnCart(product) {
        for (let i = 0; i < this.goodState.products.length; i++) {
            if (this.goodState.products[i].id === product.id) {
                this.goodState.products[i].button = false;
                this.App.onButtonChanged({
                    products: this.goodState.products
                })
            }
        }
        this.goodState.cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            count: 1
        });

        this.App.onCartChanged({
            cart: this.goodState.cart
        });
    }


//Удаляет товар полность из корзины

dellProductOnCart(good)
{
    this.goodState.cart = this.goodState.cart.filter(b => b.id != good.id);
    this.App.onCartChanged({
        cart: this.goodState.cart
    });
}


countIncr(good)
{
    for (let i = 0; i < this.goodState.cart.length; i++) {
        if (this.goodState.cart[i].id == good.id) {
            this.goodState.cart[i].count += 1
            this.App.onCartChanged({
                cart: this.goodState.cart
            });
        }
    }
}

countDecr(good)
{
    for (let i = 0; i < this.goodState.cart.length; i++) {
        if (this.goodState.cart[i].id == good.id && this.goodState.cart[i].count > 1) {
            this.goodState.cart[i].count -= 1;
            this.App.onCartChanged({
                cart: this.goodState.cart
            });
        }
    }
}

getState()
{
    return this.goodState
}
}

export default Store;


