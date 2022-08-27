import { Form, Image } from "antd";
import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { LOCALHOST, URL_GET_ALL_PRODUCT } from "../../../API/ALLAPI";
import CarouselBanner from "../../../Components/products/CarouselBanner";

const InforProduct = () => {
  const { id } = useParams();
  const [dataInfor, setDataInfor] = useState();
  const [image, setImage] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_PRODUCT}`)
      .then((res) => res.json())
      .then((data) => {
        const newData = data.result.find((item) => item._id == id);
        setDataInfor(newData);
      });
  }, []);

  useMemo(() => {});
  const sale = dataInfor?.priceSale;
  const prices = dataInfor?.price
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  const pricesbuy = dataInfor?.priceSale
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return (
    <>
      <CarouselBanner />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "stretch",
          justifyContent: "center",
          backgroundColor: "#fff",
        }}
      >
        <div>
          {dataInfor?.imageProduct?.map((item) => {
            return (
              <div onClick={() => setImage(item)} style={{ margin: 20 }}>
                <img src={item} style={{ width: 45 }} />
              </div>
            );
          })}
        </div>
        {image !== undefined ? (
          <div>
            <img style={{ width: 300, margin: 20 }} src={image} alt="" />
          </div>
        ) : (
          <div>
            <img
              style={{ width: 300, margin: 20 }}
              src={dataInfor?.imageProduct[0]}
              alt=""
            />
          </div>
        )}
        <div style={{ margin: 20, textAlign: "left" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* tên */}
            <p style={{ fontSize: 18, color: "#000", fontWeight: "bold" }}>
              Tên sản phẩm :
            </p>
            <p
              style={{
                fontSize: 18,
                color: "#222",
                marginLeft: 10,
                fontStyle: "italic",
              }}
            >
              {dataInfor?.titleProduct}
            </p>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: -20 }}
          >
            {/* mã số */}
            <p
              style={{
                fontSize: 16,
                color: "#222",
                marginLeft: 5,
                fontStyle: "italic",
              }}
            >
              FSH:
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#222",
                marginLeft: 5,
                fontStyle: "italic",
              }}
            >
              {dataInfor?.code}
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: -20,
            }}
          >
            {/* Đơn giá */}
            <p
              style={{
                fontSize: 16,
                color: "#A9A9A9",
                fontWeight: "bold",
                textDecorationLine: "line-through",
              }}
            >
              {prices}vnđ
            </p>
            {/* Giá bán */}
            <p
              style={{
                fontSize: 18,
                color: "#000",
                fontWeight: "bold",
                marginLeft: 10,
              }}
            >
              {pricesbuy}vnđ
            </p>
          </div>
          <hr style={{ border: "1px dashed #A9A9A9" }} />
          {/* Màu */}
          <p
            style={{
              fontSize: 18,
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Màu sắc:
          </p>
          <div style={{ height: 40, display: "flex", marginTop: -20 }}>
            {dataInfor?.color_product?.map((item) => {
              return (
                <div
                  style={{
                    backgroundColor: item,
                    width: 30,
                    height: 30,
                    border: "1px solid black",
                    borderRadius: 20,
                    margin: 2,
                  }}
                />
              );
            })}
          </div>
          {/* Size */}
          <p
            style={{
              fontSize: 18,
              color: "#000",
              fontWeight: "bold",
            }}
          >
            Kích cỡ :
          </p>
          <div style={{ height: 30, display: "flex", alignItems: "center" }}>
            {console.log(dataInfor?.size_product)}
            {dataInfor?.size_product?.map((item) => {
              return (
                <div
                  style={{
                    border: "1px solid #A9A9A9 ",
                    marginRight: 5,
                    borderRadius: 3,
                    height: 30,
                    width: 40,
                    textAlign: "center",
                    marginTop: -10,
                  }}
                >
                  <p
                    style={{
                      fontSize: 16,
                      color: "#222",
                      fontStyle: "italic",
                    }}
                  >
                    {item}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Số lượng */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Số lượng:
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#222",
                fontStyle: "bold",
                marginLeft: 5,
              }}
            >
              {dataInfor?.quantity_product}
            </p>
          </div>

          {/* Miêu tả sản phẩm */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Miêu tả sản phẩm:
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#222",
                fontStyle: "italic",
                marginLeft: 5,
              }}
              dangerouslySetInnerHTML={{
                __html: dataInfor?.descriptionProduct,
              }}
            ></p>
          </div>

          {/* Chất liệu */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Chất liệu sản phẩm:
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#222",
                fontStyle: "italic",
                marginLeft: 5,
              }}
            >
              {dataInfor?.material_product}
            </p>
          </div>

          {/* Thương hiệu */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Thương hiệu:
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#000",
                fontStyle: "italic",
                marginLeft: 5,
              }}
            >
              {dataInfor?.trademark}
            </p>
          </div>

          {/* Thể loại */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                color: "#000",
                fontWeight: "bold",
              }}
            >
              Loại sản phẩm:
            </p>
            <p
              style={{
                fontSize: 16,
                color: "#000",
                fontStyle: "italic",
                marginLeft: 5,
              }}
            >
              {dataInfor?.idCategoryProduct}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InforProduct;
