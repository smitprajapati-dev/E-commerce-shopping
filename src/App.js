import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Dashboard from "./pages/Admin/Dashboard/Dashboard";
import Nopage from "./pages/Nopage/Nopage";
import Cart from "./pages/Cart/Cart";
import MyState from "./context/Data/MyState"
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";

function App() {
  return (
    <MyState >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<Nopage />} />
        </Routes>
      </Router>
    </MyState>
  );
}

export default App;
