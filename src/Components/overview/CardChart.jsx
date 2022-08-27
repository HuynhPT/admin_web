import { Card, Select } from "antd";
import React from "react";
import Chart from "./Chart";
const { Option } = Select;
const CardChart = (props) => (
  <>
    <Card
      title={props.title}
      // extra={
      //   <Select
      //     defaultValue="Tuần này"
      //     style={{ width: 120 }}
      //     onChange={() => handleChange}
      //   >
      //     <Option value="Tuần này">Tuần này</Option>
      //     <Option value="Tháng này">Tháng này</Option>
      //     <Option value="Năm này">Năm này</Option>
      //   </Select>
      // }
      style={{
        width: '100%',
      }}
    >
      <Chart data={props?.datas}/>
    </Card>
  </>
);

export default CardChart;
