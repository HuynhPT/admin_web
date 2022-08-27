import { Card, Select } from "antd";
import React from "react";
import Chartcolum from "./Chartcolum";
const { Option } = Select;

function CardChartcolum(props) {
  return (
    <Card
      title={props.title}
      extra={
        <Select
          defaultValue="Tuần này"
          style={{ width: 120 }}
          onChange={() => handleChange}
        >
          <Option value="Tuần này">Tuần này</Option>
          <Option value="Tháng này">Tháng này</Option>
          <Option value="Năm này">Năm này</Option>
        </Select>
      }
      style={{
        textAlign: "center",
        margin: "10px 55px",
      }}
    >
      <Chartcolum />
    </Card>
  );
}

export default CardChartcolum;
