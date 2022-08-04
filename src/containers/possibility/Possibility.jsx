import './possibility.css';
import React from 'react'
import  PossibilityImage  from '../../assets/possibility.png';

export const Possibility = () => {
  return (
    <div className="gpt3_possibility section_padding" id="possibility">
      <div className="gpt3_possibility-image">
        <img src={PossibilityImage} alt="" />
      </div>
      <div className="gpt3_possibility-content">
        <h4>Request Early Access To Get Started</h4>
        <h1 className="gradient_text">The Possibilities are <br />Beyond Your Imagination</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Voluptates consectetur dolor, iste culpa veniam ex nisi illo labore, 
          aperiam modi eius? Quidem explicabo aut ad?
        </p>
        <h4>Request Early Access To Get Started</h4>
      </div>
    </div>
  )
}
