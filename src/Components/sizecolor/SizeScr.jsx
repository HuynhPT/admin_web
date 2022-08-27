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
import {
  addSizecolor,
  delAllSizecolor,
  getSizecolor,
  removeSizecolor,
  upSizecolor,
} from "../../Redux/SizeSlice";
const { Search } = Input;
const SizeScr = () => {
  const [isModalDelALl, setisModalDelALl] = useState(false);
  const [searchtitle, setSearchtitle] = useState("");
  const [dataEdit, setDataEdit] = useState();
  const [isModalVisible, setIsModalVisible] = useState();

  const [valueT, setValueT] = useState();

  const [valueV, setValueV] = useState();

  const [valueN, setValueN] = useState();

  const [valueD, setValueD] = useState();

  const [valueE, setValueE] = useState();

  const [valueC, setValueC] = useState();

  const dispash = useDispatch();
  const selector = useSelector((data) => data.sizecolor.value);
  useEffect(() => {
    dispash(getSizecolor());
  }, []);
  const onFinish = (values) => {
    dispash(
      addSizecolor({
        titleSize: values.titleSize,
        shoulder: values.shoulder,

        bust: values.bust,
        sleeveLength: values.sleeveLength,

        waist: values.waist,
        length: values.length,
      })
    );
    message.success({
      content: "Thêm thành công",
      style: { color: "green" },
    });
  };
  const deletee = (_id) => {
    console.log(_id);
    dispash(removeSizecolor({ mIdSize: _id }));
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
      title: "Tên size",
      dataIndex: "titleSize",
      render: (titleSize) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{titleSize}</p>
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
    dispash(delAllSizecolor());
    message.success("Xoá thành công");
    setisModalDelALl(false);
  };
  const showmodaldell = () => {
    setisModalDelALl(true);
  };

  const handleOk = () => {
    const titleSize = document.getElementById("titleSize").value;
    const shoulder = document.getElementById("shoulder").value;

    const bust = document.getElementById("bust").value;
    const sleeveLength = document.getElementById("sleeveLength").value;

    const waist = document.getElementById("waist").value;
    const length = document.getElementById("length").value;
    dispash(
      upSizecolor({
        titleSize: titleSize,
        shoulder: shoulder,

        bust: bust,
        sleeveLength: sleeveLength,

        waist: waist,
        length: length,

        mIdSize: dataEdit._id,
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
          margin: "0 100px 0 100px",
          display: "flex",
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
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
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
                Tên size *
              </p>
              <Form.Item
                name="titleSize"
                style={{ width: "100%" }}
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập tên size",
                  },
                  {
                    pattern: /^[A-Za-z0-9]*$/,
                    message: "Nhập số hoặc chữ",
                  },
                ]}
              >
                <Input placeholder="Thêm size" style={{ borderRadius: 3 }} />
              </Form.Item>
            </div>
          </div>
          
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
              Thêm size
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
              dispash(getSizecolor());
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
        {/* <AutoComplete
          onSearch={onsearchtype}
          style={{ width: "21%", marginRight: 100 }}
        >
          <Search
            onChange={(e) => setSearchtitle(e.target.value)}
            placeholder="Tìm kiếm theo tên"
            value={searchtitle}
          />
        </AutoComplete> */}
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
        title="Sửa size"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={"Sửa"}
        cancelText={"Huỷ"}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <p>Tên size</p>
            <input
              type="text"
              onChange={(e) => setValueT(e.target.value)}
              id="titleSize"
              value={valueT == undefined ? dataEdit?.titleSize : valueT}
              style={{ width: "90%" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <p>Kích thước vai</p>
            <input
              onChange={(e) => setValueV(e.target.value)}
              id="shoulder"
              value={valueV == undefined ? dataEdit?.shoulder : valueV}
              style={{ width: "90%" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <p>Số đo ngực</p>
            <input
              type="text"
              onChange={(e) => setValueN(e.target.value)}
              id="bust"
              value={valueN == undefined ? dataEdit?.bust : valueN}
              style={{ width: "90%" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <p>Chiều dài tay</p>
            <input
              onChange={(e) => setValueD(e.target.value)}
              id="sleeveLength"
              value={valueD == undefined ? dataEdit?.sleeveLength : valueD}
              style={{ width: "90%" }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ width: "100%" }}>
            <p>Số đo vòng eo</p>
            <input
              type="text"
              onChange={(e) => setValueE(e.target.value)}
              id="waist"
              value={valueE == undefined ? dataEdit?.waist : valueE}
              style={{ width: "90%" }}
            />
          </div>
          <div style={{ width: "100%" }}>
            <p>Chiều cao</p>
            <input
              onChange={(e) => setValueC(e.target.value)}
              id="length"
              value={valueC == undefined ? dataEdit?.length : valueC}
              style={{ width: "90%" }}
            />
          </div>
        </div>
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

export default SizeScr;
