import React from 'react';
import "./productCard.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdFavorite } from "react-icons/md";

const ProductCard = (props) => {
    const { image, title, category, price, keey } = props
    return (
        <div key={keey} className="col-6 col-lg-4 pb-5 product-card d-flex flex-column">
            <div className="product-image">
                <img src={image} alt="productImg" />
                <div className="product-icons">
                    <button><AiOutlineShoppingCart /></button>
                    <button className='like'><MdFavorite /></button>
                </div>
            </div>
            <div className="product-details d-flex flex-column">
                <span className='text-muted product-categories'>{category}</span>
                <h5>{title}</h5>
                <span className='product-price'>${price}</span>
            </div>
        </div>
    )
}

export default ProductCard