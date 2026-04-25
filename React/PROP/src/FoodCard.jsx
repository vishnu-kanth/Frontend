import React from "react";

const FoodCard = ({ foodData }) => {
  return (
    <div>
      {foodData.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>Price: ₹{item.price}</p>
          <img src={item.image} alt={item.name} width="200"  />
        </div>
      ))}
    </div>
  );
};

export default FoodCard;