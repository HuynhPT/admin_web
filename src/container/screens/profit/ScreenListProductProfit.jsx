import { Button, Table } from "antd";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Listproduct.css";
import Search from "antd/lib/input/Search";
import { LOCALHOST, URL_GET_ALL_IMG } from "../../../API/ALLAPI";

const ScreenListProductProfit = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_IMG}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  // const start = () => {
  //   setLoading(true); // ajax request after empty completing

  //   setTimeout(() => {
  //     setSelectedRowKeys([]);
  //     setLoading(false);
  //   }, 1000);
  // };

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedRowKeys(selectedRows);
    },
  };
  const hasSelected = selectedRowKeys.length > 0;

  const listDataa = () => {
    if (data !== undefined) {
      const deletee = (id) => {
        console.log(id);
      };
      const columns = [
        {
          title: "Tên",
          dataIndex: "title_ads",
          columnTitle: "red",
        },
        {
          title: "Ads",
          dataIndex: "title_data",
        },
        {
          title: "Ảnh",
          dataIndex: "image_ads",
          render: (image_ads) => (
            <img src={image_ads} alt="" style={{ width: 100 }} />
          ),
        },
        // {
        //   title: "Chi tiết",
        //   dataIndex: "description_ads",
        //   render: (description_ads) => (
        //     <p
        //       style={{
        //         width: "100%",
        //         textOverflow: "ellipsis",
        //         whiteSpace: "initial",
        //       }}
        //       dangerouslySetInnerHTML={{
        //         __html: description_ads,
        //       }}
        //     ></p>
        //   ),
        //   width: 300,
        // },

        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              {/* <Link to="/shop/thongKe_loiNhuan">
                <EditOutlined style={{ width: 50 }} size={24} />
              </Link> */}
              <p
                onClick={() => deletee(_id)}
                style={{
                  marginTop: 5,
                  color: "blue",
                  cursor: "pointer",
                  textAlign: "center",
                }}
                size={24}
              >
                Xoá
              </p>
            </div>
          ),
        },
      ];
      return (
        <Table
          style={{ justifyContent: "center" }}
          columns={columns}
          dataSource={data.data}
          rowKey={(item) => item._id}
          className="table-list"
        />
      );
    }
  };

  return (
    <div className="list-product">
      <div className="titlespb">
        <p className="text_titlespb">Danh sách sản phẩm bán được</p>
      </div>
      <div className="text_spb">
        <p className="texttitlespb">
          {
            " Danh sách sản phẩm đã bán được quyết định hiệu quả việc trình bày sản phẩm và cung cấp không gian \n để liệt kê các sản phẩm và dịch vụ của bạn theo cách hấp dẫn nhất."
          }
        </p>
      </div>
      <div
        className="button-list"
        style={{
          marginBottom: 16,
        }}
      >
        <Button
          type="primary"
          style={{
            marginLeft: 30,
            marginTop: 20,
            backgroundColor: "#D9D9D9",
            border: "1px solid #D9D9D9 ",
          }}
          // onClick={showmodaldell}
        >
          <p style={{ color: "#000" }}>Xoá tất cả</p>
        </Button>
        <div className="search_prd">
          <p className="search_title">Tìm kiếm:</p>
          <Search type="text" placeholder="Tìm kiếm" />
        </div>
      </div>
      {listDataa()}
    </div>
  );
};

export default ScreenListProductProfit;
