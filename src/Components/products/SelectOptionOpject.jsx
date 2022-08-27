import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { LOCALHOST, URL_GET_ALL_OPJECT } from "../../API/ALLAPI";
const { Option } = Select;

const onChange = (value) => {
  console.log(`selected ${value}`);
};

const onSearch = (label) => {
  console.log("search:", label);
};

const SelectOptionOpject = (props) => {
  const [dataOp, setDataOp] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_OPJECT}`)
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.data.map((item) => {
          otpn.push({ label: item.titleTypeProduct, value: item._id });
        });
        setDataOp(otpn);
      });
  }, []);
  return (
    <Select
      // showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
      options={dataOp}
      style={{ width: "100%" }}
    ></Select>
  );
};

export default SelectOptionOpject;
