import './gpt3.css';
import React from 'react'
import { Feature } from '../../components/';

export const GPT3 = () => {
  return (
    <div className="gpt3_whatgpt3 section_margin_gpt3" id="wgpt3">
      <div className="gpt3_whatgpt3-feature">
        <Feature title="What is GPT-3" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Voluptatibus error, fugiat ipsum eligendi, tenetur earum aspernatur a unde sequi cumque maiores quisquam sapiente 
        accusamus ut numquam, recusandae velit! Accusamus, hic?"/>
      </div>
      <div className="gpt3_whatgpt3-heading">
        <h1 className="gradient_text">The Possibilities are beyond your imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className="gpt3_whatgpt3-container">
        <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, natus!"/>
        <Feature title="Knowledgebase" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, natus!"/>
        <Feature title="Education" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, natus!"/>
      </div>
    </div>
  )
}
