import CardContext from "./CardContext";
import { useReducer } from "react";

function cartReducer(state, action) {
  if (action.type === "ADD") {
    let index = null;
    let totalAmount = state.totalAmount + action.item.price * action.qtn;
    for (let i in state.cart) {
      if (state.cart[i].id === action.item.id) {
        index = i;
        break;
      }
    }

    if (index) {
      let stateItem = [...state.cart];
      let amt = stateItem[index].qtn + +action.qtn;
      stateItem[index] = {
        qtn: amt,
        id: stateItem[index].id,
        price: stateItem[index].price,
        name: stateItem[index].name,
        image: stateItem[index].image,
      };
      console.log(stateItem[index], stateItem);
      return { cart: stateItem, totalAmount: totalAmount };
    } else {
      let stateItem = [
        ...state.cart,
        {
          id: action.item.id,
          price: action.item.price,
          qtn: +action.qtn,
          name: action.item.name,
          image: action.item.image,
        },
      ];

      return { cart: stateItem, totalAmount: totalAmount };
    }
  }

  if (action.type === "REMOVE") {
    let totalAmount;
    let stateItem = [...state.cart];
    let index = null;
    for (let i in state.cart) {
      if (state.cart[i].id === action.id) {
        index = i;
        break;
      }
    }

    let avlQuantity = stateItem[index].qtn;

    if (avlQuantity > 1) {
      --avlQuantity;
      stateItem[index] = {
        qtn: avlQuantity,
        id: stateItem[index].id,
        price: stateItem[index].price,
        name: stateItem[index].name,
        image: stateItem[index].image,
      };
      totalAmount = state.totalAmount - stateItem[index].price;
      return { cart: [...stateItem], totalAmount: totalAmount };
    } else {
      totalAmount = state.totalAmount - stateItem[index].price;
      stateItem.splice(index, 1);
      return { cart: [...stateItem], totalAmount: totalAmount };
    }
  }

  if (action.type === "RESET") {
    return { cart: [], totalAmount: 0 };
  }
  return state;
}

function CardContextProvider(props) {
  const [cartState, cartDispatcher] = useReducer(cartReducer, {
    cart: [],
    totalAmount: 0,
  });

  function addItemsToCart(item, qtn) {
    cartDispatcher({ type: "ADD", item: item, qtn: qtn });
  }

  function removeItemsFromCart(id) {
    cartDispatcher({ type: "REMOVE", id: id });
  }

  function toResetCart() {
    cartDispatcher({ type: "RESET" });
  }
  const context = {
    cart: cartState.cart,
    totalAmount: cartState.totalAmount,
    addItems: addItemsToCart,
    removeItems: removeItemsFromCart,
    resetCart: toResetCart,
  };
  console.log(context);
  return (
    <CardContext.Provider value={context}>
      {props.children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
