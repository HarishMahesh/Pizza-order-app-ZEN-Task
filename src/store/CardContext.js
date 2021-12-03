import react from "react";

const CardContext = react.createContext({
  cart: [],
  totalAmount: 0,
  addItems: function (data, qtn) {},
  removeItems: function (data) {},
  resetCart: function () {},
});

export default CardContext;
