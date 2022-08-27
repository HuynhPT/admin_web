import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LOCALHOST, URL_GET_ALL_IMG } from "../../API/ALLAPI";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselBanner = () => {
  const [state, setstate] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_IMG}`)
      .then((res) => res.json())
      .then((state) => {
        const newData = state.data.map((item) => item.image_ads);
        setstate(newData);
      });
  }, []);

  return (
    state !== undefined && (
      <div
        style={{
          width: "100%",
          background: "#fff",
          paddingLeft: 200,
          paddingRight: 200,
        }}
      >
        <Carousel autoplay autoplaySpeed={2000} style={contentStyle}>
          <div>
            <img src={state[1]} alt="" style={{ width: "100%", height: 150 }} />
          </div>
          <div>
            <img src={state[2]} alt="" style={{ width: "100%", height: 150 }} />
          </div>
          <div>
            <img src={state[3]} alt="" style={{ width: "100%", height: 150 }} />
          </div>
          <div>
            <img src={state[4]} alt="" style={{ width: "100%", height: 150 }} />
          </div>
        </Carousel>
      </div>
    )
  );
};

export default CarouselBanner;
