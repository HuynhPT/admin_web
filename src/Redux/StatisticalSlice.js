import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { getAllSELl } from "../API/StatisticalApi";

export const getAllsel = createAsyncThunk("statiscal/getAllsel", async () => {
  const { data: statiscals } = await getAllSELl();
  console.log(statiscals);
  return statiscals.result;
});
const StatisticalSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllsel.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    //   builder.addCase(upUser.fulfilled, (state, action) => {
    //     console.log(action.payload);
    //     state.value = action.payload;
    //     // action is inferred correctly here if using TS
    //   });
    //   builder.addCase(removeUser.fulfilled, (state, action) => {
    //     console.log(action.payload);
    //     state.value = action.payload;
    //     // action is inferred correctly here if using TS
    //   });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  StatisticalSlice.actions;

export default StatisticalSlice.reducer;
