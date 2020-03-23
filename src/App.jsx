import React, {Component} from 'react';
import './App.module.css';
import Store from "./redux/store";
import {BrowserRouter, Route} from 'react-router-dom';
import Cart from "./Components/Cart/Cart";
import Global from "./Components/Global/Clobal";
import Header from "./Components/Header/Header";

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


    render() {
        return (
            <BrowserRouter>
                <Header store={this.store}/>
                <Route exact path='/' render={() => <Global products={this.state.products}
                                                            store={this.store}/>}/>
                <Route path='/cart' render={() => <Cart cart={this.state.cart}
                                                        store={this.store}/>}/>
            </BrowserRouter>
        );
    }

}

export default App;
