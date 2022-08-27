import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getColor } from "../API/ColorSize";
import { mToken } from "../../token/TokenLogin";
import { getAllUser } from "../API/UserApi";
import {
  LOCALHOST,
  URL_CHANGE_ACC_ADMIN,
  URL_REMOVE_ID_ACC_ADMIN,
} from "../API/ALLAPI";
export const getUser = createAsyncThunk("users/getUser", async () => {
  const { data: user } = await getAllUser();
  console.log(user);
  return user.result;
});

export const upUser = createAsyncThunk("users/upUser", async (data) => {
  console.log(data);
  let col = [];

  await axios({
    url: `${LOCALHOST}` + `${URL_CHANGE_ACC_ADMIN}`,
    method: "POST",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      if (res.data.code === 200) {
        const { data: user } = await getAllUser();
        col = user.result;
        alert("Thay đổi mật khẩu thành công");
      }
    },
    (err) => {
      alert("Mật khẩu cũ không đúng");
    }
  );
  return col;
});
export const removeUser = createAsyncThunk("users/removeUser", async (data) => {
  console.log(data);
  let col = [];

  await axios({
    url: `${LOCALHOST}` + `${URL_REMOVE_ID_ACC_ADMIN}`,
    method: "POST",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      const { data: user } = await getAllUser();
      col = user.result;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  return col;
});

const userSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(upUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeUser.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = userSlice.actions;

export default userSlice.reducer;
