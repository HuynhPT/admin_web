import { Popconfirm, Table } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getNotifications,
  removeNotifices,
} from "../../../Redux/NotificationSlice";
export default function ScreenNotificationList() {
  const dispatch = useDispatch();
  const dataNotification = useSelector((data) => data.notification.value);
  useEffect(() => {
    dispatch(getNotifications());
  }, []);
  const deletee = (id) => {
    dispatch(
      removeNotifices({
        IDNotification: id,
      })
    );
  };
  const columns = [
    {
      title: "Tiêu đề thông báo",
      dataIndex: "title",
      width:500
    },
    {
      title: "Nội dung thông báo",
      dataIndex: "body",
      width:500
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
        </div>
      ),
    },
  ];
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          marginTop: 30,
          fontSize: 30,
          fontFamily: "initial",
        }}
      >
        Danh sách thông báo
      </div>
      <div style={{ margin: "20px 0 0 20px" }}>
        <Table
          style={{ width: "100%" }}
          dataSource={dataNotification}
          columns={columns}
        />
      </div>
    </div>
  );
}
