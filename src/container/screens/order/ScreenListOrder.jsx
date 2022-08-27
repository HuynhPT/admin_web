import {
  AutoComplete,
  Button,
  DatePicker,
  Input,
  Modal,
  Popconfirm,
  Select,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import "../profit/Listproduct.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Search from "antd/lib/input/Search";
import {
  delAllBill,
  FilterIdus,
  getBillOderNew,
  getBillOderOld,
  getBillProduct,
  get_bill_status_0,
  get_bill_status_1,
  get_bill_status_2,
  get_bill_status_3,
  removeBillOder,
  searchBillDate,
  searchBillPhone,
} from "../../../Redux/BillSlice";
import { ReloadOutlined } from "@ant-design/icons";
import SelectFilter from "../../../Components/type/SelectFilter";
import axios from "axios";
import { mToken } from "../../../../token/TokenLogin";
import { LOCALHOST, URL_GET_ALL_USER } from "../../../API/ALLAPI";
import DateSelect from "../../../Components/overview/DateSelect";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";
const ScreenListOrder = () => {
  const [data, setData] = useState();
  const [isModalDelALl, setisModalDelALl] = useState();
  const [dataLable, setDataLable] = useState("Đơn hàng theo người dùng");

  const [startDate, setStartDate] = useState();

  const dispatch = useDispatch();
  const billdata = useSelector((data) => data.bills.value);
  const { Option } = Select;
  useEffect(() => {
    dispatch(getBillProduct());
  }, []);

  useEffect(() => {
    axios({
      url: `${LOCALHOST}` + `${URL_GET_ALL_USER}`,
      method: "GET",
      headers: {
        token: mToken,
      },
    }).then((dataOp) => {
      const otpn = [];
      dataOp.data.result.map((item) => {
        otpn.push({ label: item.name, value: item._id });
      });
      setData(otpn);
    });
  }, []);

  const handleChangefilter = (value) => {
    if (value == "new") {
      dispatch(getBillOderNew());
    } else {
      dispatch(getBillOderOld());
    }
  };
  const handleChangestatus = (value) => {
    if (value == "0") {
      dispatch(get_bill_status_0());
    } else if (value == "1") {
      dispatch(get_bill_status_1());
    } else if (value == "2") {
      dispatch(get_bill_status_2());
    } else {
      dispatch(get_bill_status_3());
    }
  };
  const handleChange = (values) => {
    setDataLable(values);
    dispatch(FilterIdus({ idUser: values }));
  };
  const onsearchtype = (value) => {
    setTimeout(() => {
      dispatch(
        searchBillPhone({
          mNumberPhone: value,
        })
      );
    }, 1000);
  };
  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  const handleXoa = () => {
    dispatch(delAllBill());
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
  const onChange = (dates, dateStrings) => {
    if (dates) {
      console.log("From: ", dates[0], ", to: ", dates[1]);
      console.log("From: ", dateStrings[0], ", to: ", dateStrings[1]);
      dispatch(
        searchBillDate({
          mStartTime: dateStrings[0].slice(0),
          mEndTime: dateStrings[1].slice(0),
        })
      );
    } else {
      console.log("Clear");
      dispatch(getBillProduct());
    }
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const deletee = (id) => {
    dispatch(
      removeBillOder({
        idBill: id,
      })
    );
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "_id",
      render: (_id, data, index) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{index + 1}</p>
        </div>
      ),
    },
    // {
    //   title: "Họ",
    //   dataIndex: "firstName",
    // },
    {
      title: "Mã đơn hàng",
      dataIndex: "billingEncode",
      render: (billingEncode) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{billingEncode}</p>
        </div>
      ),
    },
    {
      title: "Tên",
      dataIndex: "_id",
      render: (_id, data) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>
            {data?.firstName} {data?.lastName}
          </p>
        </div>
      ),
    },
    {
      title: "SĐT",
      dataIndex: "numberPhone",
      render: (numberPhone) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{numberPhone}</p>
        </div>
      ),
    },
    {
      title: "Địa chỉ",
      dataIndex: "fullAddress",
      render: (fullAddress) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            width: 300,
          }}
        >
          <p>{fullAddress}</p>
        </div>
      ),
      width: 300,
    },

    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (status) => {
        if (status.toString() == 0) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ width: 150 }}>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "650",
                    color: "#000",
                  }}
                >
                  Chờ xác nhận
                </p>
              </div>

              <div
                style={{
                  width: 20,
                  height: 20,
                  border: "1px solid red ",
                  backgroundColor: "red",
                  borderRadius: 3,
                  opacity: 0.7,
                }}
              ></div>
            </div>
          );
        } else if (status.toString() == 1) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ width: 150 }}>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "650",
                    color: "#000",
                  }}
                >
                  Đang xử lý
                </p>
              </div>

              <div
                style={{
                  width: 20,
                  height: 20,
                  border: "1px solid  yellow",
                  backgroundColor: "yellow",
                  borderRadius: 3,
                  opacity: 0.7,
                }}
              ></div>
            </div>
          );
        } else if (status.toString() == 2) {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ width: 150 }}>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "650",

                    color: "#000",
                  }}
                >
                  Đang vận chuyển
                </p>
              </div>

              <div
                style={{
                  width: 20,
                  height: 20,
                  border: "1px solid greenyellow ",
                  backgroundColor: "greenyellow",
                  borderRadius: 3,
                  opacity: 0.7,
                }}
              ></div>
            </div>
          );
        } else {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <div style={{ width: 150 }}>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "650",
                    color: "#000",
                  }}
                >
                  Đã hoàn thành
                </p>
              </div>

              <div
                style={{
                  width: 20,
                  height: 20,
                  border: "1px solid #00FF00  ",
                  backgroundColor: "#00FF00 ",
                  borderRadius: 3,
                  opacity: 0.7,
                }}
              ></div>
            </div>
          );
        }
      },
      width: 200,
    },
    {
      title: "Thời gian đặt",
      dataIndex: "createdAt",
      render: (createdAt) => <p>{createdAt.slice(0, -14)}</p>,
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
          }}
        >
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
          <Link to={`/chitietBill/${_id}`}>
            <p
              style={{
                width: 50,
                color: "blue",
                cursor: "pointer",
              }}
              size={24}
            >
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
        <p className="text_titlespb">Danh sách đơn hàng</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", width: "100%" }}>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 30px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={() => {
              dispatch(getBillProduct());
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
          <div style={{ margin: "0 0 0 5px", width: "20%" }}>
            <SelectFilter
              options={data}
              onChange={handleChange}
              value={dataLable}
            />
          </div>

          <div style={{ width: "20%", margin: "0 0 0 5px" }}>
            <Select
              defaultValue={"Đơn hàng theo trạng thái"}
              style={{
                width: "100%",
                backgroundColor: "#D9D9D9",
                border: "1px solid #D9D9D9 ",
              }}
              onChange={handleChangestatus}
            >
              <Option value="0">Chờ xác nhận</Option>
              <Option value="1">Đang xử lý</Option>
              <Option value="2">Đang vận chuyển</Option>
              <Option value="3">Hoàn thành</Option>
            </Select>
          </div>
          <div style={{ width: "20%", margin: "0 0 0 5px" }}>
            <Select
              defaultValue={"old"}
              style={{
                width: "100%",
                backgroundColor: "#D9D9D9",
                border: "1px solid #D9D9D9 ",
              }}
              onChange={handleChangefilter}
            >
              <Option value="new">Mới nhất theo ngày</Option>
              <Option value="old">Cũ nhất theo ngày</Option>
            </Select>
          </div>
        </div>
        {/* <DatePicker
          placeholder="Chọn ngày"
          onChange={onChange}
          onOk={onOk}
          style={{ marginRight: 10 }}
          showToday={false}
        /> */}
        <div style={{ width: "27%", margin: "0 10px 0 0" }}>
          <DateSelect onChange={onChange} />
        </div>
        <AutoComplete
          className="search_prd"
          style={{
            width: "23%",
          }}
          onSearch={onsearchtype}
        >
          <Search
            type="text"
            placeholder="Tìm theo số điện thoại"
            // style={{ marginLeft: 30 }}
          />
        </AutoComplete>
      </div>

      <div style={{ margin: "20px 30px 0 20px" }}>
        <Table
          style={{ width: "100%" }}
          dataSource={billdata}
          columns={columns}
        />
      </div>

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

export default ScreenListOrder;
