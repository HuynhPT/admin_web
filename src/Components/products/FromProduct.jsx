import { Button, Form, Input, message, Modal } from "antd";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import "./FromProduct.css";
import SelectMenWomen from "./SelectMenWomen";
import SelectOptionColor from "./SelectOptionColor";
import SelectOptionTypeProduct from "./SelectOptionTypeProduct";
import SelectOtionSze from "./SelectOptionSze";
import TinymceProduct from "./TinymceProduct";
import SelectOptionOpject from "./SelectOptionOpject";
import { getColor, getSize, getTheloai } from "../../API/ColorSize";
import { addAll } from "../../API/ProductAPI";
import { mToken } from "../../../token/TokenLogin";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import {
  getOpjectCategori,
  searchopjectCategori,
} from "../../Redux/OjectCategoriSlice";
import { LOCALHOST, URL_POST_PRODUCT } from "../../API/ALLAPI";
function FromProduct(props) {
  const [nameLinkImage, setNameLinkImage] = useState([]);

  const [nameImage, setNameImage] = useState([]);

  const [valueTensp, setValueTenSP] = useState();

  const [valueThuonghieu, setValueThuonghieu] = useState();

  const [valueMaso, setValueMaso] = useState();

  const [valueChatlieu, setValueChatlieu] = useState();

  const [valueGiaban, setValueGiaban] = useState();

  const [valueDongia, setValueDongia] = useState();

  const [valueSale, setValueSale] = useState("");

  const [valueMota, setValueMota] = useState();

  const [valueSoluong, setValueSoluong] = useState();

  const [dataSize, setDatasize] = useState();
  const [dataValueSize, setDatavaluesize] = useState();

  const [dataColor, setDataColor] = useState();
  const [dataValueColor, setDataValueColor] = useState();

  const [dataType, setDatatype] = useState();
  const [dataValueType, setDataValuetype] = useState();
  const dispatch = useDispatch();
  const typleProduct = useSelector((data) => data.categoris.value);
  const handleResert = () => {
    setNameLinkImage([]);
    setNameImage([]);
    setValueTenSP(null);
    setValueThuonghieu(null);
    setValueMaso(null);
    setValueChatlieu(null);
    setValueChatlieu(null);
    setValueChatlieu(null);
    setValueGiaban(null);
    setValueDongia(null);
    setValueSale(null);
    setValueMota(null);
    setValueSoluong(null);
    setDatavaluesize(null);
    setDataValueColor(null);
    setDataValuetype(null);
  };
  // lấy ảnh
  const upImage = (e) => {
    const namePhoto = document.getElementById("images").files[0].name;
    const namePhotoLink = document.getElementById("images").files[0];
    if (nameImage.length > 0) {
      setNameImage([...nameImage, namePhoto]);
    } else {
      setNameImage([namePhoto]);
    }
    if (nameLinkImage.length == 0) {
      setNameLinkImage([namePhotoLink]);
    } else if (nameLinkImage.length > 0) {
      setNameLinkImage([...nameLinkImage, namePhotoLink]);
    }
  };

  // lấy data size
  useEffect(() => {
    const list = async () => {
      const { data: dataSize } = await getSize();
      const dataNew = [];
      dataSize.result.map((item) => {
        dataNew.push({
          value: item.titleSize,
        });
      });
      setDatasize(dataNew);
    };
    list();
  }, []);
  const onChangeSize = (value) => {
    setDatavaluesize(value);
  };

  // lấy data color
  useEffect(() => {
    const listcolor = async () => {
      const { data: dataColor } = await getColor();
      const dataNewColor = [];
      dataColor.result.map((item) => {
        dataNewColor.push({ value: item.colorCode, label: item.titleColors });
      });
      setDataColor(dataNewColor);
    };
    listcolor();
  }, []);

  const handleChangeColor = (value) => {
    setDataValueColor(value);
  };
  useEffect(() => {
    dispatch(getOpjectCategori());
  }, []);
  // datatheloai
  useEffect(() => {
    const dataNewtype = [];
    typleProduct.map((item) => {
      dataNewtype.push({ value: item._id, label: item.titleCategoryProduct });
    });
    setDatatype(dataNewtype);
  }, []);
  const handleChangetype = (value,label) => {
    console.log(label)
    setDataValuetype(value);
  };
  // const OnSearch = (value) => {
  //   setTimeout(() => {
  //     dispatch(searchopjectCategori({ titleCategoryProduct: value }));
  //     const dataNewtype = [];
  //     typleProduct.map((item) => {
  //       dataNewtype.push({ value: item._id, label: item.titleCategoryProduct });
  //     });
  //     setDatatype(dataNewtype);
  //   }, 1000);
  // };
  const onHandleChnageSubmit = async () => {
    const fromdata = new FormData();
    fromdata.append("titleProduct", valueTensp);
    fromdata.append("trademark", valueThuonghieu);
    fromdata.append("descriptionProduct", valueMota);
    fromdata.append("code", valueMaso);
    // fromdata.append("flashSale", valueSale);
    fromdata.append("importPrice", Number(valueDongia));
    fromdata.append("price", Number(valueGiaban));
    // fromdata.append("quantity_product", Number(valueSoluong));
    fromdata.append("material_product", valueChatlieu);
    for (let i = 0; i < nameLinkImage.length; i++) {
      fromdata.append("croppedImage", nameLinkImage[i]);
    }
    for (let i = 0; i < dataValueSize.length; i++) {
      console.log(`size_product[${i}]`, dataValueSize[i]);
      fromdata.append(`size_product[${i}]`, dataValueSize[i]);
    }
    for (let i = 0; i < dataValueColor.length; i++) {
      console.log(`color_product[${i}]`, dataValueColor[i]);
      fromdata.append(`color_product[${i}]`, dataValueColor[i]);
    }
    fromdata.append("idCategoryProduct", dataValueType);
    axios({
      url: `${LOCALHOST}` + `${URL_POST_PRODUCT}`,
      method: "POST",
      headers: {
        token: mToken,
        "Content-Type": "multipart/form-data",
      },
      data: fromdata,
    }).then(
      (res) => {
        if (res.data.code === 200) {
          message.success({
            content: "Thêm sản phẩm thành công",
            style: { color: "green" },
          });
        } else {
          message.error({
            content: "Thêm sản phẩm thất bại",
            style: { color: "red" },
          });
        }
        console.log(res);
      },
      (err) => {
        console.log(err.response);
      }
    );
    setNameLinkImage([]);
    setNameImage([]);
    setValueTenSP(null);
    setValueThuonghieu(null);
    setValueMaso(null);
    setValueChatlieu(null);
    setValueChatlieu(null);
    setValueChatlieu(null);
    setValueGiaban(null);
    setValueDongia(null);
    setValueSale(null);
    setValueMota(null);
    setValueSoluong(null);
    setDatavaluesize(null);
    setDataValueColor(null);
    setDataValuetype(null);
  };
  return (
    <Form onFinish={onHandleChnageSubmit}>
      <div className="_Mcontainer_Fro">
        <div className="_Mcontainer_Frompr">
          <h3 className="_title_addproduct">Thêm sản phẩm</h3>
          <hr />

          <div className="_inputrow1From">
            {/* tênSP */}
            <div className="_nameInputrow1">
              <p className="_text_product">Tên sản phẩm *</p>
              <Form.Item
                name="titleTypeProduct"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên sản phẩm!",
                  },
                ]}
              >
                <Input
                  name="titleTypeProduct"
                  placeholder="Tên sản phẩm"
                  onChange={(e) => setValueTenSP(e.target.value)}
                  value={valueTensp}
                />
              </Form.Item>
            </div>
            {/* nhãn hiệu */}
            <div className="_nameInputrow1">
              <p className="_text_product">Thương hiệu *</p>
              <Form.Item
                name="nhanhieu"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập nhãn hiệu!",
                  },
                ]}
              >
                <Input
                  name="nhanhieu"
                  placeholder="Nhãn hiệu sản phẩm"
                  onChange={(e) => setValueThuonghieu(e.target.value)}
                  value={valueThuonghieu}
                />
              </Form.Item>
            </div>
          </div>
          {/* hàng 2 */}
          <div className="_inputrow1From">
            {/* mã số */}
            <div className="_nameInputrow1">
              <p className="_text_product">Mã số *</p>
              <Form.Item
                name="maso"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập mã số!",
                  },
                  // {
                  //   pattern: /^[0-9]*$/,
                  //   message: "Mã số yêu cầu phải nhập số ",
                  // },
                ]}
              >
                <Input
                  name="maso"
                  placeholder="Mã số"
                  onChange={(e) => setValueMaso(e.target.value)}
                  value={valueMaso}
                />
              </Form.Item>
            </div>
            {/* chất liệu */}
            <div className="_nameInputrow1">
              <p className="_text_product">Chất liệu *</p>
              <Form.Item
                name="chatlieu"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập Chất liệu!",
                  },
                ]}
              >
                <Input
                  name="chatlieu"
                  placeholder="Chất liệu"
                  onChange={(e) => setValueChatlieu(e.target.value)}
                  value={valueChatlieu}
                />
              </Form.Item>
            </div>
          </div>

          {/* Hàng 3 */}
          <div className="_inputrow4From">
            {/* thể loại */}
            <div className="_nameInpu">
              <p className="_text_product">Thể loại *</p>
              <Form.Item
                name="theloai"
                rules={[{ required: true, message: "Vui lòng chọn thể loại!" }]}
              >
                <SelectOptionTypeProduct
                  placeholder={"Chọn thể loại"}
                  name="theloai"
                  options={dataType}
                  onChange={handleChangetype}
                  value={dataValueType}
                />
              </Form.Item>
            </div>
            {/* Chọn size*/}
            <div className="_nameInputrow4">
              <p className="_text_product">Size *</p>
              <Form.Item
                name="Size"
                rules={[{ required: true, message: "Mời chọn size!" }]}
              >
                <SelectOtionSze
                  placeholder={"Chọn size"}
                  name="Size"
                  dataSize={dataSize}
                  onChange={onChangeSize}
                  value={dataValueSize}
                />
              </Form.Item>
            </div>
            {/* Chọn màu */}
            <div className="_nameInputrow4">
              <p className="_text_product">Màu *</p>
              <Form.Item
                name="color"
                rules={[{ required: true, message: "Vui lòng chọn màu!" }]}
              >
                <SelectOptionColor
                  placeholder={"Chọn màu"}
                  name="color"
                  dataColor={dataColor}
                  onChange={handleChangeColor}
                  value={dataValueColor}
                />
              </Form.Item>
            </div>
          </div>
        </div>
        {/* Hàng 4 */}
        <div className="_inputrow5From">
          {/* UP ảnh*/}
          <div className="_nameInputrow">
            <p className="_text_product">Chọn ảnh *</p>
            {nameImage.length == 0 ? (
              <span>{nameImage}</span>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {nameImage.map((item) => (
                    <>
                      <span>{item}</span>
                      <br />
                    </>
                  ))}
                </div>

                <div>
                  <Button
                    onClick={() => setNameImage([])}
                    style={{
                      marginTop: 85,
                      height: 20,
                      borderRadius: 3,
                    }}
                  >
                    <p style={{ marginTop: -8 }}>Huỷ</p>
                  </Button>
                </div>
              </div>
            )}
            <br />
            <label htmlFor="images">
              <div
                style={{
                  border: "1px solid #DCDFE8",
                  marginTop: -20,
                  height: 30,
                  textAlign: "center",
                }}
              >
                Chọn ảnh
              </div>
            </label>
            <Form.Item
              name="image"
              rules={[{ required: true, message: "Vui lòng chọn ảnh!" }]}
              // style={{ marginTop: -25 }}
            >
              <input
                name="image"
                id="images"
                type="file"
                style={{ display: "none", width: "100%" }}
                onChange={(e) => upImage(e)}
              />
            </Form.Item>
          </div>
          {/* Đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Đơn giá *</p>
            <Form.Item
              name="dongia"
              rules={[
                { required: true, message: "Vui lòng nhập đơn giá!" },
                { pattern: /^[0-9]*$/, message: "Đơn giá yêu cầu nhập số!" },
              ]}
            >
              <Input
                name="dongia"
                placeholder="Đơn giá"
                onChange={(e) => setValueDongia(e.target.value)}
                value={valueDongia}
              />
            </Form.Item>
          </div>

          {/* giá bán */}
          <div className="_nameInputrow4">
            <p className="_text_product">Giá bán *</p>
            <Form.Item
              name="giaban"
              rules={[
                { required: true, message: "Vui lòng nhập đơn giá!" },
                { pattern: /^[0-9]*$/, message: "Đơn giá yêu cầu nhập số!" },
              ]}
            >
              <Input
                name="giaban"
                placeholder="Giá bán"
                onChange={(e) => setValueGiaban(e.target.value)}
                value={valueGiaban}
              />
            </Form.Item>
          </div>
        </div>

        {/* mô tả */}
        <div className="_nameInputrow2">
          <p className="_text_product">Mô tả sản phẩm</p>
          <Form.Item>
            <div style={{ display: "inline" }}>
              <Editor
                apiKey="f5r9v2m5jorsgp469noiiqpd10fc7xhmn3th5897ghxcpank"
                onEditorChange={(e) => setValueMota(e)}
                value={valueMota}
                init={{
                  height: 400,
                  menubar: false,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}
              />
            </div>
          </Form.Item>
        </div>

        {/* Nút ấn bắt sự kiện */}
        <div className="_buttonClick_Product">
          <Button
            className="__buttonClick_Product_Res"
            onClick={handleResert}
            htmlType="reset"
          >
            <p className="_Title_button_product_r">Đặt lại</p>
          </Button>

          <Button className="__buttonClick_Product_add" htmlType="submit">
            <p className="_Title_button_product">Thêm sản phẩm</p>
          </Button>
        </div>
      </div>
    </Form>
  );
}

export default FromProduct;
