import { Button, Popconfirm, Table } from "antd";
import React, { useEffect, useState } from "react";

import "../profit/Listproduct.css";
import Search from "antd/lib/input/Search";
import axios from "axios";
import { mToken } from "../../../../token/TokenLogin";
import { useDispatch, useSelector } from "react-redux";
import { getUser, removeUser } from "../../../Redux/UserSlice";

const ScreenListUser = () => {
  const dispatch = useDispatch();
  const dataus = useSelector((data) => data.users.value);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [data, setData] = useState();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  console.log(dataus);

  const deletee = (id) => {
    dispatch(
      removeUser({
        mIdUser: id,
      })
    );
    message.success({
      content: "Xoá thành công",
      style: { color: "green" },
    });
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "_id",
      render: (_id, data, index) => index + 1,
    },
    {
      title: "Ảnh",
      dataIndex: "photoUrl",
      render: (photoUrl) => (
        <img src={photoUrl} alt="" style={{ width: 60, height: 60 }} />
      ),
    },

    {
      title: "Tên",
      dataIndex: "name",
    },
    {
      title: "SĐT",
      dataIndex: "phone",
    },

    {
      title: "Email",
      dataIndex: "email",
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
        </div>
      ),
    },
  ];

  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb">Danh sách người dùng</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
      </div>
      {/* <div
        className="button-list"
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          style={{
            margin: "10px 30px",
            backgroundColor: "#D9D9D9",
            border: "1px solid #D9D9D9 ",
          }}
        >
          <p style={{ color: "#000" }}>Xoá tất cả</p>
        </Button>
      </div> */}
      <Table
        columns={columns}
        dataSource={dataus}
        rowKey={(item) => item._id}
        className="table-list"
      />
    </div>
  );
};

export default ScreenListUser;
