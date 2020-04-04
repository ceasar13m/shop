import React, {Component} from "react";
import css from "../../App.module.css";
import Slider from "../Slider/Slider";
import Teasers from "../Teasers/Teasers";
import Catalog from "../Content/Catalog";
import Footer from "../Footer/Footer";

class Global extends Component{
    render() {
        return(
            <div className={css.app}>
                <Slider/>
                <Teasers/>
                <Catalog products={this.props.products} cart={this.props.cart} store={this.props.store}/>
                <div className={css.info}>
                    <div className={css.infoImg}>
                        <img src="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
                             alt=""/>
                    </div>
                    <div className={css.infoText}>
                        <h2>О компании</h2>
                        <p>Интернет-магазин Зурмаркет, работая с 2011 года, заслужил доверие тысяч клиентов, которые
                            приходят к нам,
                            потому что мы лидеры по продаже телефонов, гаджетов и бытовой техники. Зурмаркет - это
                            имя которое знают и доверяют ему.
                        </p>
                        <button>
                            Подробнее
                        </button>
                        <div>
                            {localStorage.getItem(2)}
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }

}

export default Global;