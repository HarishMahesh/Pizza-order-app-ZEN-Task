import "./ProductItem.css";
import { useRef, useContext } from "react";
import CardContext from "../store/CardContext";

function ProductItem(props) {
  const ctx = useContext(CardContext);
  const qtnRef = useRef();
  let amount = props.items.price.toFixed(2) + " Rs";

  function clickHandeler() {
    if (+qtnRef.current.value > 0) {
      ctx.addItems(props.items, qtnRef.current.value);
    }
  }

  return (
    <>
      <div className="col-lg-4 col-md-6 product-card">
        <div className="img-container">
          <img src={props.items.image} alt="pizza name" />
        </div>
        <div className="card-content">
          <div>
            <p className="heading">
              <b>{props.items.name}</b> <span>( {props.items.type} )</span>
            </p>

            <p>{amount} </p>
            <p>{props.items.description}</p>
          </div>
          <div className="item-btn-container">
            <label htmlFor="qtn">Qnt :</label>
            <input
              ref={qtnRef}
              id="qtn"
              type="number"
              step="1"
              defaultValue="1"
              min="1"
            />
            <button onClick={clickHandeler}>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
