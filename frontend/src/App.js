import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user, "main");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>

      {/* <Home />;
      <ProductList />
      <SingleProduct />
      <Register />
      <Login />
      <Cart /> */}
      {/* <Payment /> */}
    </>
  );
}

export default App;
