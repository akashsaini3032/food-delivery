// SpecialDishes.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "../css/Dishes.css";

import ds1 from "../Images/ds1.png";
import ds2 from "../Images/c3.jpg";
import ds3 from "../Images/c3.jpg";

const dishes = [
  {
    title: 'BUTTERNUT PUMPKIN',
    type: 'MAIN DISH',
    description:
      'Vegetables, cheeses, ground meats, tomato sauce, seasonings. Small bites, big flavors.',
    price: '$15.00',
    image: 'ds1',
  },
  {
    title: 'OPU FISH',
    type: 'DESSERTS',
    description:
      'Flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes.',
    price: '$12.00',
    image: 'ds1',
  },
  {
    title: 'GREEK SALAD',
    type: 'MAIN DISH',
    description:
      'Flavorful, filled with panko bread crumbs, pine nuts, parsley, sun-dried tomatoes.',
    price: '$39.00',
    image: 'ds1',
  },
  {
    title: 'SPICY SHRIMP',
    type: 'MAIN DISH',
    description: 'Shrimp with garlic, chili, herbs, served with rice.',
    price: '$22.00',
    image: 'ds1',
  },
  {
    title: 'TIRAMISU',
    type: 'DESSERTS',
    description: 'Classic Italian dessert with coffee-soaked ladyfingers.',
    price: '$10.00',
    image: 'ds1',
  },
  {
    title: 'CAESAR CHICKEN',
    type: 'MAIN DISH',
    description: 'Grilled chicken breast with Caesar salad topping.',
    price: '$18.00',
    image: 'ds1',
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

  const handleNavigate = () => {
    navigate('/');
  };

  const visibleDishes = [
    dishes[startIndex % dishes.length],
    dishes[(startIndex + 1) % dishes.length],
    dishes[(startIndex + 2) % dishes.length],
  ];

  return (
    <div className="special-dishes-section">
      <h2 className="special-heading">Special Dishes</h2>
      <div className="carousel-wrapper">
        <button className="dish-nav left" onClick={handlePrev}>❮</button>

        <div className="dishes-container">
          {visibleDishes.map((dish, index) => (
            <div key={index} className="dish-card">
              <div className="dish-type">{dish.type}</div>
              <div className="dish-image">
                <img src={dish.image} alt={dish.title} />
              </div>
              <h3 className="dish-title">{dish.title}</h3>
              <p className="dish-description">{dish.description}</p>
              <div className="dish-price">{dish.price}</div>
            </div>
          ))}
        </div>

        <button className="dish-nav right" onClick={handleNext}>❯</button>
      </div>
      <button className="view-menu-btn" onClick={handleNavigate}>
        VIEW MENU
      </button>
    </div>
  );
};

export default Dishes;
