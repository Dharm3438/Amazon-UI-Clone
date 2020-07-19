// import { act } from "react-dom/test-utils";

export const initialState = {
  basket: [
    {
      id: "2",
      title: "Hurom Slow Juicer HN NBC20 (Noble Silver) - 43 RPM, 150 Watts",
      price: 5500,
      rating: 5,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/513LbMXPh3L._SL1003_.jpg",
    },
  ],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {...state, user: action.user}
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    //break;
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];

      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant find the product id");
      }

      return { ...state, basket: newBasket };
    //break;
    default:
      return state;
  }
}

export default reducer;
