import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import img_login from "../../../Common/image/img_login.png";
import FormLogin from "../../../components/auth/FormLogin";
import "./ScreenLogin.css";
function ScreenLogin() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="mContainer">
          <div className="layout-left">
            <div className="layout-from">
              <FormLogin title="Đăng nhập" />
            </div>
          </div>
          <div className="layout-right">
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderTopRightRadius: 3,
                borderBottomRightRadius: 3,
              }}
              src={img_login}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenLogin;
