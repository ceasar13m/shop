import React from 'react';
import './App.module.css';
import Header from "./Components/Header/Header";
import Catalog from "./Components/Content/Content";
import store from './redux/store'
import Slider from "./Components/Slider/Slider";
import css from './App.module.css'
import Teasers from "./Components/Teasers/Teasers";
import Footer from "./Components/Footer/Footer";


let App = (props) => {

    return (
        <div className={css.app}>
            <div className={css.intro}>
                <Header/>
                <Slider/>
            </div>
            <Teasers/>
            <Catalog message={props.message}/>
            <div className={css.info}>
                <div className={css.infoImg}>
                    <img src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg" alt=""/>
                </div>
                <div className={css.infoText}>
                    <h2>О компании</h2>
                    <p>Интернет-магазин Зурмаркет, работая с 2011 года, заслужил доверие тысяч клиентов, которые приходят к нам,
                        потому что мы лидеры по продаже телефонов, гаджетов и бытовой техники. Зурмаркет - это имя которое знают и доверяют ему.
                    </p>
                    <button>
                        Подробнее
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );

}

export default App;
