import {
  AutoComplete,
  Button,
  Image,
  message,
  Modal,
  Popconfirm,
  Select,
  Switch,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";
import { getAll } from "../../../API/ProductAPI";
import { ReloadOutlined } from "@ant-design/icons";
import SelectFilter from "../../../Components/type/SelectFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  delAllProduct,
  delProduct,
  filterProduct,
  getHightProduct,
  getLowProduct,
  getNewProduct,
  getOldProduct,
  getProduct,
  searchProduct,
  StatusProduct,
} from "../../../Redux/ProductSlice";
import { LOCALHOST, URL_GET_ALL_TYPE } from "../../../API/ALLAPI";
const ScreenListProduct = () => {
  const { Option } = Select;

  const [isModalDelALl, setisModalDelALl] = useState();
  const [data, setData] = useState();
  const [dataLable, setDataLable] = useState("Lọc");
  const [switchs, setSwitchs] = useState();
  const dispatch = useDispatch();
  const dataProduct = useSelector((data) => data.product.value);
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_TYPE}`)
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.data.map((item) => {
          otpn.push({ label: item.titleCategoryProduct, value: item._id });
        });
        setData(otpn);
      });
  }, []);
  useEffect(() => {
    if (dataProduct?.map((item) => item?.statust_product == 0)) {
      setSwitchs(true);
    } else {
      setSwitchs(false);
    }
    console.log(switchs);
  }, []);
  const handleChangefiter = (values) => {
    setDataLable(values);
    dispatch(filterProduct({ titleCategoryProduct: values }));
    console.log(`Select ${values}`);
  };
  const handleChange = (value) => {
    if (value == "new") {
      dispatch(getNewProduct());
    } else if (value == "old") {
      dispatch(getOldProduct());
    } else if (value == "hight") {
      dispatch(getHightProduct());
    } else {
      dispatch(getLowProduct());
    }
  };

  const handleXoa = () => {
    dispatch(delAllProduct());
    setisModalDelALl(false);
    message.success({
      content: "Xoá thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      duration: 2,
    });
  };
  const handleHuy = () => {
    setisModalDelALl(false);
  };

  // Thực hiện tìm kiếm
  const onsearchtype = (value) => {
    setTimeout(() => {
      dispatch(searchProduct({ titleProduct: value }));
    }, 1000);
  };
  const deletee = (id) => {
    dispatch(
      delProduct({
        mIdProduct: id,
      })
    );
    message.success({
      content: "Xoá thành công",
      style: { color: "green" },
    });
  };

  const onChange = (checked, id) => {
    if (checked === true) {
      dispatch(
        StatusProduct({
          idProduct: id,
          statust_product: 0,
        })
      );
    } else {
      dispatch(
        StatusProduct({
          idProduct: id,
          statust_product: 1,
        })
      );
    }
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "_id",
      render: (_id, data, index) => index + 1,
    },

    {
      title: "Mã code",
      dataIndex: "code",
    },
    {
      title: "Ảnh",
      dataIndex: "imageProduct",
      render: (imageProduct) => {
        return <Image src={imageProduct[0]} alt="" style={{ width: 50 }} />;
      },
    },
    {
      title: "Tên",
      dataIndex: "titleProduct",
      width: 180,
    },

    {
      title: "Size",
      dataIndex: "size_product",
      render: (size_product) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {size_product.map((item) => {
            return <p style={{ marginRight: 10, marginTop: 10 }}> {item}</p>;
          })}
        </div>
      ),
    },
    {
      title: "Color",
      dataIndex: "color_product",
      render: (color_product) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {color_product.map((item) => {
            return (
              <div
                style={{
                  backgroundColor: item,
                  width: 20,
                  height: 20,
                  border: "1px solid black",
                  marginRight: 5,
                }}
              ></div>
            );
          })}
        </div>
      ),
    },

    {
      title: "Đơn giá",
      dataIndex: "importPrice",
      render: (importPrice) => (
        <p style={{ marginTop: 5 }}>
          {importPrice.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}đ
        </p>
      ),
    },
    {
      title: "Giá bán",
      dataIndex: "price",
      render: (price) => (
        <p style={{ marginTop: 5 }}>
          {price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}đ
        </p>
      ),
    },
    {
      title: "Trạng thái",
      dataIndex: "statust_product",
      render: (statust_product, data) => {
        if (statust_product == 1) {
          return (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: -20,
              }}
            >
              <Switch
                // checkedChildren={"0"}
                // unCheckedChildren={"1"}
                size="small"
                checked={statust_product == 0 ? true : false}
                // defaultChecked={switchs}
                onChange={(e) => onChange(e, data._id)}
              />
              <p
                style={{
                  color: "#FF0000",
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Hết hàng
              </p>
            </div>
          );
        } else {
          return (
            <div
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: -20,
              }}
            >
              <Switch
                // checkedChildren={"0"}
                // unCheckedChildren={"1"}
                size="small"
                checked={statust_product == 0 ? true : false}
                onChange={(e) => onChange(e, data._id)}
              />
              <p
                style={{
                  color: "#00FF00",
                  fontWeight: "600",
                  fontStyle: "italic",
                }}
              >
                Còn hàng
              </p>
            </div>
          );
        }
      },
    },
    {
      title: "Hoạt động",
      dataIndex: "_id",
      render: (_id) => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
            marginTop: 5,
          }}
        >
          <Link to={`/edit_product/${_id}`}>
            <p style={{ color: "blue" }} size={24}>
              Sửa
            </p>
          </Link>
          <Popconfirm
            title="Bạn có chắc chắn muốn xoá không?"
            onConfirm={() => deletee(_id)}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <p
              style={{ width: 50, cursor: "pointer", color: "blue" }}
              size={24}
            >
              Xoá
            </p>
          </Popconfirm>
          <Link to={`/infor_product/${_id}`}>
            <p style={{ width: 50, color: "blue" }} size={24}>
              Chi tiết
            </p>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb" style={{fontFamily:'initial'}}>Danh sách sản phẩm </p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách sản phẩm được quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
      </div>
      <div
        className="button-list"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", width: "35%" }}>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 30px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={() => {
              dispatch(getProduct());
              // setSearchtitle("");
            }}
          >
            <ReloadOutlined />
          </Button>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 5px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={showmodaldell}
          >
            <p style={{ color: "#000" }}>Xoá tất cả</p>
          </Button>
          <div style={{ width: "50%", margin: "0 0 0 5px" }}>
            <Select
              defaultValue={"old"}
              style={{
                width: "100%",
                backgroundColor: "#D9D9D9",
                border: "1px solid #D9D9D9 ",
              }}
              onChange={handleChange}
            >
              <Option value="new">Mới nhất theo ngày</Option>
              <Option value="old">Cũ nhất theo ngày</Option>
              <Option value="hight">Giá từ cao xuống thấp</Option>
              <Option value="low">Giá từ thấp đến cao</Option>
            </Select>
          </div>
          <div style={{ width: "50%", margin: "0 0 0 5px" }}>
            <SelectFilter
              options={data}
              onChange={handleChangefiter}
              value={dataLable}
            />
          </div>
        </div>
        <AutoComplete className="search_prd" style={{}} onSearch={onsearchtype}>
          <Search
            type="text"
            placeholder="Tìm kiếm sản phẩm"
            // style={{ marginLeft: 30 }}
          />
        </AutoComplete>
      </div>
      <Table
        // scroll={{ x: 1000 }}
        columns={columns}
        dataSource={dataProduct}
        rowKey={(item) => item?._id}
        className="table-list"
        // style={{ width: "100%" }}
      />
      <Modal title="Cảnh báo !" visible={isModalDelALl} footer={null}>
        <p>Bạn có chắc chắn muốn xoá hay không?</p>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              backgroundColor: "#fff",
              border: "1px solid #000",
              margin: 10,
              padding: " 8px 16px",
              borderRadius: 3,
            }}
            onClick={handleHuy}
          >
            Huỷ
          </button>
          <button
            style={{
              backgroundColor: "red",
              border: "1px solid #000",
              margin: 10,
              padding: " 8px 16px",
              color: "#fff",
              borderRadius: 3,
            }}
            onClick={handleXoa}
          >
            Xoá
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ScreenListProduct;
