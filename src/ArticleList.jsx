import React from 'react';
import Article from "./Article"

const ArticleList = () => {
    // Sample item data
    const items = [
        {
            name: 'Car Maintenance for Accident Prevention',
            image: '/ArticlesImages/article1.png',
            price: 4,
        },
        {
            name: 'Hidden Dangers of Neglected Maintenance',
            image: '/ArticlesImages/article2.jpg',
            price: 7,
        },
        {
            name: 'Causes of Car Accidents Revealed',
            image: '/ArticlesImages/article3.jpg',
            price: 6,
        },
        {
            name: 'Safe Driving Strategies',
            image: '/ArticlesImages/article4.png',
            price: 4,
        },
        {
            name: 'Impact of Car Maintenance on Road Safety',
            image: '/ArticlesImages/article5.jpg',
            price: 5,
        },
        {
            name: 'Preventing Car Accidents: Tips',
            image: '/ArticlesImages/article6.jpg',
            price: 8,
        },
        {
            name: 'Price of Negligence: Car Accidents',
            image: '/ArticlesImages/article7.jpg',
            price: 7,
        },
        {
            name: 'Safe Driving Habits',
            image: '/ArticlesImages/article8.jpg',
            price: 4,
        },
        {
            name: 'Car Care for Accident Reduction',
            image: '/ArticlesImages/article9.jpg',
            price: 6,
        },
        {
            name: 'Recovery and Future Accident Avoidance',
            image: '/ArticlesImages/article10.jpg',
            price: 5,
        }
    ];

    return (
        <>
            <div className="item-list">
                {items.map((item, index) => (
                    <Article key={index} {...item} />
                ))}
            </div>
        </>
    );
};

export default ArticleList;