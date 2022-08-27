import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mAUTHORIZATION, mToken } from "../../token/TokenLogin";
import { getNotification, getTokenNotification } from "../API/NotificationApi";
import {
  LOCALHOST,
  URL_PUSH_NOTIFICATION,
  URL_REMOVE_NOTIFICATION,
  URL_SAVE_NOTIFICATION,
} from "../API/ALLAPI";
import { message } from "antd";
export const getNotifications = createAsyncThunk(
  "notification/getNotifications",
  async () => {
    const { data: Notifications } = await getNotification();
    console.log(Notifications);
    return Notifications.result;
  }
);
export const getTokenNotifications = createAsyncThunk(
  "notification/getTokenNotifications",
  async () => {
    const { data: Notifications } = await getTokenNotification();
    console.log(Notifications);
    return Notifications.result;
  }
);
export const removeNotifices = createAsyncThunk(
  "notification/removeNotifices",
  async (id) => {
    let postt = [];
    await axios({
      url: `${LOCALHOST}` + `${URL_REMOVE_NOTIFICATION}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(id),
    }).then(
      async (res) => {
        if (res.data.code === 200) {
          const { data: Notifications } = await getNotification();
          console.log(Notifications);
          postt = Notifications.result;
          message.success("Xóa thành công");
        } else {
          message.error("Xóa thất bại");
        }
      },

      (err) => {
        console.log(err.response, "?");
      }
    );
    return postt;
  }
);
export const saveNotifices = createAsyncThunk(
  "notification/saveNotifices",
  async (data) => {
    let postt = [];
    await axios({
      url: `${LOCALHOST}` + `${URL_SAVE_NOTIFICATION}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        if (res.data.code === 200) {
          const { data: Notifications } = await getNotification();
          console.log(Notifications);
          postt = Notifications.result;
          message.success("Lưu thông báo thành công");
        } else {
          message.error("Lưu thông báo thất bại");
        }
      },

      (err) => {
        console.log(err.response, "?");
      }
    );
    return postt;
  }
);

const NotificationSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNotifications.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getTokenNotifications.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeNotifices.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(saveNotifices.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  NotificationSlice.actions;

export default NotificationSlice.reducer;
