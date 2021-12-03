import { FaShoppingCart } from "react-icons/fa";
import Logo from "../logo/logo-piza.jpg";
import "./Header.css";
import { useContext } from "react";
import CardContext from "../store/CardContext";
import { useNavigate } from "react-router-dom";

function Header() {
  let quant = 0;
  const navigate = useNavigate();

  const ctx = useContext(CardContext);

  for (let i in ctx.cart) {
    quant += ctx.cart[i].qtn;
  }
  return (
    <>
      <div className="header-container">
        <div className="header-logo">
          <img src={Logo} alt="piza-logo" />
        </div>
        <h2>PIZZA WORLD</h2>
        <div className="header-cart">
          <button onClick={() => navigate("/cart")}>
            <div>
              <span>
                <FaShoppingCart style={{ fontSize: "20px" }} />
              </span>
              <span className="cart-count">{quant}</span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
