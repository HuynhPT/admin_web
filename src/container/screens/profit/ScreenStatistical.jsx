import { Image } from "antd";
import React from "react";
import CardChartcolum from "../../../Components/statils/CardChartcolum";
import CardStatid from "../../../Components/statils/CardStatid";

import "./Statistical.css";
const data = [
  { type: "Lượt thích", value: 10000 },
  { type: "Lượt xem", value: 15000 },
];
const datasex = [
  { type: "Nam", value: 10000 },
  { type: "Nữ", value: 25000 },
];
const ScreenStatistical = () => {
  return (
    <div className="containerstl">
      <div className="titletk">
        <p className="title">Thống kê</p>
      </div>
      <div className="chart">
        <CardStatid title={"Biểu đồ thống kê lượt theo dõi"} datas={data} />
        <CardStatid title={"Biểu đồ thống kê lượt theo dõi"} datas={datasex} />
      </div>
      <br />
      <div className="columchar">
        <CardChartcolum title={"Biểu đồ thống kê doanh thu"} />
      </div>
    </div>
  );
};

export default ScreenStatistical;
