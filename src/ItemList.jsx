import React from 'react';
import Item from './Item';

const ItemList = () => {
  // Sample item data
  const items = [
    {
      name: 'Phone Holder',
      image: '/ItemInventoryImages/phoneHolder.jpg',
      description: 'Car phone holder',
      price: 30200
    },
    {
      name: 'Wheel cover',
      image: '/ItemInventoryImages/wheel cover.jpg',
      description: 'Steering wheel cover',
      price: 9500
    },
    {
      name: 'Toolkit',
      image: '/ItemInventoryImages/toolkit.jpg',
      description: 'Car repair toolkit',
      price: 15400
    },
    {
      name: 'Phone Charger',
      image: '/ItemInventoryImages/phone charger.jpg',
      description: 'Car phone charger',
      price: 10200
    },
    {
      name: 'Maintenance Discount',
      image: '/ItemInventoryImages/garage.jpg',
      description: '50 NIS coupon for yearly maintenance',
      price: 40000
    },
    {
      name: 'Maintenance Discount',
      image: '/ItemInventoryImages/garage.jpg',
      description: '100 NIS coupon for yearly maintenance',
      price: 65500
    },
    {
      name: 'Car Wash',
      image: '/ItemInventoryImages/car wash.jpg',
      description: 'Free car wash',
      price: 21600
    },
    {
      name: 'Seat booster',
      image: '/ItemInventoryImages/booster.jpg',
      description: 'Kid seat booster',
      price: 52900
    },
    {
      name: 'Scent Pine',
      image: '/ItemInventoryImages/scent pine.jpg',
      description: 'Scent pine for good smell',
      price: 300
    }
    // Add more items as needed
  ];

  return (
    <>
      <h4 className='storeTitle'>Gifts store</h4>
      <div className="item-list">
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
    </>
  );
};

export default ItemList;