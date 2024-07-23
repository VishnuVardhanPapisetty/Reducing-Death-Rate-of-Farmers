import React from "react";
import BaseHOC from "../layouts/BaseHOC";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import Contact1 from "../assets/contact1.jpeg";
import Contact2 from "../assets/contact2.jpeg";
import Contact3 from "../assets/kousi.jpg";
import "../styles/Contactus.css";
function Contactus() {
  return (
   <section className="section-white">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="section-title">
            CONTACT US
          </h2>
        </div>
        </div>
        <div className="cards">
        <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src={Contact1} alt="contact"/>
            <h3>ATUKURI PRANEETHA</h3>
            <div className="team-info">
              <p>Team member 1</p> <br></br>
              <p>I am student of NEC</p>
              <ul className="team-icon">
              <li>
                <FaFacebookSquare className="facebook" />
            </li>
            <li>
                <FaInstagramSquare className="instagram" />
            </li>
            <li>
                <FaYoutubeSquare className="youtube" />
            </li>           
              </ul>
            </div>
            </div>
            </div>
          <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src={Contact2} />
            <h3>KOLLIPARA RAMYA SRI ABHITHA</h3>
            <div className="team-info">
              <p>Team member 2</p>
              <p>I am student of NEC</p>
              <ul className="team-icon">
              <li>
                <FaFacebookSquare className="facebook" />
            </li>
            <li>
                <FaInstagramSquare className="instagram" />
            </li>
            <li>
                <FaYoutubeSquare className="youtube" />
            </li>        
              </ul>
            </div>
          </div>
          </div>
          <div className="col-sm-6 col-md-4">
          <div className="team-item">
            <img src={Contact3} />
            <h3>P.Kousalya Supraja</h3>
            <div className="team-info">
              <p>Team member 3</p>
              <p>I am student of NEC</p>
              <ul className="team-icon">
              <li>
                <FaFacebookSquare className="facebook" />
            </li>
            <li>
                <FaInstagramSquare className="instagram" />
            </li>
            <li>
                <FaYoutubeSquare className="youtube" />
            </li>
            </ul>
            </div>
            </div>
          </div>
            </div>
    </section>
  )
}

export default BaseHOC(Contactus);