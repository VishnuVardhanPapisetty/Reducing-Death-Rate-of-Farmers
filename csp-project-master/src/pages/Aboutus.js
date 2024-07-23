import React from "react";
import Navbar from '../components/Navbar';
import Aboutusimage from "../assets/Aboutusimage.jpeg";
import "../styles/Aboutus.css";
import BaseHOC from "../layouts/BaseHOC";

function Aboutus() {
  return (
    <div>
      <section class="main">
      <div className="heading">
        <h1>ABOUT US</h1>
        </div>
        <div class="content">
        <div class="main-content">
          <h2>Welcome To Our Website</h2>
          <p>Our website is dedicated to the farmers !We are
            a pasionate group of individuals who believe that farmers,who play a crucial role in 
            feeding the world,deserve a safe and secure working environment. Our mission is to provide essential 
            information,resources, and tools to empower farmers to minimize the risks associated with their profession.</p>
            <button class="cta-button">Learn More</button>
            </div>
            <div class="main-image">
            <img src={Aboutusimage}  alt= "Aboutusimage" />
        </div>
        </div>
        </section>
        </div>
  )
}

export default BaseHOC(Aboutus);

