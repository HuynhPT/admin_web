import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { getPostAll } from "../API/PostApi";
import {
  getAllConhang,
  getAllHethang,
  getAllimport,
  getAllSELl,
} from "../API/StatisticalApi";
export const getsanphamHethang = createAsyncThunk(
  "hethang/getsanphamHethang",
  async () => {
    const { data: getexport } = await getAllHethang();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const sanphamHethang = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getsanphamHethang.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = sanphamHethang.actions;

export default sanphamHethang.reducer;
