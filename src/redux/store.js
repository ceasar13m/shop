import productsJSON from '../products'

class Store {
    constructor(App) {
        this.App = App;
        this.goodState = {
            products: new Map(),
            cart: new Map(),
            test: []
        };
        this.getProducts();
        this.getCartItems();
    }

    //Добавляет товар в LocalStorage
    addProductOnCart(product) {
        let cartProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            icon: product.icon,
            count: 1
        };
        localStorage.setItem(product.id, JSON.stringify(cartProduct));
        this.getCartItems();
        this.App.onCartChanged({
            cart: this.goodState.cart
        });
    }


    //Удаляет товар полность из корзины
    dellProductOnCart(good) {
        let product = this.goodState.products.get(good.id);
        product.button = true;
        this.goodState.products.set(good.id, product);
        localStorage.removeItem(good.id);
        this.getCartItems();
        this.App.onCartChanged({
            cart: this.goodState.cart
        });
    }

    //Прибавляет количество товара
    countIncr(good) {
        let item = this.goodState.cart.get(good.id);
        item.count = ++item.count;
        localStorage.setItem(good.id, JSON.stringify(item));
        this.App.onCartChanged({
            cart: this.goodState.cart
        });
    }

    //Убавляет количество товара
    countDecr(good) {
        let item = this.goodState.cart.get(good.id);
        if (item.count !== 1) {
            item.count = --item.count;
        }
        localStorage.setItem(good.id, JSON.stringify(item));
        this.App.onCartChanged({
            cart: this.goodState.cart
        });
    }

    //Загружает товары корзины c LocalStorage
    getCartItems() {
        this.goodState.cart = new Map();
        let keys = Object.keys(localStorage);
        let i = keys.length;
        while (i--) {
            let product = this.goodState.products.get(Number(keys[i]));
            product.button = false;
            this.goodState.products.set(Number(keys[i]), product);
            this.goodState.cart.set(Number(keys[i]), JSON.parse(localStorage.getItem(keys[i])));
        }
    }

    //Загружает продукты с JSON файла
    getProducts() {
        for (let i = 0; i < productsJSON.length ; i++) {
            this.goodState.products.set(productsJSON[i].id, productsJSON[i])
        }
    }

    getState() {
        return this.goodState
    }
}

export default Store;


