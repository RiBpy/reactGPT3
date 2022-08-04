import './feature.css';
import React from 'react'

export const Feature = ({title,text}) => {
  return (
    <div className="gpt3_features-container_feature">
      <div className="gpt3_features-container_feature-title">
         <div/> {/* single div-hr */}
          <h1>{title}</h1>
      </div>
       <div className="gpt3_features-container_feature-text">
        <p>{text}</p>
       </div>
    </div>
  )
}
