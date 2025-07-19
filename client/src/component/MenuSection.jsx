import React, { useState } from 'react';

import "../css/MenuSection.css";



// Import your big images
import m1 from '../assets/m1.jpg';
import m2 from '../assets/m2.jpg';
import m3 from '../assets/m3.jpg';
import m4 from '../assets/m4.jpg';


// Import your small dish images
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';
import d7 from '../assets/d7.png';
import d8 from '../assets/d8.png';
import d9 from '../assets/d9.png';
import d10 from '../assets/d10.png';
import d11 from '../assets/d11.png';
import d12 from '../assets/d12.png';
import d13 from '../assets/d13.png';
import d14 from '../assets/d14.png';
import d15 from '../assets/d15.png';
import d16 from '../assets/d16.png';

const menuData = {
  Starter: {
    items: [
      { img: d1, title: 'Greek Salad', desc: 'Cucumber, tomato, olive, feta.', price: '$12.00' },
      { img: d2, title: 'Bruschetta', desc: 'Grilled bread, tomatoes, herbs.', price: '$10.50' },
      { img: d3, title: 'Garlic Bread', desc: 'Toasted baguette with garlic.', price: '$8.00' },
      { img: d4, title: 'Stuffed Mushrooms', desc: 'Cheese-filled mushrooms.', price: '$11.00' },
    ],
    image: m1,
  },
  'Main Dishes': {
    items: [
      { img: d5, title: 'Grilled Chicken', desc: 'Served with veggies.', price: '$22.00' },
      { img: d6, title: 'Pasta Carbonara', desc: 'Creamy bacon pasta.', price: '$18.50' },
      { img: d7, title: 'Beef Steak', desc: 'Chargrilled steak.', price: '$30.00' },
      { img: d8, title: 'Seafood Risotto', desc: 'Shrimp and scallop rice.', price: '$25.00' },
    ],
    image: m2,
  },
  Desserts: {
    items: [
      { img: d9, title: 'Chocolate Mousse', desc: 'Silky chocolate delight.', price: '$8.50' },
      { img: d10, title: 'Pavlova', desc: 'Meringue with fruit.', price: '$9.00' },
      { img: d11, title: 'Apple Crumble', desc: 'Warm and crunchy.', price: '$7.50' },
      { img: d12, title: 'Crème Brulée', desc: 'Classic vanilla custard.', price: '$8.00' },
    ],
    image: m3,
  },
  Wines: {
    items: [
      { img: d13, title: 'Red Wine', desc: 'Dry, bold and fruity.', price: '$15.00' },
      { img: d14, title: 'White Wine', desc: 'Crisp and clean.', price: '$14.50' },
      { img: d15, title: 'Rosé Wine', desc: 'Floral and fresh.', price: '$13.00' },
      { img: d16, title: 'Sparkling', desc: 'Bubbly and bright.', price: '$16.00' },
    ],
    image: m4,
  },
};

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('Desserts');

  const { items, image } = menuData[activeTab];

  return (
    <div className="menu-section__container">
      <nav className="menu-section__tabs">
        {Object.keys(menuData).map(tab => (
          <button
            key={tab}
            className={`menu-section__tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="menu-section__content">
        <div className="menu-section__items">
          {items.map((item, index) => (
            <div className="menu-section__item" key={index}>
              <img src={item.img} alt={item.title} className="menu-section__item-img" />
              <div className="menu-section__item-info">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
              <div className="menu-section__item-price">{item.price}</div>
            </div>
          ))}
        </div>

        <div className="menu-section__image-wrapper">
          <img src={image} alt="Dish" className="menu-section__main-image" />
        </div>
      </div>

      <p className="menu-section__timing">
        During <span>winter</span> daily from <strong>7:00 pm to 9:00 pm</strong>
      </p>

      <button className="menu-section__btn">VIEW ALL MENU</button>
    </div>
  );
};

export default MenuSection;
