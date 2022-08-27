import { Select, Tag } from "antd";
import React, { useEffect, useState } from "react";

const SelectOtionSze = (props) => {
  const tagRender = (props) => {
    const { label, value, closable, onClose } = props;

    const onPreventMouseDown = (event) => {
      event.preventDefault();
      event.stopPropagation();
    };

    return (
      <Tag
        onMouseDown={onPreventMouseDown}
        closable={closable}
        onClose={onClose}
        style={{
          marginRight: 3,
        }}
      >
        {label}
      </Tag>
    );
  };
  return (
    <>
      {/* {data !== undefined && ( */}
      <Select
        mode="multiple"
        showArrow
        tagRender={tagRender}
        style={{
          width: "100%",
        }}
        options={props.dataSize}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
      {/* )} */}
    </>
  );
};

export default SelectOtionSze;
