import React from "react";
import CardCover from "../../../Components/infoadmin/CardCover";
import CardInfor from "../../../Components/infoadmin/CardInfor";
import "./stylesinfor.css";
const ScreenInfoAdmin = () => {
  return (
    <div className="containerr">
      <div className="avatar-uploader ">
        <CardCover />
      </div>

      <div className="infomation">
        <CardInfor />
      </div>
      {/* <h1>okaaaaaaaaa</h1> */}
    </div>
  );
};

export default ScreenInfoAdmin;
