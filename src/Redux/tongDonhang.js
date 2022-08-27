import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { getPostAll } from "../API/PostApi";
import { getAllbill, getAllimport, getAllSELl } from "../API/StatisticalApi";
export const gettongDonhang = createAsyncThunk(
  "allbill/gettongDonhang",
  async () => {
    const { data: getexport } = await getAllbill();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const tongDonhang = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettongDonhang.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
tongDonhang.actions;

export default tongDonhang.reducer;
