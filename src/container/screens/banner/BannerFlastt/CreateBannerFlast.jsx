import { Button, Checkbox, Form, Input } from "antd";
import React, { useState, useEffect } from "react";
import "../bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";
import axios from "axios";
import { mToken } from "../../../../../token/TokenLogin";
import SelectFilter from "../../../../Components/type/SelectFilter";
import {
  LOCALHOST,
  URL_GET_ALL_OPJECT,
  URL_POST_IMG,
} from "../../../../API/ALLAPI";
function CreateBannerFlast() {
  const [nameLinkImage, setNameLinkImage] = useState();
  const [nameImage, setNameImage] = useState();
  const [valueText, setValueText] = useState();
  const [data, setData] = useState();
  const [dataLable, setDataLable] = useState();

  const upImage = (e) => {
    setNameLinkImage(e.target.files);
    setNameImage(e.target.files[0].name); // if (nameImage.length > 0) {
  };
  const onFinish = async (values) => {
    const formData = new FormData();
    formData.append("croppedImage", nameLinkImage[0]);
    formData.append("title_ads", values.title_ads);
    formData.append("description_ads", valueText);
    formData.append("title_data", values.title_data);

    axios({
      url: `${LOCALHOST}` + `${URL_POST_IMG}`,
      method: "POST",
      headers: {
        token: mToken,
        "Content-Type": "multipart/form-data",
      },
      // data: qs.stringify(formData),
      data: formData,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err.response);
        // console.log(err.message);
        // console.log(err.request);
      }
    );
    console.log(values);
    alert("Thêm thành công");
    history.back();
  };

  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_OPJECT}`)
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.result.map((item) => {
          otpn.push({ value: item.titleTypeProduct });
        });
        setData(otpn);
      });
  }, []);

  const handleChange = (values) => {
    console.log(values);
    setDataLable(values);
  };
  return (
    <div className="_Container_banner_name">
      <h3 className="_titile_add_wonent">Thêm banner flash</h3>
      <Form
        style={{ margin: "0 20px" }}
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* tên */}
        <Form.Item
          label="Tên"
          name="title_ads"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập tên !",
            },
          ]}
        >
          <Input style={{ borderRadius: 3 }} />
        </Form.Item>
        {/* Đối tượng */}
        <Form.Item
          label="Đối tượng"
          name="title_data"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập đối tượng !",
            },
          ]}
        >
          <Input style={{ borderRadius: 3 }} />
        </Form.Item>
        {/* Thông tin chi tiết */}
        <Form.Item
          label="Thông tin chi tiết"
          name="description_ads"
          rules={[
            {
              required: true,
              message: "Vui lòng nhập thông tin chi tiết",
            },
          ]}
        >
          <Editor
            apiKey="f5r9v2m5jorsgp469noiiqpd10fc7xhmn3th5897ghxcpank"
            onEditorChange={(newText) => setValueText(newText)}
            value={valueText}
            // initialValue="<p>This is the initial content of the editor.</p>"
            init={{
              height: 400,
              menubar: false,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | " +
                "bold italic forecolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
          />
        </Form.Item>
        {/* thêm ảnh */}
        <Form.Item label="Chọn ảnh" name="croppedImage">
          {nameImage !== undefined && (
            <div style={{ display: "flex" }}>
              <span style={{ margin: 5 }}>{nameImage}</span>
              <br />
              <Button onClick={() => setNameImage()} style={{ margin: 5 }}>
                Huỷ
              </Button>
            </div>
          )}
          <br />
          <label htmlFor="images">
            <div
              style={{
                border: "1px solid #d9d9d9",
                marginTop: -20,
                textAlign: "center",
                borderRadius: 3,
                width: "40%",
              }}
            >
              <p
                style={{
                  marginTop: 10,
                }}
              >
                Chọn ảnh
              </p>
            </div>
          </label>
          <input
            id="images"
            type="file"
            style={{ display: "none" }}
            onChange={(e) => upImage(e)}
          />
        </Form.Item>
        {/* nút xử lý sự kiện */}
        <Form.Item
          wrapperCol={{
            offset: 15,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="reset"
            style={{
              margin: 20,
              width: 120,
              backgroundColor: "#DCDFE8",
              borderColor: "#DCDFE8",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#000000",
                marginTop: -2,
              }}
            >
              Quay lại
            </p>
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            style={{
              margin: 20,
              width: 120,
              backgroundColor: "#87CEEB99",
              borderColor: "#87CEEB99",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: 16,
                fontWeight: "400",
                color: "#000000",
                marginTop: -2,
              }}
            >
              Thêm banner
            </p>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default CreateBannerFlast;
