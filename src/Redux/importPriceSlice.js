import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { getPostAll } from "../API/PostApi";
import { getAllimport } from "../API/StatisticalApi";
export const getimportPriceSlice = createAsyncThunk(
  "importPrice/getimportPriceSlice",
  async () => {
    const { data: getimport } = await getAllimport();
    console.log(getimport);
    return getimport.result;
  }
);
const importPriceSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getimportPriceSlice.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  importPriceSlice.actions;

export default importPriceSlice.reducer;
