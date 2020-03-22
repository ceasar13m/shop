import React, {Component} from "react";
import css from './Slider.module.css'

class Slider extends Component {
    render() {
        return (
            <div className={css.slider}>
                <div className={css.sliderBlock}>
                    <img src="https://img5.goodfon.ru/original/2000x1333/5/ee/andrew-neel-noutbuk-telefon-iphone-kruzhka-ruchka-bloknot-st.jpg" alt=""/>
                </div>
            </div>
        )
    }
}

export default Slider;