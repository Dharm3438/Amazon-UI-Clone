import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  console.log(state);
  const addToBasket = () => {
    // important to add object to state
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <span role="img">⭐</span>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
