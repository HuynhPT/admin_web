import { Avatar, List, Select, Button, Divider, Row, Image, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import styles from "./ScreenCreatePost.module.css";
import anhone from '../../../Common/Image/anhone.png'
import { Editor } from "@tinymce/tinymce-react";
import hoidap from '../../../Common/Image/hoidap.png'
import TinymceProduct from '../../../Components/products/TinymceProduct';
import { useDispatch, useSelector } from 'react-redux';
import { URL_POST_SOCIETY } from '../../../API/ALLAPI';
import axios from 'axios';
import { mToken } from '../../../../token/TokenLogin';
const handleChange = (value) => {
  console.log(value);
};

const ScreensSua = () => {
  const [nameLinkImage, setNameLinkImage] = useState();
  const [nameImage, setNameImage] = useState();
  const [valueText, setValueText] = useState();
  const upImage = (e) => {
    setNameLinkImage(e.target.files);
    setNameImage(e.target.files[0].name);

  };
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const [dataus, setData] = useState(null);

  const onFinish = async (value) => {
    const formData = new FormData();
    formData.append("croppedImage", nameLinkImage[0]);
    formData.append("content", value.content);

    axios({
      url: `${LOCALHOST}` + `${URL_POST_SOCIETY}`,
      method: "POST",
      headers: {
        token: mToken,
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    }).then(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(res);
      }
    );
    console.log(value);
    alert("Thêm thành công");
  };
  useEffect(() => {
    try {
      if (!user) {
        navigation("/");
      } else {
        setData(user.user);
      }
    } catch (error) {
      console.log("err");
    }
  }, []);
  console.log(dataus)
  return (
    <div className={styles._container_all}>
      <Form>
        <div >
          <div className={styles._avatar_1}>

            <img className={styles._avatar_1_1} src={dataus?.image} style={{

            }} />

            <h3 className={styles._title_avatr}>{dataus?.userName}</h3>
          </div>
          <div className={styles._select_team}>

          </div>
          <hr className={styles._divider_1} />
        </div>

        <Form.Item
          name="content"
        >
          <Editor
            apiKey="f5r9v2m5jorsgp469noiiqpd10fc7xhmn3th5897ghxcpank"
            onEditorChange={(newText) => setValueText(newText)}
            value={valueText}
            
            init={{
              height: 300,
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
        <div className={styles._row_body}>

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
                  Ảnh/Video
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

        </div>

        <div className={styles._divider_3}>
          <hr />
        </div>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles._btn_posts}
          >
            <p
              className={styles._text_btn}
            >
              Sửa
            </p>
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default ScreensSua;
