import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

// const Product = (handleAddToCart, product) => {

const Product = (props) => {
    const {handleAddToCart, product} = props;
    const {name, img, seller, price, ratings} = product;

    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings}Stars</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='button-cart' > 
                <p className='button-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;