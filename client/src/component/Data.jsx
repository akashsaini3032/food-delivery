
import { useState, useEffect } from "react";
import BackEndUrl from "../config/BackEndUrl";
import axios from "axios";
import { addtoCart } from "../cartSlice";
import { useDispatch } from "react-redux";
import "../css/Data.css";
const Data = () => {
  const [mydata, setMydata] = useState([]);
  const dispatch = useDispatch();

  const loadData = async () => {
    const api = `${BackEndUrl}/product/homedisplay`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="fancy-section">
      <h1 className="fancy-title">🍽️ Our Signature Dishes</h1>
      <div className="fancy-grid">
        {mydata.map((item) => (
          <div className="fancy-card" key={item._id}>
            <div className="fancy-img-wrapper">
              <img src={item.defaultImage} alt={item.name} className="fancy-img" />
            </div>
            <div className="fancy-content">
              <h3 className="fancy-name">{item.name}</h3>
              <p className="fancy-desc">{item.description}</p>
              <span className="fancy-cat">{item.category}</span>
              <div className="fancy-footer">
                <span className="fancy-price">₹ {item.price}</span>
                <button
                  className="fancy-btn"
                  onClick={() =>
                    dispatch(
                      addtoCart({
                        id: item._id,
                        name: item.name,
                        description: item.description,
                        price: item.price,
                        category: item.category,
                        images: item.images,
                        defaultImage: item.defaultImage,
                        qnty: 1,
                      })
                    )
                  }
                >
                  Add to Cart 🛒
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
