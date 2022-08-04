import React from "react";
import "./brand.css";
import { atlassian, google, shopify, slack } from "./import";

export const Brand = () => {
  return (
    <div className="gpt3_brand section_padding">
      <div>
        <img src={google} alt="" />
      </div>
      <div>
        <img src={slack} alt="" />
      </div>
      <div>
        <img src={atlassian} alt="" />
      </div>
      <div>
        <img src={shopify} alt="" />
      </div>
    </div>
  );
};
