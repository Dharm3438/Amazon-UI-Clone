import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [state] = useStateValue();

  return (
    <div className="checkout">
      <img
        src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        alt=""
        className="checkout__ad"
      />
      {state.basket?.length === 0 ? (
        <div>
          <h2 className="checkout__title">Your Shooping Cart is Empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>

          {state.basket?.map((product) => (
            <CheckoutProduct
              id={product.id}
              title={product.title}
              image={product.image}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
