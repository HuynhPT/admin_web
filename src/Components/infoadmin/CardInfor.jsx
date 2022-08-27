import { Card, Image } from "antd";
import React from "react";
import img_login from "../../Common/Image/img_login.png";
import "./stylesInfro.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const CardInfor = () => {
  const user = useSelector((state) => state.auth.login?.currentUser.user);
  console.log("Ở đây", user);
  return (
    <Card
      style={{
        width: 350,
        height: 150,
        marginTop: -100,
      }}
    >
      <div className="__ava_container">
        <Image src={user.image} style={{ width: 100, height: 100 }} />
        <div style={{ marginLeft: 50 }}>
          <p>
            <span>{user.userName}</span>
          </p>
          <p>{user.phone}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardInfor;
