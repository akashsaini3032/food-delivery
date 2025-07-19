/** SpecialDishes.jsx */

import React, { useState } from 'react';
import "../css/Dishes.css";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import { useNavigate } from 'react-router-dom';

const dishes = [
  {
    type: 'MAIN DISH',
    title: 'BUTTERNUT PUMPKIN',
    description: 'Vegetables, cheeses, ground meats, tomato sauce, seasonings. Small bites, big flavors.',
    price: '$15.00',
    image: img1,
  },
  {
    type: 'DESSERTS',
    title: 'OPU FISH',
    description: 'Flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes.',
    price: '$12.00',
    image: img2,
  },
  {
    type: 'MAIN DISH',
    title: 'GREEK SALAD',
    description: 'Flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes.',
    price: '$39.00',
    image: img3,
  },
  {
    type: 'DESSERTS',
    title: 'CHOCOLATE BROWNIE',
    description: 'Rich chocolate flavor with a crunchy top and gooey center.',
    price: '$10.00',
    image: img4,
  },
  {
    type: 'MAIN DISH',
    title: 'SPICY CHICKEN',
    description: 'Grilled chicken with hot and sour marinade and garlic sauce.',
    price: '$18.00',
    image: img5,
  },
  {
    type: 'DESSERTS',
    title: 'FRUIT PLATTER',
    description: 'Seasonal fruits served with a honey-yogurt dip.',
    price: '$14.00',
    image: img6,
  },
];

const Dishes = () => {
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % dishes.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  const visibleDishes = [];
  for (let i = 0; i < 3; i++) {
    visibleDishes.push(dishes[(startIndex + i) % dishes.length]);
  }

  return (
    <section className="special-dishes-section">
      <h2 className="special-heading">Special Dishes</h2>
      <div className="carousel-wrapper">
        <button className="dish-nav left" onClick={handlePrev}>&lt;</button>

        <div className="dishes-container">
          {visibleDishes.map((dish, index) => (
            <div className="dish-card" key={index}>
              <div className="dish-type">{dish.type}</div>
              <div className="dish-image">
                <img src={dish.image} alt={dish.title} />
              </div>
              <div className="dish-title">{dish.title}</div>
              <div className="dish-description">{dish.description}</div>
              <div className="dish-price">{dish.price}</div>
            </div>
          ))}
        </div>

        <button className="dish-nav right" onClick={handleNext}>&gt;</button>
      </div>

      <button className="view-menu-btn" onClick={() => navigate('/')}>VIEW MENU</button>
    </section>
  );
};

export default Dishes;
