

// export const Article =[
//   {
//     id:1,
//     image:"../../assets/table2.jpg",
//     heading:"Heading Number One",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit!"
//   },
//   {
//     id:2,
//     image:"../../assets/table6.jpg",
//     heading:"Heading Number Two",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit!"
//   },
//   {
//     id:3,
//     image:"../../assets/table3.jpg",
//     heading:"Heading Number Three",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit!"
//   },
//   {
//     id:4,
//     image:"../../assets/monitor.jpg",
//     heading:"Heading Number Four",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit!"
//   },
//   {
//     id:5,
//     image:"../../assets/bulbBlack.jpg",
//     heading:"Heading Number Five",
//     text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, reprehenderit!"
//   }
// ]

import React from 'react'
import "./article.css"

export const Article = ({imgUrl,date,heading,text,smIcon1,smIcon2}) => {
  return (
    <div className="gpt3_blog-container_article">
      <div className="gpt3_blog-container_article-image">
        <img src={imgUrl} alt="" />
      </div>
      <div className="gpt3_blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{heading}</h3>
          <p>{text}</p>
        </div>
        <div className="gpt3_blog_container-share">
          <img src={smIcon1} alt="sm-icon" />
          <img src={smIcon2} alt="sm-icon" />
        </div>
        <button type="button">Read Full Article</button>
      </div>
    </div>
  )
}
