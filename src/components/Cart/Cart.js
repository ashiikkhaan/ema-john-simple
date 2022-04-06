import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>this is order summary</h4>  
            <p>selected items : {cart.length}</p>
        </div>
    );
};

export default Cart;