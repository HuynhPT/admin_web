import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { getPostAll } from "../API/PostApi";
import { getAllConhang, getAllimport, getAllSELl } from "../API/StatisticalApi";
export const getsanphamConhang = createAsyncThunk(
  "conhang/getsanphamConhang",
  async () => {
    const { data: getexport } = await getAllConhang();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const sanphamConhang = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getsanphamConhang.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = sanphamConhang.actions;

export default sanphamConhang.reducer;
