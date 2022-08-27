import { DatePicker, Space } from "antd";
import moment from "moment";
import React from "react";
const { RangePicker } = DatePicker;

const DateSelect = (props) => {
  const dateFormat = "DD/MM/YYYY";

  return (
    <Space
      direction="vertical"
      size={"middle"}
      style={{ marginRight: 10, width: "100%" }}
    >
      <RangePicker
        format={dateFormat}
        placeholder={["Bắt đầu", "Kết thúc"]}
        ranges={{
          "Hôm nay": [moment(), moment()],
          "Tháng này": [moment().startOf("month"), moment().endOf("month")],
        }}
        onChange={props.onChange}
      />
    </Space>
  );
};

export default DateSelect;
