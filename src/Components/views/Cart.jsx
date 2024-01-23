import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Cart = ({ cart, onCheckout, onRemoveProduct }) => {
  const handleCheckout = () => {
    const confirmed = window.confirm('¿Estás seguro de finalizar la compra?');
    if (confirmed) {
      onCheckout();
      alert('¡Compra realizada con éxito!');
    }
  };

  const handleRemoveProduct = (productId) => {
    const confirmed = window.confirm('¿Estás seguro de quitar este producto del carrito?');
    if (confirmed) {
      // Filtra los productos diferentes al que se va a eliminar
      const updatedCart = cart.filter((product) => product.id !== productId);
      // Actualiza el estado del carrito con el nuevo array
      onRemoveProduct(updatedCart);
    }
  };

  return (
    <div className="text-right">
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <div>
          <Table striped bordered responsive>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Imagen</th>
                <th>Eliminar</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.nombre}</td>
                  <td>${product.precio}</td>
                  <td>
                    <img src={product.imagen} alt={product.nombre} style={{ width: '50px' }} />
                  </td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => handleRemoveProduct(product.id)}>
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Button variant="success" onClick={handleCheckout} className="float-right">
            Finalizar Compra
          </Button>
        </div>
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

export default Cart;
