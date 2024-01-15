// Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import "/src/App.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white footerstyle">
      <Container>
        <div className="py-3 text-center">
          © {new Date().getFullYear()} PLANTMARKET. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
