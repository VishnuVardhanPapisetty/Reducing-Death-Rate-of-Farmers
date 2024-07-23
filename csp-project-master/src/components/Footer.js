import React from 'react'
import {FaInstagram} from 'react-icons/fa';
import {AiOutlineFacebook} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
        <div className="socialMedia">
            <FaInstagram><a href=''></a></FaInstagram>
            <AiOutlineFacebook/>
            <BiLogoGmail/>
        </div>
        <p> &copy; 2023 Reducing death rate of farmers</p>
      
    </div>
  )
}

export default Footer;
