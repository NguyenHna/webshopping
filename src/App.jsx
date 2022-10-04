import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage";
import Layout from "./Component/Layout";
import ShopPage from "./Component/ShopPage";
import CartPage from "./Component/CartPage";
import LoginPage from "./Component/LoginPage";
import DetailPage from "./Component/DetailPage";
import { useSelector } from "react-redux";
import { stateIDShopPage } from "./Component/redux/selectors";
import RegisterPage from "./Component/RegisterPage";
import CheckoutPage from "./Component/CheckoutPage";

function App() {
  const IDProduct = useSelector(stateIDShopPage);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="detail" element={<DetailPage id={IDProduct} />} />
          <Route path="checkout" element={<CheckoutPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
