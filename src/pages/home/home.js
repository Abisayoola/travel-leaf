import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import "./home.css";
import Info from "../../components/Info/Info";
import Featured from "../../components/Featured/Featured";
import Contact from "../../components/contact/contact";
import Footer from "../../components/Footer/footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="homeContainer">
        <Info />
        <Featured />
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
