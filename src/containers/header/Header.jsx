import './header.css';
import React from 'react'
import people from "../../assets/people.png";
import ai from '../../assets/ai.png'

export const Header = () => {
  return (
    <div className="gpt3_header section_padding"id="home">
      <div className="gpt3_header-content">
        <h1 className=" gradient_text h1-home">Let's Build Something New What Will look cool</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
           Magnam optio illo aliquam animi sint explicabo.</p>
        <div className="gpt3_header-content_input">
          <input type="email" placeholder='Your Email Address' />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3_header-content_people">
          <img src={people} alt="People" />
          <p>2200 people requested access to this site in last 24 hours</p>
        </div> 
      </div>
      <div className="gpt3_header-image">
          <img src={ai} alt="AI" />
        </div>
    </div>
  )
}
