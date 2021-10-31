import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => (
  <div className='card-list'>
    {props.kittens.map(kitten => (
      <Card key={kitten.id} kitten={kitten} />
    ))}
  </div>
);