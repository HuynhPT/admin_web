import React from "react";
import { Radio } from "antd";

function SelectMenWomen(props) {
  return (
    <Radio.Group
      style={{
        width: "100%",
      }}
      onChange={props.onChange}
      options={props.dataOP}
      defaultValue={props.defaultValue}
    ></Radio.Group>
  );
}

export default SelectMenWomen;
