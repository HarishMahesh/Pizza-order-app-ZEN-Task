import "./CartItems.css";

function CartItems(props) {
  return (
    <div className="col-12">
      <section className="entire-cart">
        <div className="cart-img-cont">
          <img src={props.item.image} alt="pizza img" />
        </div>
        <div className="cart-details-name">
          <p>
            <b>{props.item.name}</b>
          </p>
          <p>{props.item.price}</p>
        </div>
        <div>
          <span>X</span>
        </div>
        <div>
          <span>{props.item.qtn}</span>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => props.onAdd(props.item, 1)}
          >
            <b>+</b>
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-secondary"
            onClick={() => props.onRemove(props.item.id)}
          >
            <b>-</b>
          </button>
        </div>
      </section>

      <hr></hr>
    </div>
  );
}

export default CartItems;
