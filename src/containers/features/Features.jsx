import './feat.css'
import React from 'react'
import {Feature} from '../../components';
const featuresData=
[
  {
    title:'Hello Bangladesh you are doing good',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem odio quo dolores? Ipsam, amet voluptates. Fuga natus molestiae odit provident reiciendis iusto quibusdam blanditiis ipsum.'
  },
  {
    title:'You need to be careful about debt',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius tenetur quas ratione, maxime nam corrupti cum nisi? Repellat, quisquam'
  },
  {
    title:'Bring variety in exporting',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius tenetur quas ratione, maxime nam corrupti cum nisi? Repellat, quisquam.'
  },
  {
    title:'Bring back democracy',
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eius tenetur quas ratione, maxime nam corrupti cum nisi? Repellat, quisquam.'
  }
]

export const Features = () => {
  return (
    <div className="gpt3_features section_padding" id="features">
      <div className="gpt3_features-heading">
        <h1 className="gradient_text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="gpt3_features-container">
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title+index}/>
        ))}
      </div>
    </div>
  )
}
