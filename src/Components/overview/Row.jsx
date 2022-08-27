import React from "react";
import { Card, Progress } from "antd";
import "./stylesrow.css";
function Row(props) {
  return (
    <Card
      style={{
        width: 250,
        height: 120,
        borderWidth: 1,
        borderColor: "#B9BCBE",
        borderRadius: 3,
      }}
    >
      <div className="container">
        <div>
          <img src={props.img_ic} />
        </div>
        <div className="content_container">
          <p className="titleov">{props.title}</p>
          <p className="number">{props.number}</p>
        </div>
      </div>
      <div>
        <Progress
          percent={props.percent}
          strokeColor={props.color}
          size="small"
          status="active"
        />
      </div>
    </Card>
  );
}

export default Row;
