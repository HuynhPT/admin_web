import { Button, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import "../../../Components/products//FromProduct.css";
import SelectOptionColor from "../../../Components/products/SelectOptionColor";
import SelectOptionTypeProduct from "../../../Components/products/SelectOptionTypeProduct";
import SelectOtionSze from "../../../Components/products/SelectOptionSze";
import TinymceProduct from "../../../Components/products/TinymceProduct";
import { getColor, getSize, getTheloai } from "../../../API/ColorSize";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

import { useDispatch } from "react-redux";
import { borderRadius } from "@mui/system";
import { mToken } from "../../../../token/TokenLogin";
import {
  LOCALHOST,
  URL_GET_ALL_PRODUCT,
  URL_UPDATE_ID_PRODUCT,
} from "../../../API/ALLAPI";
function EditProduct(props) {
  //khai báo state
  const [nameLinkImage, setNameLinkImage] = useState([]);

  const [nameImage, setNameImage] = useState([]);

  const [valueTensp, setValueTenSP] = useState();

  const [valueThuonghieu, setValueThuonghieu] = useState();

  const [valueMaso, setValueMaso] = useState();

  const [valueChatlieu, setValueChatlieu] = useState();

  const [valueGiaban, setValueGiaban] = useState();

  const [valueDongia, setValueDongia] = useState();

  const [valueSale, setValueSale] = useState();

  const [valueMota, setValueMota] = useState();

  const [valueSoluong, setValueSoluong] = useState();

  const [dataSize, setDatasize] = useState();
  const [dataValueSize, setDatavaluesize] = useState();

  const [dataColor, setDataColor] = useState();
  const [dataValueColor, setDataValueColor] = useState();

  const [dataType, setDatatype] = useState();
  const [dataValueType, setDataValuetype] = useState();

  const { id } = useParams();
  const [dataEdit, setDataEdit] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_PRODUCT}`)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.result.find((item) => item._id == id);
        setDataEdit(newData);
      });
  }, []);

  const dispatch = useDispatch();

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
  // datatheloai
  useEffect(() => {
    const listcolor = async () => {
      const { data: dataType } = await getTheloai();
      const dataNewtype = [];
      dataType.data.map((item) => {
        dataNewtype.push({ value: item._id, label: item.titleCategoryProduct });
      });
      setDatatype(dataNewtype);
    };
    listcolor();
  }, []);

  const handleChangetype = (value) => {
    setDataValuetype(value);
  };
  const onHandleChnageSubmit = async () => {
    const fromdata = new FormData();
    fromdata.append(
      "titleProduct",
      valueTensp == undefined ? dataEdit?.titleProduct : valueTensp
    );
    fromdata.append(
      "trademark",
      valueThuonghieu == undefined ? dataEdit?.trademark : valueThuonghieu
    );
    fromdata.append(
      "descriptionProduct",
      valueMota == undefined ? dataEdit?.descriptionProduct : valueMota
    );
    fromdata.append("code", valueMaso == undefined ? dataEdit.code : valueMaso);
    fromdata.append(
      "importPrice",
      valueDongia == undefined ? dataEdit?.importPrice : Number(valueDongia)
    );
    fromdata.append(
      "price",
      valueGiaban == undefined ? dataEdit?.price : Number(valueGiaban)
    );
    fromdata.append(
      "material_product",
      valueChatlieu == undefined ? dataEdit?.material_product : valueChatlieu
    );
    for (let i = 0; i < nameLinkImage.length; i++) {
      fromdata.append(
        "croppedImage",
        nameLinkImage[i] == undefined
          ? dataEdit?.imageProductmap
          : nameLinkImage[i]
      );
    }
    for (let i = 0; i < dataValueSize?.length; i++) {
      console.log(`size_product[${i}]`, dataValueSize[i]);
      fromdata.append(
        `size_product[${i}]`,
        dataValueSize[i] == undefined
          ? dataEdit?.size_product
          : dataValueSize[i]
      );
    }
    for (let i = 0; i < dataValueColor?.length; i++) {
      console.log(`color_product[${i}]`, dataValueColor[i]);
      fromdata.append(
        `color_product[${i}]`,
        dataValueColor[i] == undefined
          ? dataEdit?.color_product
          : dataValueColor[i]
      );
    }
    fromdata.append(
      "idCategoryProduct",
      dataValueType == undefined ? dataEdit?.idCategoryProduct : dataValueType
    );
    fromdata.append("mIdProduct", dataEdit._id);
    await axios({
      url: `${LOCALHOST}` + `${URL_UPDATE_ID_PRODUCT}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "multipart/form-data",
      },
      data: fromdata,
    }).then(
      async (res) => {
        if (res.data.code === 200) {
          message.success({
            content: "Sửa thành công",
            style: { color: "green" },
          });
        } else {
          message.error({
            content: "Sửa thất bại",
            style: { color: "red" },
          });
        }
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
  };
  console.log(dataEdit?.imageProduct.map((item) => item.slice(68)));

  return (
    <div className="_Mcontainer_Fro">
      <div className="_Mcontainer_Frompr">
        <h3 className="_title_addproduct">Sửa sản phẩm</h3>
        <hr />
        {/* hàng 1 */}
        <div className="_inputrow1From">
          {/* tênSP */}
          <div className="_nameInputrow1">
            <p className="_text_product">Tên sản phẩm*</p>
            <Input
              placeholder="Tên sản phẩm"
              onChange={(e) => setValueTenSP(e.target.value)}
              required={true}
              value={
                valueTensp == undefined ? dataEdit?.titleProduct : valueTensp
              }
            />
          </div>
          {/* nhãn hiệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Thương hiệu*</p>
            <Input
              placeholder="Nhãn hiệu sản phẩm"
              onChange={(e) => setValueThuonghieu(e.target.value)}
              value={
                valueThuonghieu == undefined
                  ? dataEdit?.trademark
                  : valueThuonghieu
              }
            />
          </div>
        </div>
        {/* hàng 2 */}
        <div className="_inputrow1From">
          {/* mã số */}
          <div className="_nameInputrow1">
            <p className="_text_product">Mã số*</p>
            <Input
              placeholder="Mã số"
              onChange={(e) => setValueMaso(e.target.value)}
              value={valueMaso == undefined ? dataEdit?.code : valueMaso}
            />
          </div>
          {/* chất liệu */}
          <div className="_nameInputrow1">
            <p className="_text_product">Chất liệu*</p>
            <Input
              placeholder="Chất liệu"
              onChange={(e) => setValueChatlieu(e.target.value)}
              value={
                valueChatlieu == undefined
                  ? dataEdit?.material_product
                  : valueChatlieu
              }
            />
          </div>
        </div>

        {/* Hàng 3 */}
        <div className="_inputrow4From">
          {/* thể loại */}
          <div className="_nameInpu">
            <p className="_text_product">Thể loại*</p>
            <SelectOptionTypeProduct
              options={dataType}
              onChange={handleChangetype}
              value={
                dataValueType == undefined
                  ? dataEdit?.idCategoryProduct
                  : dataValueType
              }
            />
          </div>
          {/* Chọn size*/}
          <div className="_nameInputrow4">
            <p className="_text_product">Size*</p>
            <SelectOtionSze
              dataSize={dataSize}
              onChange={onChangeSize}
              value={
                dataValueSize == undefined
                  ? dataEdit?.size_product?.map((item) => item)
                  : dataValueSize
              }
            />
          </div>
          {/* Chọn màu */}
          <div className="_nameInputrow4">
            <p className="_text_product">Màu*</p>
            <SelectOptionColor
              dataColor={dataColor}
              onChange={handleChangeColor}
              value={
                dataValueColor == undefined
                  ? dataEdit?.color_product?.map((item) => item)
                  : dataValueColor
              }
            />
          </div>
          {/* số lượng */}
          {/* <div className="_nameInputrow4">
            <p className="_text_product">Số lượng*</p>
            <Input
              placeholder="Số lượng"
              onChange={(e) => setValueSoluong(e.target.value)}
              value={
                valueSoluong == undefined
                  ? dataEdit?.quantity_product
                  : valueSoluong
              }
            />
          </div> */}
        </div>
        {/* Hàng 4 */}
        <div className="_inputrow5Fromed">
          {/* UP ảnh*/}
          <div className="_nameInputrow">
            <p className="_text_product">Chọn ảnh*</p>
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
            {dataEdit?.imageProduct?.map((item) => {
              return (
                <>
                  <img src={item} style={{ width: 30, margin: 10 }} />
                </>
              );
            })}
            <br />
            <label htmlFor="images">
              <div
                style={{
                  border: "1px solid #DCDFE8",
                  height: 30,
                  textAlign: "center",
                }}
              >
                Chọn ảnh
              </div>
            </label>
            <input
              id="images"
              type="file"
              style={{ display: "none", width: "70%" }}
              onChange={(e) => upImage(e)}
            />
          </div>
          {/* Đơn giá */}
          <div className="_nameInputrow4">
            <p className="_text_product">Đơn giá*</p>
            <Input
              placeholder="Đơn giá"
              onChange={(e) => setValueDongia(e.target.value)}
              value={
                valueDongia == undefined ? dataEdit?.importPrice : valueDongia
              }
            />
          </div>
          {/* giá bán */}
          <div className="_nameInputrow4">
            <p className="_text_product">Giá bán*</p>
            <Input
              placeholder="Giá bán"
              onChange={(e) => setValueGiaban(e.target.value)}
              value={valueGiaban == undefined ? dataEdit?.price : valueGiaban}
            />
          </div>
        </div>
        {/* Hàng 5 */}
        <div className="_inputrow3From">
          {/* mô tả */}
          <div className="_nameInputrow2ed">
            <p className="_text_product">Mô tả sản phẩm*</p>
            <TinymceProduct
              onChangeText={(e) => setValueMota(e)}
              initialValue={
                valueMota == undefined
                  ? dataEdit?.descriptionProduct
                  : valueMota
              }
            />
          </div>
        </div>
        {/* Nút ấn bắt sự kiện */}
        <div className="_buttonClick_Product">
          <Link to={"/shop/danhSach_sanPham"} style={{ margin: "0 100px 0 0" }}>
            <Button
              style={{
                width: "100%",
                margin: "0 30px 0 80px",
                borderRadius: 3,
                backgroundColor: "#dcdfe8",
              }}
            >
              <p className="_Title_button_product">Quay lại</p>
            </Button>
          </Link>

          <Button
            className="__buttonClick_Product_add"
            onClick={onHandleChnageSubmit}
          >
            <p className="_Title_button_product">Sửa sản phẩm</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
