import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Listproperty from "./pages/listproperty/listproperty";
import Booking from "./pages/booking/booking";
import Login from "./pages/login/login";
import Guests from "./pages/guests/guests";
import Signup from "./pages/signup/signup";
import Hosts from "./pages/hosts/hosts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listproperty />} />
        <Route path="/listings:id" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hostpage" element={<Hosts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
