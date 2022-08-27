import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllbillcomplete, getAllbilldoing } from "../API/StatisticalApi";
export const gettongDonhangdanggiao = createAsyncThunk(
  "danggiao/gettongDonhangdanggiao",
  async () => {
    const { data: getexport } = await getAllbilldoing();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const tongDonhangdanggiao = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettongDonhangdanggiao.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
tongDonhangdanggiao.actions;

export default tongDonhangdanggiao.reducer;
