import React, { useState } from "react";
import s from './Products.module.css'
import sofa from '../../Images/sofa.svg'
import Product from "./Product";
const Products = () => {

    const [product, setProduct] = useState([
        { id: 1, img: sofa, name: 'Product', category: 'Category', star: <span>	&#9733; &#9733; &#9733; &#9733; &#9733;</span>, price: '$Price' },
        { id: 2, img: sofa, name: 'Product', category: 'Category', star: <span>	&#9733; &#9733; &#9733; &#9733; &#9733;</span>, price: '$Price' },
        { id: 3, img: sofa, name: 'Product', category: 'Category', star: <span>	&#9733; &#9733; &#9733; &#9733; &#9733;</span>, price: '$Price' },
        { id: 4, img: sofa, name: 'Product', category: 'Category', star: <span>	&#9733; &#9733; &#9733; &#9733; &#9733;</span>, price: '$Price' },
    ])
    return (
        <div className={s.products}>
            <p className={s.title}>Featured Product</p>
            <div className={s.list}>
                {product.map((product, key) =>
                    <Product product={product} key={product.id} />
                )}
            </div>
        </div>
    )
}

export default Products