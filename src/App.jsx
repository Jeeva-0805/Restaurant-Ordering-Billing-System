import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Navbar from "./Navbar";
import Cart from "./pages/Cart";
import Reviews from "./pages/Reviews";
import AdminMenu from "./pages/AdminMenu";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/admin-menu" element={<AdminMenu />}
/>
      </Routes>

    </BrowserRouter>
  );
}

export default App;