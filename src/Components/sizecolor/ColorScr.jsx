import React, { useEffect, useState } from "react";
import {
  AutoComplete,
  Button,
  Checkbox,
  Form,
  Input,
  message,
  Modal,
  Popconfirm,
  Table,
} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  addColorsize,
  delAllColorsize,
  getColorsize,
  removeColorsize,
  searchColorsize,
  upColorsize,
} from "../../Redux/ColorSlice";
import { ReloadOutlined } from "@ant-design/icons";
const { Search } = Input;
const ColorScr = () => {
  const [isModalDelALl, setisModalDelALl] = useState(false);
  const [searchtitle, setSearchtitle] = useState("");
  const [dataEdit, setDataEdit] = useState();
  const [isModalVisible, setIsModalVisible] = useState();
  const [valueT, setValueT] = useState();

  const [valueC, setValueC] = useState();

  const dispash = useDispatch();
  const selector = useSelector((data) => data.colorsize.value);
  useEffect(() => {
    dispash(getColorsize());
  }, []);
  const onFinish = (values) => {
    dispash(
      addColorsize({
        titleColors: values.titleColors,
        colorCode: values.colorCode,
      })
    );
  };
  const deletee = (_id) => {
    console.log(_id);
    dispash(removeColorsize({ mIdColor: _id }));
    message.success({
      content: "Xoá thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      duration: 2,
    });
  };
  const showModal = async (item) => {
    console.log(item);
    await setDataEdit(item);
    setIsModalVisible(true);
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
      title: "Tên màu",
      dataIndex: "titleColors",
      render: (titleColors) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{titleColors}</p>
        </div>
      ),
    },
    {
      title: "Mã màu",
      dataIndex: "colorCode",
      render: (colorCode) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{colorCode}</p>
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
          <p
            style={{ width: 50, cursor: "pointer", color: "blue" }}
            size={24}
            onClick={() => showModal(data)}
          >
            Sửa
          </p>

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
  const onsearchtype = (value) => {
    setTimeout(() => {
      dispash(searchColorsize({ titleColors: value }));
    }, 1000);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const handleHuy = () => {
    setisModalDelALl(false);
  };

  const handleXoa = () => {
    dispash(delAllColorsize());
    message.success("Xoá thành công");
    setisModalDelALl(false);
  };
  const showmodaldell = () => {
    setisModalDelALl(true);
  };

  const handleOk = () => {
    const titleColors = document.getElementById("titleColors").value;
    const colorCode = document.getElementById("colorCode").value;
    dispash(
      upColorsize({
        titleColors: titleColors,
        colorCode: colorCode,
        mIdColor: dataEdit._id,
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
    setValueT();
    setValueC();

    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setDataEdit();
    setIsModalVisible(false);
  };

  return (
    <>
      <Form
        style={{
          display: "flex",
          margin: "50px 100px 0 100px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div style={{ width: "100%" }}>
          <p
            style={{
              color: "#000000",
              fontSize: 16,
              fontWeight: "700",
              fontFamily: "Open Sans",
            }}
          >
            Tên màu *
          </p>
          <Form.Item
            name="titleColors"
            style={{ width: "100%" }}
            rules={[
              {
                required: true,
                message: "Vui lòng nhập tên màu!",
              },
              {
                min: 3,
                message: "Nhập tối thiểu 3 ký tự!",
              },
            ]}
          >
            <Input placeholder="Thêm màu" style={{ borderRadius: 3 }} />
          </Form.Item>
        </div>
        <div style={{ width: "100%" }}>
          <p
            style={{
              color: "#000000",
              fontSize: 16,
              fontWeight: "700",
              fontFamily: "Open Sans",
            }}
          >
            Mã màu *
          </p>
          <Form.Item
            name="colorCode"
            style={{ width: "100%" }}
            rules={[
              {
                required: true,
                message: "Vui lòng chọn màu!",
              },
            ]}
          >
            <Input
              placeholder="Thêm mã màu"
              style={{ borderRadius: 3 }}
              type="color"
            />
          </Form.Item>
        </div>

        <div>
          <Form.Item style={{ marginTop: 40 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                // marginLeft: -200,
                width: 250,
                backgroundColor: "#87CEEB",
                color: "#000000",
                fontSize: 16,
                fontWeight: "700",
                fontFamily: "Open Sans",
                borderRadius: 3,
              }}
            >
              Thêm màu
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <Button
            type="primary"
            style={{
              margin: "0 0 10px 100px",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={() => {
              dispash(getColorsize());
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
          style={{ width: "21%", marginRight: 100 }}
        >
          <Search
            onChange={(e) => setSearchtitle(e.target.value)}
            placeholder="Tìm kiếm theo tên"
            value={searchtitle}
          />
        </AutoComplete>
      </div>
      <Table
        style={{ margin: "0 100px 0 100px" }}
        columns={columns}
        dataSource={selector}
        rowKey={(item) => `${item._id}`}
        scroll={{
          y: 200,
        }}
      />

      <Modal
        title="Sửa màu"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Sửa"}
        cancelText={"Huỷ"}
      >
        <p>Tên màu</p>
        <input
          type="text"
          onChange={(e) => setValueT(e.target.value)}
          id="titleColors"
          value={valueT == undefined ? dataEdit?.titleColors : valueT}
          style={{ width: "90%" }}
        />
        <p>Mã màu</p>
        <input
          type="color"
          onChange={(e) => setValueC(e.target.value)}
          id="colorCode"
          value={valueC == undefined ? dataEdit?.colorCode : valueC}
          style={{ width: "90%" }}
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
    </>
  );
};

export default ColorScr;
