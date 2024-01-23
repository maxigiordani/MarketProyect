import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const productos = [
    { id: 1, nombre: 'Aloe Vera', descripcion: 'planta de sombra', imagen: 'https://via.placeholder.com/300x200' },
    { id: 2, nombre: 'Rosa China', descripcion: 'planta de sol', imagen: 'https://via.placeholder.com/300x200' },
    { id: 8, nombre: 'Helecho', descripcion: 'planta semisombra', imagen: 'https://via.placeholder.com/300x200' },
  
  ];

  const selectedProduct = productos.find((product) => product.id === parseInt(id));

  if (!selectedProduct) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="container">
      <h1 className="text-center">{selectedProduct.nombre}</h1>
      <img src={selectedProduct.imagen} alt={`Imagen de ${selectedProduct.nombre}`} />
      
      <p>{selectedProduct.descripcion}</p>
   
    </div>
  );
};

export default ProductDetail;
