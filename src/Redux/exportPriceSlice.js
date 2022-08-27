import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  getAllSELl } from "../API/StatisticalApi";
export const getexportPriceSlice = createAsyncThunk(
  "exportPrice/getexportPriceSlice",
  async () => {
    const { data: getexport } = await getAllSELl();
    console.log(getexport);
    return getexport.result;
  }
);
const exportPriceSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getexportPriceSlice.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
exportPriceSlice.actions;

export default exportPriceSlice.reducer;
