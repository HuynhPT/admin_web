import React from "react";
import FromListTypeProduct from "./FromListTypeProduct";
import "./ListTypeProduct.css";

const ScreenListTypeProduct = () => {
  return (
    <div className="mainListTypeProduct" style={{}}>
      <div className="BodyListTypeProduct">
        <div className="contentListTypeProduct">
          <FromListTypeProduct />
        </div>
      </div>
    </div>
  );
};

export default ScreenListTypeProduct;
