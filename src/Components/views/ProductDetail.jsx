import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const productos = [
    { id: 1, nombre: 'Aloe Vera', descripcion: 'Aloe vera', imagen: 'https://via.placeholder.com/300x200', precio: 200 },
    { id: 2, nombre: 'Rosa China', descripcion: 'Rosa china', imagen: 'https://via.placeholder.com/300x200', precio: 150 },
    { id: 8, nombre: 'Helecho', descripcion: 'Rosa china', imagen: 'https://via.placeholder.com/300x200', precio: 150 },
  
  ];

  const selectedProduct = productos.find((product) => product.id === parseInt(id));

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <h1>{selectedProduct.nombre}</h1>
      <img src={selectedProduct.imagen} alt={`Imagen de ${selectedProduct.nombre}`} />
      <p>{selectedProduct.descripcion}</p>
      <p>Precio: {selectedProduct.precio}</p>
    </div>
  );
};

export default ProductDetail;
