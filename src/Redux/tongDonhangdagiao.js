import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllbillcomplete } from "../API/StatisticalApi";
export const gettongDonhangdagiao = createAsyncThunk(
  "allbillcomplete/gettongDonhangdagiao",
  async () => {
    const { data: getexport } = await getAllbillcomplete();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const tongDonhangdagiao = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettongDonhangdagiao.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  tongDonhangdagiao.actions;

export default tongDonhangdagiao.reducer;
