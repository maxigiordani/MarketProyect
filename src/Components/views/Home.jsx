import React from 'react';
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap';

const Home = () => {
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
        {/* Agrega más elementos Carousel.Item según sea necesario */}
      </Carousel>

      <h2 className="mt-5">Productos Destacados</h2>
      <Row>
        {/* Agrega tarjetas de productos aquí */}
        <Col md={4} className="mb-4">
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Producto 1</Card.Title>
              <Card.Text>
                Descripción del producto.
              </Card.Text>
              {/* Agrega más detalles o botones según sea necesario */}
            </Card.Body>
          </Card>
        </Col>
        {/* Agrega más tarjetas según sea necesario */}
      </Row>
    </Container>
  );
};

export default Home;
