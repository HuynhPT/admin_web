import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import "../banner/bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import SelectMenWoment from "../../../Components/products/SelectMenWomen";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { upopjectCategori } from "../../../Redux/OjectCategoriSlice";
import { mToken } from "../../../../token/TokenLogin";
import {
  LOCALHOST,
  URL_GET_ALL_OPJECT,
  URL_GET_ALL_TYPE,
  URL_GET_ID_OPJECT_TYPE,
  URL_UPDATE_ID_TYPE,
} from "../../../API/ALLAPI";
// truyền prammas

function FromUpdateTypeProduct(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [dataEdit, setDataEdit] = useState();
  const [nameImage, setNameImage] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_TYPE}`)
      .then((res) => res.json())
      .then((data) => {
        const newData = data.data.find((item) => item._id == id);
        setDataEdit(newData);
      });
  }, []);
  const [nameLinkImage, setNameLinkImage] = useState("");
  const [valueText, setValueText] = useState("");
  const [dataOp, setDataOp] = useState("");

  // lấy dữ liệu id của đối tượng
  const [dataLable, setDataLable] = useState("");
  const handleChange = (checkedValues) => {
    "checked = ", setDataLable(checkedValues.target.value);
  };
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_OPJECT}`)
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.result.map((item) => {
          otpn.push({ label: item.titleTypeProduct, value: item._id });
        });
        setDataOp(otpn);
      });
  }, []);
  const upImage = (e) => {
    setNameLinkImage(e.target.files);
    setNameImage(e.target.files[0].name);
  };
  const onFinish = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append(
      "titleCategoryProduct",
      values.titleCategoryProduct == undefined
        ? dataEdit.titleCategoryProduct
        : values.titleCategoryProduct
    );
    formData.append(
      "croppedImage",
      nameLinkImage[0] == undefined
        ? dataEdit.categoryImgProduct
        : nameLinkImage[0]
    );
    formData.append(
      "idTypeProduct",
      values.idTypeProduct == undefined
        ? dataEdit.idTypeProduct
        : values.idTypeProduct
    );
    formData.append("idCategory", dataEdit._id);
    await axios({
      url: `${LOCALHOST}` + `${URL_UPDATE_ID_TYPE}`,
      method: "POST",
      headers: {
        token: mToken,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then(
      async (res) => {
        res.data.code === 200
          ? message.success({
              content: "Sửa thành công",
              className: "custom-class",
              style: {
                color: "#52c41a",
              },
              icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
              duration: 2,
            })
          : message.error({
              content: "Sửa thất bại",
              className: "custom-class",
              style: {
                color: "red",
              },
              icon: () => <CheckCircleTwoTone twoToneColor="red" />,
              duration: 2,
            });
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
  };
  console.log(nameImage);
  return (
    dataEdit !== undefined && (
      <>
        <div
          style={{
            overflow: "none",
            backgroundColor: "#fff",
            margin: 100,
            height: 500,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.0,

            elevation: 24,
          }}
        >
          <h3 className="_titile_add_wonent">Sửa thể loại sản phẩm</h3>
          <Form
            style={{ margin: "0 20px" }}
            name="basic"
            labelCol={{
              span: 4,
            }}
            wrapperCol={{
              span: 20,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            autoComplete="off"
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div style={{ width: "70%" }}>
                {/* tên */}
                <Form.Item label="Tên" name="titleCategoryProduct">
                  <Input
                    style={{ borderRadius: 3 }}
                    defaultValue={`${dataEdit?.titleCategoryProduct}`}
                  />
                </Form.Item>
                {/* Đối tượng */}
                <Form.Item
                  label=" Đối tượng"
                  name="idTypeProduct"
                >
                  <SelectMenWoment
                    dataOP={dataOp}
                    onChange={handleChange}
                    defaultValue={`${dataEdit?.idTypeProduct}`}
                  />
                  {/* <ModalTypeProduct /> */}
                </Form.Item>
              </div>
              <div style={{ width: "50%" }}>
                {/* thêm ảnh */}
                <Form.Item
                  label="Chọn ảnh"
                  name="croppedImage"
                  style={{ marginLeft: 20 }}
                >
                  {(nameImage !== undefined || dataEdit.categoryImgProduct) && (
                    <div style={{ display: "flex" }}>
                      <span style={{ margin: 10 }}>
                        {nameImage !== undefined
                          ? nameImage
                          : dataEdit.categoryImgProduct}
                      </span>
                      <br />
                      <Button
                        onClick={() => setNameImage()}
                        style={{ margin: 10 }}
                      >
                        Huỷ
                      </Button>
                    </div>
                  )}
                  <br />
                  <label htmlFor="images">
                    <div
                      style={{
                        border: "1px solid #d9d9d9",
                        marginTop: -25,
                        textAlign: "center",
                        borderRadius: 3,
                        width: "40%",
                        height: 40,
                      }}
                    >
                      <p
                        style={{
                          marginTop: 10,
                        }}
                      >
                        Chọn ảnh
                      </p>
                    </div>
                  </label>
                  <input
                    id="images"
                    type="file"
                    style={{ display: "none", width: 200 }}
                    onChange={(e) => upImage(e)}
                  />
                </Form.Item>
              </div>
            </div>
            {/* nút xử lý sự kiện */}
            <Form.Item
              wrapperCol={{
                offset: 15,
                span: 16,
              }}
            >
              <Link to="/shop/danhSach_LoaiSanPham">
                <Button
                  type="primary"
                  htmlType="reset"
                  style={{
                    margin: 10,
                    width: 190,
                    backgroundColor: "#DCDFE8",
                    borderColor: "#DCDFE8",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      fontWeight: "400",
                      color: "#000000",
                      marginTop: -2,
                    }}
                  >
                    Quay lại
                  </p>
                </Button>
              </Link>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  margin: 10,
                  width: 190,
                  backgroundColor: "#87CEEB99",
                  borderColor: "#87CEEB99",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: "400",
                    color: "#000000",
                    marginTop: -2,
                  }}
                >
                  Sửa thể loại
                </p>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </>
    )
  );
}

export default FromUpdateTypeProduct;
