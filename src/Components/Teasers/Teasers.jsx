import React, {Component} from "react";
import css from "./Teasers.module.css";

class Teasers extends Component{
    render() {
        return(
            <div className={css.container}>
                <div className={css.Teaser}>
                    <div className={css.TeaserImg}>
                        <img src="https://zurmarket.ru/upload/iblock/1ea/a970a7b4269ae431dd116d89f1e81fdb.png" alt=""/>
                    </div>
                    <div className={css.TeaserInfo}>
                        <p>Акции</p>
                    </div>
                </div>
                <div className={css.Teaser}>
                    <div className={css.TeaserImg}>
                        <img src="https://zurmarket.ru/upload/iblock/78e/5919a535332800567dd2816811239c25.png" alt=""/>
                    </div>
                    <p>Весь товар сертифицирован</p>
                </div>
                <div className={css.Teaser}>
                    <div className={css.TeaserImg}>
                        <img src="https://zurmarket.ru/upload/iblock/728/e5df9380338e4e6f2d047ed55918af4b.png" alt=""/>
                    </div>
                    <p>До 30 дней обмен и возврат товара</p>
                </div>
                <div className={css.Teaser}>
                    <div className={css.TeaserImg}>
                        <img src="https://zurmarket.ru/upload/iblock/b6f/15cb3aab3d8da3702fe6130bb00d0cbe.png" alt=""/>
                    </div>
                    <p>Рассрочка и кредит</p>
                </div>
            </div>
        )
    }
}

export default Teasers;