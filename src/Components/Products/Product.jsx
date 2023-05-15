import React from "react";
import s from './Product.module.css'
const Product = (props) => {
    return (
        <div>
            <img className={s.img} src={props.product.img} />
            <p className={s.name}>{props.product.name}</p>
            <p className={s.category}>{props.product.category}</p>
            <p className={s.star}>{props.product.star}</p>
            <p className={s.price}>{props.product.price}</p>

        </div>
    )
}

export default Product