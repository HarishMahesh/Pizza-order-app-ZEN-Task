import { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import CardContext from "../store/CardContext";
import { useNavigate } from "react-router-dom";

function DeliveryForm() {
  const [orderPlaced, setOrderPlaced] = useState(false);
  const ctx = useContext(CardContext);
  const navigate = useNavigate();

  let totalAmount = ctx.totalAmount.toFixed(2) + " Rs";
  let quant = 0;
  for (let i in ctx.cart) {
    quant += ctx.cart[i].qtn;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 cart-overlay col-12">
            {!orderPlaced ? (
              <>
                <p className="cart-heading">
                  Delivery details
                  <span>(Please enter the Delivery details)</span>
                </p>
                <FormInput
                  quant={quant}
                  totalAmount={totalAmount}
                  setOrderPlaced={setOrderPlaced}
                  resetCart={ctx.resetCart}
                />
              </>
            ) : (
              <div>
                <p className="cart-heading">Order Received</p>

                <p className="delivery-msg">
                  Make the Plates ready Pizza will reach you soon...
                </p>
                <div className="cart-button">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={() => navigate("/homepage")}
                  >
                    Back To Home
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryForm;
