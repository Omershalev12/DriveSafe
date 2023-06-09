import React from 'react';

const Item = ({ name, image, description, price }) => {
  return (
    <div className="item">
      <h2 className="item-name">{name}</h2>
      <img className="item-image" src={image} alt={name} />
      <p className="item-description">{description}</p>
      <button className="item-price-button">{price}</button>
    </div>
  );
};

export default Item;