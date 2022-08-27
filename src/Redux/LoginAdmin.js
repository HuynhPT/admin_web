import axios from "axios";
import { useSelector } from "react-redux";
import { loginStart, loginSuccess, loginFailed } from "./AuthSlice";
import { CheckCircleTwoTone, PlusOutlined } from "@ant-design/icons";

import { message } from "antd";
import { LOCALHOST, URL_LOGIN_ACC_ADMIN } from "../API/ALLAPI";

export const loginUser = async (user, dispacth, navigation) => {
  dispacth(loginStart());

  return axios
    .post(`${LOCALHOST}` + `${URL_LOGIN_ACC_ADMIN}`, user)
    .then((reponse) => {
      if (reponse.data.token) {
        localStorage.setItem("Token", JSON.stringify(reponse.data.token));
      }
      dispacth(loginSuccess(reponse.data));
      navigation("/shop/tong_quan");
      
      message.success({
        content: "Đăng nhập thành công!",

        style: {
          color: "#52c41a",
        },
      });
      return reponse.data;
    })
    .catch((Error) => {
      message.error({
        content: "Sai mật khẩu hoặc tài khoản!",

        style: {
          color: "red",
        },
      });
      dispacth(loginFailed());
    });
};
