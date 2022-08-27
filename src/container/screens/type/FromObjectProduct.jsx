import React, { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import TableObjectProduct from "./TableObjectProduct";
import { CheckCircleTwoTone, PlusOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { addTypeProduct } from "../../../Redux/TypeProductSlice";
import { useForm } from "react-hook-form";
import Validate from "../../../Components/auth/Validate";
const FromObjectProduct = () => {
  const [edtex, setedtex] = useState();

  const dispatch = useDispatch();
  const onFinish = () => {
    if (edtex !== "") {
      dispatch(addTypeProduct({ titleTypeProduct: edtex }));
      message.success({
        content: "Thêm thành công",
        className: "custom-class",
        style: {
          color: "#52c41a",
        },
        icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
        duration: 2,
      });
      setedtex();
    } else {
      message.error({
        content: "Thêm thất bại",
        className: "custom-class",
        style: {
          color: "red",
        },
        icon: () => <CheckCircleTwoTone twoToneColor="red" />,
        duration: 2,
      });
    }
  };

  // const handleChange = (event) => {
  //   setedtex({
  //     ...edtex,
  //     [event.target.name]: event.target.value,
  //   });
  //   console.log(edtex);
  // };
  return (
    <div>
      <h3
        style={{
          fontSize: "24px",
          marginTop: 30,
          marginLeft: 30,
          fontFamily: "Open Sans",
          color: "#000000",
        }}
      >
        Danh sách thể loại sản phẩm
      </h3>

      <p
        style={{
          color: "#000000",
          fontSize: "18px",
          marginTop: 20,
          marginLeft: 30,
          fontWeight: "700",
          fontFamily: "Open Sans",
        }}
      >
        Thêm thể loại sản phẩm *
      </p>

      <Form
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "-10px 25px 25px 30px",
        }}
        disabled={true}
      >
        <Form.Item name="titleTypeProduct" style={{ width: "100%" }}>
          <Input
            value={edtex == undefined ? "" : edtex}
            onChange={(e) => setedtex(e.target.value)}
            name="titleTypeProduct"
            style={{
              width: "100%",
              height: "48px",
              border: String(edtex).length <= 0 && "1px solid red",
            }}
            placeholder="Nhập : Nam, Nữ,........"
          />
          {String(edtex).length <= 0 && (
            <span style={{ color: "red" }}>Nhập tối thiểu 2 ký tự!</span>
          )}
        </Form.Item>

        <Button
        disabled={true}
          onClick={() => onFinish()}
          style={{
            width: "30%",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#87CEEB",
            border: "1px sold #87CEEB ",
            marginLeft: 100,
            marginRight: 10,
          }}
        >
          <PlusOutlined />
          <p style={{ color: "black", margin: 4 }}>Thêm</p>
        </Button>
      </Form>
      <TableObjectProduct />
    </div>
  );
};

export default FromObjectProduct;
