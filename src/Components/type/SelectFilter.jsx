import { Select, Tag } from "antd";
import "./css.css";
const SelectFilter = (props) => {
  return (
    <Select
      placeholder={props.placeholder}
      style={{
        width: "100%",
        backgroundColor: "#D9D9D9",
        borderRadius: 3,
      }}
      options={props.options}
      onChange={props.onChange}
      value={props.value}
    />
  );
};
export default SelectFilter;
