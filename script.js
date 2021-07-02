/*
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shoppingCart);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add,  { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

import add, {cart} from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('milk', 10);

console.log(cart);
*/

const shoppingCart2 = (function () {
    const cart = [];
    const shippingCost = 10;
    const totalPrice = 237;
    const totalQuantity = 23;

    const addToCart = function (product, quantity) {
        cart.push({ product, quantity });
       console.log(`${quantity} ${product} added to cart (shipping cost is ${shippingCost})`);
    };
    
    const orderStock = function (product, quantity) {
        cart.push({ product, quantity });
       console.log(`${quantity} ${product} ordered from supplier`);
    };
    
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity,
    };
})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 2);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost);
