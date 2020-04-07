import React, {Component} from 'react';
import './App.module.css';
import Store from "./redux/store";
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from "./Components/Cart/Cart";
import Global from "./Components/Global/Clobal";
import Header from "./Components/Header/Header";
import Order from "./Components/Order/Order";

class App extends Component {

    constructor(props) {
        super(props);
        this.store = new Store(this);
        this.state = this.store.getState();
    }


    onCartChanged(newCartState) {
        this.setState({
            ...this.state,
            cart: newCartState.cart,
        })
    }

    onProductsChanged(newProductState) {
        this.setState({
            ...this.state,
            products: newProductState.products,
        })
    }

    onErrorWindowChanged(errorWindowNewState) {
        this.setState({
            errorWindow: errorWindowNewState.errorWindow,
        });
    }

    onSuccessWindowChanged(successWindowNewState) {
        this.setState({
            successWindow: successWindowNewState.successWindow,
        });
    }

    render() {
        return (
            <BrowserRouter>
                <Header store={this.store}/>
                <Route exact path='/' render={() => <Global products={this.state.products}
                                                            store={this.store}/>}/>
                <Route path='/cart' render={() => <Cart cart={this.state.cart}
                                                        store={this.store}/>}/>
                <Route path='/order' render={() => <Order store={this.store}/>}/>
            </BrowserRouter>
        );
    }

}

export default App;
