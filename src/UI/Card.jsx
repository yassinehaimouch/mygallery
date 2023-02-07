import React from 'react';
import './card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <h1>{props.title}</h1>
      <h3>{props.desc}</h3>
    </div>
  )
}

export default Card