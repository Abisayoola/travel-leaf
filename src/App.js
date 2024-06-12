import React from "react";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Listproperty from "./pages/listproperty/listproperty";
import Booking from "./pages/booking/booking";
import Login from "./pages/login/login";
import Guests from "./pages/guests/guests";
import Signup from "./pages/signup/signup";
import Hosts from "./pages/hosts/hosts";
import Houses from "./pages/viewhouses/viewhouses";
import Result from "./pages/searchresult/searchlist";
import ListHouse from "./pages/listproperty/listhouse/listHouse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<Listproperty />} />
        <Route path="/houselisting/:section" element={<ListHouse />} />
        <Route path="/listings:id" element={<Booking />} />
        <Route path="/login" element={<Login />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hostpage" element={<Hosts />} />
        <Route path="/viewhouses" element={<Houses />} />
        <Route path="/searchresult" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
