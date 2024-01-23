import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/views/Home';
import Contact from './Components/views/Contact';
import PageAdm from './Components/views/PageAdm';
import PageLogin from './Components/views/PageLogin';
import NavbarComponent from './Components/layout/NavbarComponent';
import Footer from './Components/layout/Footer';
import ProductDetail from './Components/views/ProductDetail';
import Cart from './Components/views/Cart';

const App = () => {
  // Estado para el carrito de compras
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (updatedCart) => {
    setCart(updatedCart);
  };

  const handleCheckout = () => {
    // Realiza lógica de finalizar la compra aquí
    const confirmed = window.confirm('¿Estás seguro de finalizar la compra?');
    if (confirmed) {
      setCart([]); // Limpia el carrito al finalizar la compra
      alert('¡Compra realizada con éxito!');
    }
  };

  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} />}
          />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/administrador" element={<PageAdm />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} onCheckout={handleCheckout} onRemoveProduct={removeFromCart} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
