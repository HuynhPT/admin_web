import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllsanphamNhap } from "../API/StatisticalApi";

export const gettongsanphamNhap = createAsyncThunk(
  "tongnhapsanpham/gettongsanphamNhap",
  async () => {
    const { data: getexport } = await getAllsanphamNhap();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const sanphamNhap = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettongsanphamNhap.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = sanphamNhap.actions;

export default sanphamNhap.reducer;
