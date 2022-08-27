import {
  AutoComplete,
  Button,
  Input,
  message,
  Modal,
  Popconfirm,
  Table,
} from "antd";
import React, { useEffect, useState } from "react";
import "../../screens/profit/Listproduct.css";
import {
  dellAllTypeProduct,
  delTypeProduct,
  getTypeProduct,
  searchTypeproduct,
  upTypeProduct,
} from "../../../Redux/TypeProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { ReloadOutlined, SearchOutlined } from "@ant-design/icons";
import {
  LOCALHOST,
  URL_GET_ALL_IMG,
  URL_GET_ALL_OPJECT,
} from "../../../API/ALLAPI";
const { Search } = Input;
const TableObjectProduct = () => {
  // Khai báo state
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalDelALl, setisModalDelALl] = useState(false);
  const [dataEdit, setDataEdit] = useState();
  const [value, setValue] = useState();
  const [searchtitle, setSearchtitle] = useState("");
  // tham chiếu redux
  const dispatch = useDispatch();
  const typeproduct = useSelector((data) => data.typeproduct.value);

  // sử dụng hook effe
  useEffect(() => {
    // get dữ liệu
    dispatch(getTypeProduct());
  }, []);
  // console.log(`${LOCALHOST}` + `${URL_GET_ALL_OPJECT}`, "api chuoi");
  // Thực hiện tìm kiếm
  const onsearchtype = (value) => {
    setTimeout(() => {
      dispatch(searchTypeproduct({ titleTypeProduct: value }));
    }, 1000);
  };

  // Show modal xoá tất cả
  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  const handleXoa = () => {
    dispatch(dellAllTypeProduct());
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

  // Show modal sửa
  const showModal = async (item) => {
    console.log(item);
    await setDataEdit(item);
    setIsModalVisible(true);
  };
  const handleOk = () => {
    dispatch(
      upTypeProduct({
        titleTypeProduct: value,
        idTypeProduct: dataEdit?._id,
      })
    );

    message.success({
      content: "Sửa đối tượng thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      duration: 2,
    });
    setValue();
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setDataEdit();
    setIsModalVisible(false);
  };

  // bảng thông tin
  const listDataa = () => {
    if (typeproduct !== undefined) {
      const deletee = (_id) => {
        console.log(_id);
        dispatch(delTypeProduct({ idTypeProduct: _id }));
        message.success({
          content: "Xoá thành công",
          className: "custom-class",
          style: {
            color: "#52c41a",
          },
          duration: 2,
        });
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
        {
          title: "Đối tượng",
          dataIndex: "titleTypeProduct",
          render: (titleTypeProduct) => (
            <div
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <p>{titleTypeProduct}</p>
            </div>
          ),
        },
        {
          title: "Hoạt động",
          dataIndex: "_id",
          render: (_id, data) => (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Popconfirm disabled={true} >
                <p
                  style={{ width: 50, cursor: "pointer", color: "blue" }}
                  size={24}
                  // onClick={() => showModal(data)}
                >
                  Sửa
                </p>
              </Popconfirm>

              <Popconfirm
                disabled={true}
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
        <>
          <Table
            columns={columns}
            dataSource={typeproduct}
            rowKey={(item) => item._id}
            className="table-list"
          />
        </>
      );
    }
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            type="primary"
            style={{
              margin: "0 0 0 30px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={() => {
              dispatch(getTypeProduct());
              setSearchtitle("");
            }}
          >
            <ReloadOutlined />
          </Button>

          <Button
            type="primary"
            style={{
              margin: "0 10px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={showmodaldell}
          >
            <p style={{ color: "#000" }}>Xoá tất cả</p>
          </Button>
        </div>
        <AutoComplete
          onSearch={onsearchtype}
          style={{ width: "21%", marginRight: 30 }}
        >
          <Search
            onChange={(e) => setSearchtitle(e.target.value)}
            placeholder="Tìm kiếm theo tên"
            value={searchtitle}
          />
        </AutoComplete>
      </div>

      {listDataa()}
      <Modal
        title="Sửa đối tượng sử dụng"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          id="titleTypeProduct"
          value={value == undefined ? dataEdit?.titleTypeProduct : value}
          style={{
            width: "90%",
            border: "1px solid gray",
            borderRadius: 3,
            padding: 5,
          }}
        />
      </Modal>
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

export default TableObjectProduct;
