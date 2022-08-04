import React from "react";
import logo from "../../assets/logo.png";
import { LinkedIn, Pinterest, Twitter } from "../blog/imports";
import "./footer.css";

export const Footer = () => {
  return (
    <div className="gpt3_footer section_padding">
      <div className="gpt3_footer-heading">
        <h1 className="gradient_text">
          Do you want to into the future before others?
        </h1>
      </div>
      <div className="gpt3_footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3_footer-links">
        <div className="gpt3_footer-links-logo">
          <img src={logo} alt="logo" />
          <p>
            Do something new <br /> Before others do.
          </p>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Counters</p>
          <p>Contacts</p>
          <p className="gpt3_footer-links_div-smIcon">
            <img src={LinkedIn} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pinterest} alt="" />
          </p>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3_footer-links_div">
          <h4>Get in Touch</h4>
          <p>Lorem ipsum dolor sit.</p>
          <p>0123456789</p>
          <p>ribpy22@gmail.com</p>
        </div>
      </div>
      <div className="gpt3_footer-copyright">
        <p>
          All rights reserved by &copy;<a href="#">Riaz Bappy</a>
        </p>
      </div>
    </div>
  );
};
