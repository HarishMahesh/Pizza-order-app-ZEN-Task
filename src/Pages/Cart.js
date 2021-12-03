import { useContext } from "react";
import CartItems from "../components/CartItems";
import CardContext from "../store/CardContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const cxt = useContext(CardContext);
  const navigate = useNavigate();
  const cartItems = cxt.cart;
  const totalAmount = cxt.totalAmount.toFixed(2);
  const additems = cxt.addItems;
  const removeitems = cxt.removeItems;

  let cartdata = <p className="cart-empty-msg">Cart is Empty</p>;

  if (cartItems.length > 0) {
    cartdata = cartItems.map((e) => (
      <CartItems item={e} onAdd={additems} onRemove={removeitems} />
    ));
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 cart-overlay col-12">
            <p className="cart-heading">Shopping Cart</p>
            <div className="row items-overlay">{cartdata}</div>
            <div>
              {cartItems.length > 0 && (
                <p className="cart-total">{`Total : ${totalAmount} Rs`}</p>
              )}
            </div>
            <div className="cart-button">
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => navigate("/products")}
              >
                Back To Menu
              </button>
              {cartItems.length > 0 && (
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => {
                    navigate("/delivery-details");
                  }}
                >
                  Proceed To Checkout
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
