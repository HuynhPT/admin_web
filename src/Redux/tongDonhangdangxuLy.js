import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllbillcomplete, getAllbilldoing, getAllbillxuLy } from "../API/StatisticalApi";
export const gettongDonhangdangxuLy = createAsyncThunk(
  "dangxuly/gettongDonhangdangxuLy",
  async () => {
    const { data: getexport } = await getAllbillxuLy();
    console.log(getexport);
    return getexport.totalItems;
  }
);
const tongDonhangdangxuLy = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(gettongDonhangdangxuLy.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
tongDonhangdangxuLy.actions;

export default tongDonhangdangxuLy.reducer;
