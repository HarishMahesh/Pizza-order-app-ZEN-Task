import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import CardContextProvider from "./store/CardContextProvider";
import Cart from "./Pages/Cart";
import DeliveryForm from "./Pages/DeliveryForm";

function App() {
  return (
    <>
      <CardContextProvider>
        <Header />
        <Routes>
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/" element={<Navigate to="/homepage" />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/delivery-details" element={<DeliveryForm />} />
        </Routes>
      </CardContextProvider>
    </>
  );
}

export default App;
