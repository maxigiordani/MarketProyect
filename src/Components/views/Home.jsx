// Home.jsx
import React from 'react';
import { Carousel, Container, Card, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ addToCart }) => {
  const productos = [
    { id: 1, nombre: 'Aloe Vera', precio: 2500, imagen: 'https://via.placeholder.com/300x200' },
    { id: 2, nombre: 'Rosa China',   precio: 2400, imagen: 'https://via.placeholder.com/300x200' },
    { id: 3, nombre: 'Potus', precio: 100, imagen: 'https://via.placeholder.com/300x200' },

    // ... otros productos ...
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`¡"${product.nombre}" ha sido agregado al carrito!`);
  };

  return (
    <Container className="mt-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://via.placeholder.com/800x400"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>¡Bienvenido a Mi Tienda!</h3>
            <p>Descubre nuestras ofertas exclusivas.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h2 className="mt-5">Productos Destacados</h2>
      <Row className="flex-row overflow-auto">
        {productos.map((producto) => (
          <Col md={3} className="mb-4" key={producto.id}>
            <Card>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                  {producto.precio > 0 ? `PRECIO: $${producto.precio}` : 'Producto no disponible actualmente'}
                </Card.Text>
                {producto.precio > 0 && (
                  <Button variant="primary" className='mt-2' onClick={() => handleAddToCart(producto)}>
                    Agregar al carrito
                  </Button>
                )}
                <Link to={`/productdetail/${producto.id}`} className="text-decoration-none">
                  <Button variant="info" className="mt-2 m-3">
                    Detalles
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <h2 className="mt-5">Shopping Cart</h2>
      <Link to="/cart">View Cart</Link>
    </Container>
  );
};

export default Home;