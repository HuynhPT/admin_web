import { Card, Select } from "antd";
import React from "react";
const { Option } = Select;
import ChartStatid from "../../Components/statils/ChartStatid";

const CardStatid = (props) => (
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
      width: 500,
      height: 350,
    }}
  >
    <ChartStatid data={props.datas} />
  </Card>
);

export default CardStatid;
