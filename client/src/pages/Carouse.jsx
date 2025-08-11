




import React, { useState } from "react";
import "../css/Carouse.css";

import img1 from "../Images/c1.jpg";
import img2 from "../Images/c2.jpg";
import img3 from "../Images/c3.jpg";
import img4 from "../Images/c4.jpg";
import img5 from "../Images/c5.jpg";
import img6 from "../Images/c6.jpg";

const Carouse = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const angle = 360 / total;
  const depth = 300; // Increase this to expand the ring spacing

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="delightful-carousel-container">
      <div className="carousel-header">
        <h1>Delightful Experience</h1>
        <p>
          A taste of perfection in every dish –{" "}
          <span className="highlight">fine dining with a modern twist.</span>
        </p>
      </div>

      <div className="carousel-3d-wrapper">
        <div
          className="carousel-track"
          style={{
            transform: `translateZ(-${depth}px) rotateY(-${current * angle}deg)`
          }}
        >
          {images.map((img, index) => (
            <div
              className="carousel-slide"
              key={index}
              style={{
                transform: `rotateY(${index * angle}deg) translateZ(${depth}px)`
              }}
            >
              <img src={img} alt={`slide-${index}`} />
            </div>
          ))}
        </div>

        <button className="nav-button left" onClick={prevSlide}>
          &#8249;
        </button>
        <button className="nav-button right" onClick={nextSlide}>
          &#8250;
        </button>
      </div>

      <div className="carousel-footer">
        <p>
          <span className="highlight">VISIT US :</span> Restaurant St,
          Delicious City, London 9578, UK <span className="star">★</span>{" "}
          <span className="highlight">WE ARE OPEN :</span> Daily • 8.00 am to
          10.00 pm
        </p>
      </div>
    </div>
  );
};

export default Carouse;
