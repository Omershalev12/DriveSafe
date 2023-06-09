import React from 'react';

const Article = ({ name, image, price }) => {
  return (
    <div className="item">
      <h2 className="item-name">{name}</h2>
      <img className="item-image" src={image} alt={name} />
      <button className="item-price-button">+{price}</button>
    </div>
  );
};

export default Article;