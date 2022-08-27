import { Button, Checkbox, Form, Input, message } from "antd";
import React, { useState, useEffect } from "react";
import TynimceProduct from "../../../../Components/products/TinymceProduct";
import "../bannerwonent/CreateBannerWoment.css";
import { Editor } from "@tinymce/tinymce-react";

import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { LOCALHOST, URL_GET_ALL_IMG, URL_UPDATE_IMG } from "../../../../API/ALLAPI";
import { mToken } from "../../../../../token/TokenLogin";
function EditBannerWonent(props) {
  const { id } = useParams();
  const [nameLinkImage, setNameLinkImage] = useState();
  const [nameImage, setNameImage] = useState();
  const [valueText, setValueText] = useState();
  const [dataEdit, setDataEdit] = useState();
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_IMG}`)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.data.find((item) => item._id == id);
        setDataEdit(newData);
      });
  }, []);
  const upImage = (e) => {
    setNameLinkImage(e.target.files);
    setNameImage(e.target.files[0].name);
  };
  const onFinish =async (values) => {

    const fromdata = new FormData();
    fromdata.append('croppedImage', nameLinkImage == undefined ? dataEdit?.image_ads : nameLinkImage[0])
    fromdata.append('title_ads', values.title_ads == undefined ? dataEdit?.title_ads : values.title_ads)
    fromdata.append('description_ads', valueText == undefined ? dataEdit?.description_ads : valueText)
    fromdata.append('title_data', values.title_data == undefined ? dataEdit?.title_data : values.title_data)
    fromdata.append("idIMG", dataEdit._id);
    await axios({
      url: `${LOCALHOST}` + `${URL_UPDATE_IMG}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "multipart/form-data",
      },
      data: fromdata,
    }).then(
      async (res) => {
        console.log(res)
        if (res.data.code === 200) {
          message.success({
            content: "Sửa thành công",
            style: { color: "green" },
          });
        } else {
          message.error({
            content: "Sửa thất bại",
            style: { color: "red" },
          });
        }
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
  };

  return (
    dataEdit !== undefined && (
      <div className="_Container_banner_name">
        <h3 className="_titile_add_wonent">Sửa banner nữ</h3>
        {dataEdit !== undefined && (
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
              label="Sửa tên"
              name="title_ads"
            >
              <Input
                type="text"
                style={{ borderRadius: 3 }}
                placeholder="dasad"
                defaultValue={`${dataEdit?.title_ads}`}
              />
            </Form.Item>
            {/* Đối tượng */}
            <Form.Item
              label="Sửa đối tượng"
              name="title_data"
            >
              <Input
                style={{ borderRadius: 3 }}
                defaultValue={`${dataEdit?.title_data}`}
              />
            </Form.Item>
            {/* Thông tin chi tiết */}
            <Form.Item
              label="Sửa thông tin chi tiết"
              name="description_ads"
            >
              <Editor
                apiKey="your-api-key"
                onEditorChange={(newText) => setValueText(newText)}
                initialValue={`${dataEdit?.description_ads}`}
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
            {/* Chọn ảnh */}

            <Form.Item
              label="Chọn ảnh"
              name="croppedImage">
              {(nameImage !== undefined || dataEdit.image_ads) && (
                <div style={{ display: "flex" }}>
                  <span style={{ margin: 10 }}>
                    {nameImage !== undefined
                      ? nameImage
                      : dataEdit.image_ads}
                  </span>
                  <br />
                  <Button
                    onClick={() => { setNameLinkImage(), setNameImage() }}
                    style={{ margin: 10 }}
                  >
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
              <Link to={"/shop/banner_women"}>
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
              </Link>

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
                  Sửa banner
                </p>
              </Button>
            </Form.Item>
          </Form>
        )}
      </div>
    )
  );
}

export default EditBannerWonent;
