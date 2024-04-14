import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RestaurantList({ onSelectRestaurant }) {
  const [restaurants, setRestaurants] = useState([]);
  const API_GATEWAY_URL="http://localhost:8084"


  useEffect(() => {
    // Replace with the actual endpoint of your backend
    axios.get(API_GATEWAY_URL+'/api/restaurants')
      .then(response => {
        console.log(response.data)
        setRestaurants(response.data);
      })
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  return (
    <div style={styles.grid}>
      {restaurants.map(restaurant => (
        // <Link to={`/restaurants/${restaurant.id}`} key={restaurant.id} style={styles.card}>
        <Link to={`/restaurants/${restaurant.id}/${restaurant.name}/${restaurant.description}`} key={restaurant.id} style={styles.card}>
      
        

          <img src={restaurant.imageUrl || 'https://source.unsplash.com/featured/?restaurant'} alt={restaurant.name} style={styles.image} />
          <div style={styles.content}>
            <h2>{restaurant.name}</h2>
            <p>{restaurant.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  card: {
    width: '300px',
    margin: '20px',
    textDecoration: 'none',
    color: 'black',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover' // Cover the figure area without stretching.
  },
  content: {
    padding: '15px'
  }
};

export default RestaurantList;