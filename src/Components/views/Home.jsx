import React from 'react';
import { Carousel, Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  // Datos de muestra de productos (reemplaza esto con tus datos reales o recúperalos de una API)
  const productos = [
    { id: 1, nombre: 'Aloe Vera', descripcion: 'Aloe vera', imagen: 'https://via.placeholder.com/300x200' },
    { id: 2, nombre: 'Rosa China', descripcion: 'Rosa china', imagen: 'https://via.placeholder.com/300x200' },
    { id: 3, nombre: 'Potus', descripcion: 'Potus', imagen: 'https://via.placeholder.com/300x200' },   
    { id: 4, nombre: 'Rosa enana', descripcion: 'Potus', imagen: 'https://via.placeholder.com/300x200' }, 
    { id: 5, nombre: 'Limonero', descripcion: 'Potus', imagen: 'https://via.placeholder.com/300x200' },   
    { id: 6, nombre: 'Jazmin paraguayo', descripcion: 'Potus', imagen: 'https://via.placeholder.com/300x200' },  
    { id: 7, nombre: 'Cactus', descripcion: 'Potus', imagen: 'https://via.placeholder.com/300x200' }, 
    { id: 8, nombre: 'Helecho', descripcion: 'Potus', imagen: 'https://via.placeholder.com/300x200' },     
    
  
    

  ];

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
            {/* Enlace a la página de detalles del producto */}
            <Link to={`/productdetail/${producto.id}`} className="text-decoration-none">
              <Card>
                <Card.Img variant="top" src={producto.imagen} />
                <Card.Body>
                  <Card.Title>{producto.nombre}</Card.Title>
                  <Card.Text>{producto.descripcion}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
