import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="header-img">
      <button className="order-btn" onClick={() => navigate("/products")}>
        Order Now
      </button>
    </div>
  );
}

export default HomePage;
