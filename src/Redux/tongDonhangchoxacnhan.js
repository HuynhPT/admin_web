import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllbillchoXN,
  getAllbillcomplete,
  getAllbilldoing,
  getAllbillxuLy,
} from "../API/StatisticalApi";
export const gettongDonhangchoxacnhan = createAsyncThunk(
  "choxacnhan/gettongDonhangchoxacnhan",
  async () => {
    const { data: getexport } = await getAllbillchoXN();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const tongDonhangchoxacnhan = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettongDonhangchoxacnhan.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  tongDonhangchoxacnhan.actions;

export default tongDonhangchoxacnhan.reducer;
