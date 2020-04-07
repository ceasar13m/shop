import productsJSON from '../products'

class Store {
    constructor(App) {
        this.App = App;
        this.goodState = {
            products: new Map(),
            cart: new Map(),
            test: [],
            errorWindow: false,
            successWindow: false
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

    //Загружает товары в корзину c LocalStorage
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

    addData(name, email, tel, address, comment, cart) {
        let data = [];
        if (name.current.value === ""
            || email.current.value === ""
            || tel.current.value === ""
            || address.current.value === "") {
            this.goodState = {
                ...this.goodState,
                errorWindow: true
            };
            this.App.onErrorWindowChanged({
                errorWindow: this.goodState.errorWindow
            });
        } else {
            data.push({
                user: {
                    name: name.current.value,
                    email: email.current.value,
                    tel: tel.current.value,
                    address: address.current.value,
                    comment: comment.current.value
                },
                products: cart
            });
            this.goodState = {
                ...this.goodState,
                successWindow: true
            };
            this.App.onSuccessWindowChanged({
                successWindow: this.goodState.errorWindow
            });
            let dataJSON = JSON.stringify(data);
        }
    }

    closeErrorWindow() {
        this.goodState = {
            ...this.goodState,
            errorWindow: false
        };
        this.App.onErrorWindowChanged({
            errorWindow: this.goodState.errorWindow
        });
    }

    closeSuccessWindow() {
        this.goodState = {
            ...this.goodState,
            successWindow: false
        };
        this.App.onSuccessWindowChanged({
            successWindow: this.goodState.successWindow
        });
        this.clearLocalStorage()
    }

    clearLocalStorage() {
        localStorage.clear();
        this.goodState.cart.clear();
        this.App.onCartChanged({
            cart: this.goodState.cart
        });
        let products = [];
        for (let [key, value] of this.goodState.products) {
            products.push(value);
        }
        for (let i = 0; i < products.length ; i++) {
            if (products[i].button === false) {
                products[i].button = true;
                this.goodState.products.set(products[i].id, products[i])
            }
        }
        this.App.onProductsChanged({
            products: this.goodState.products
        })

    }

    //Загружает продукты с JSON файла
    getProducts() {
        for (let i = 0; i < productsJSON.length; i++) {
            this.goodState.products.set(productsJSON[i].id, productsJSON[i])
        }
    }

    getState() {
        return this.goodState
    }
}

export default Store;


