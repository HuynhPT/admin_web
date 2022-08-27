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
import { getAllsum } from "../API/StatisticalApi";
export const getTongsanPhambanduoc = createAsyncThunk(
  "tongSP/getTongsanPhambanduoc",
  async () => {
    const { data: sizes } = await getAllsum();
    console.log(sizes);
    return sizes.result;
  }
);

const TongsanPhambanduoc = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTongsanPhambanduoc.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  TongsanPhambanduoc.actions;

export default TongsanPhambanduoc.reducer;
