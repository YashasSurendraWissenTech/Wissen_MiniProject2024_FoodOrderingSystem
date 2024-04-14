import React from 'react';
import { FaTrash } from 'react-icons/fa';

function Cart({ cartItems, onRemoveFromCart }) {
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div>
      <h1>Cart ({totalItems} items)</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} style={styles.cartItem}>
            {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            <button onClick={() => onRemoveFromCart(item.id)} style={styles.removeButton}>
              <FaTrash />
            </button>
          </li>
        ))}
      </ul>
      <div>Total: ${cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</div>
    </div>
  );
}

const styles = {
  cartItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px',
    listStyleType: 'none',
    borderBottom: '1px solid #ddd',
    paddingBottom: '10px'
  },
  removeButton: {
    marginLeft: '10px',
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    padding: '5px 10px'
  },
};

export default Cart;
