import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/views/Home';
import Contact from './Components/views/Contact';
import PageAdm from './Components/views/PageAdm';
import PageLogin from './Components/views/PageLogin';
import NavbarComponent from './Components/layout/NavbarComponent';
import Footer from './Components/layout/Footer';
import ProductDetail from './Components/views/ProductDetail';

const App = () => {
  return (
    <Router>
      <div>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<PageLogin />} />
          <Route path="/administrador" element={<PageAdm />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
