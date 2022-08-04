import React from "react";
import { Article } from "../../components";
import "./blog.css";

import {
  blog01,
  blog02,
  blog03,
  blog04,
  blog05,
  LinkedIn,
  Twitter,
} from "./imports";
export const Blog = () => {
  return (
    <div className="gpt3_blog section_padding" id="blog">
      <div className="gpt3_blog-heading">
        <h1 className="gradient_text">
          A Lot is Happening <br />
          We are Blogging about it
        </h1>
      </div>
      <div className="gpt3_blog-container">
        <div className="gpt3_blog-container-groupA">
          <Article
            imgUrl={blog01}
            date="March-22-2022"
            heading="Blog Heading One"
            smIcon1={LinkedIn}
            smIcon2={Twitter}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti!"
          />
        </div>
        <div className="gpt3_blog-container-groupB">
          <Article
            imgUrl={blog02}
            date="March-22-2022"
            heading="Blog Heading Two "
            smIcon1={LinkedIn}
            smIcon2={Twitter}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti!"
          />
          <Article
            imgUrl={blog03}
            date="March-23-2022"
            heading="Blog Heading Three"
            smIcon1={LinkedIn}
            smIcon2={Twitter}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti!"
          />
          <Article
            imgUrl={blog04}
            date="March-24-2022"
            heading="Blog Heading Four"
            smIcon1={LinkedIn}
            smIcon2={Twitter}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti!"
          />
          <Article
            imgUrl={blog05}
            date="March-21-2022"
            heading="Blog Heading Five"
            smIcon1={LinkedIn}
            smIcon2={Twitter}
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, corrupti!"
          />
        </div>
      </div>
    </div>
  );
};
