// Cart.jsx
import React from 'react';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Productos en carrito</h2>
      <ul>
        {cart && cart.map((product) => (
          <li key={product.id}>{product.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;