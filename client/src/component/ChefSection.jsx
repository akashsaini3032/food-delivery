


import React from "react";

import "../css/ChefSection.css";




import ch1 from "../assets/ch1.jpg"; 
import ch2 from "../assets/ch2.jpg"; 
import ch3 from "../assets/ch3.jpg"; 
import badge from "../assets/badge.png"; 

const ChefSection = () => {
  return (
    <section className="chef-section__wrapper">
      <div className="chef-section__left">
        <p className="chef-section__subtitle">★ MEET THE CHEF ★</p>
        <h2 className="chef-section__title">Mater Chef<br />Lorenzo</h2>
        <p className="chef-section__description">
          A fine dine master chef crafts exquisite cuisine with precision, passion,
          creativity, and elegance, delivering unforgettable culinary experiences and
          refined flavors.
        </p>
        <button className="chef-section__btn">MEET OUR TEAM</button>
      </div>

      <div className="chef-section__right">
        <div className="chef-section__main-img-wrapper">
          <img src={ch1} alt="Chef Lorenzo" className="chef-section__main-img" />
          <img src={badge} alt="25 Years Badge" className="chef-section__badge" />
        </div>

        <div className="chef-section__side-images">
          <img src={ch2} alt="Chef Plating" className="chef-section__side-img top" />
          <img src={ch3} alt="Chef Cooking" className="chef-section__side-img bottom" />
        </div>
      </div>
    </section>
  );
};

export default ChefSection;
