import React from "react";
import { Button, Form, Input, Modal } from "antd";
import TableListTypeProduct from "./TableListTypeProduct";
const FromListTypeProduct = () => {
  return (
    <div style={{ margin: 50, height: "100%" }}>
      <h3 style={{ fontSize: 24 }}>Danh sách thể loại</h3>
      <div
        style={{
          display: "flex",
        }}
      >
        <p style={{}}>
          Sử dụng danh sách thể loại để mô tả hoạt động kinh doanh cốt lõi tổng
          thể của bạn từ danh sách được cung cấp.
          <br /> Bấm vào tên của danh mục mà bạn muốn thêm một mục danh sách
        </p>
      </div>
      <div>
        <TableListTypeProduct />
      </div>
    </div>
  );
};

export default FromListTypeProduct;
