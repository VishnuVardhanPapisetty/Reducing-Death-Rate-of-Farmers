import React from 'react'
import "../styles/Whatwedo.css";
import educate from "../assets/educate.jpeg";
import communicate from "../assets/communicate.jpg";
import research from "../assets/research.jpg";
import BaseHOC from '../layouts/BaseHOC';
const Whatwedo =()=>{
  return (
    <div class="container-r">
    <div class="educate division">
      <h2>Educate</h2>
      <img src={educate} alt="educate"/>
      <p>Education is a crucial component in addressing the safety challenges faced by farmers. 
        Providing proper training and education to farmers about safe agricultural practices,handling equipment, and 
        risk management can significantly reduce accidents and fatalities.</p>
    </div>
    <div class="communicate division">
      <h2>Communicate</h2>
      <img src={communicate} alt="communicate"/>
      <p>Effective communication is vital to disseminate safety-related information, best practices, and updates within the farming community. 
        It ensures that farmers stay informed about safety measures and are aware of any new developments or regulations.
        Share real-life success stories and experiences of other farmers to inspire and motivate the community.</p>
    </div>
    <div class="research division">
      <h2>Research</h2>
      <img src={research} alt="research"/>
      <p>Research plays a pivotal role in identifying emerging safety challenges, developing innovative solutions, 
        and evaluating the effectiveness of existing safety measures.Gather existing literature, reports, 
        and studies related to farmers' issues to understand the context and previous findings.</p>
    </div>
  </div>
  );
}

export default BaseHOC(Whatwedo);
