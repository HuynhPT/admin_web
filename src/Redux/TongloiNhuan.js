import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getSize } from "../API/ColorSize";
import { mToken } from "../../token/TokenLogin";
import {
  LOCALHOST,
  URL_DELETE_ALL_SIZE,
  URL_POST_SIZE,
  URL_REMOVE_ID_SIZE,
  URL_UPDATE_ID_SIZE,
} from "../API/ALLAPI";
import { getAllloinhuan, getAllsum } from "../API/StatisticalApi";
export const getTongloiNhuan = createAsyncThunk(
  "loinhuan/getTongloiNhuan",
  async () => {
    const { data: sizes } = await getAllloinhuan();
    console.log(sizes);
    return sizes.totalPrice;
  }
);

const tongloiNhuan = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTongloiNhuan.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
tongloiNhuan.actions;

export default tongloiNhuan.reducer;
