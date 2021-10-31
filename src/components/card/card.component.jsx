import React from 'react';
import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='kitten'
      src={`https://robohash.org/${props.kitten.id}?set=set4&size=150x150`}
    />
    <h2>{props.kitten.name}</h2>
    <p>{props.kitten.email}</p>
  </div>
); 