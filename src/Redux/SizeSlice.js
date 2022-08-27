import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getSize } from "../API/ColorSize";
import { mToken } from "../../token/TokenLogin";
import {
  LOCALHOST,
  URL_DELETE_ALL_SIZE,
  URL_POST_SIZE,
  URL_REMOVE_ID_SIZE,
  URL_UPDATE_ID_SIZE,
} from "../API/ALLAPI";
export const getSizecolor = createAsyncThunk(
  "sizecolor/getSizecolor",
  async () => {
    const { data: sizes } = await getSize();
    console.log(sizes);
    return sizes.result;
  }
);
export const addSizecolor = createAsyncThunk(
  "sizecolor/addSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_POST_SIZE}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const delAllSizecolor = createAsyncThunk(
  "sizecolor/delAllSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_DELETE_ALL_SIZE}`,
      method: "DELETE",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const removeSizecolor = createAsyncThunk(
  "sizecolor/removeSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_REMOVE_ID_SIZE}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const upSizecolor = createAsyncThunk(
  "sizecolor/upSizecolor",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_UPDATE_ID_SIZE}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: sizes } = await getSize();
        col = sizes.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
const sizeslice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(addSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delAllSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    // builder.addCase(searchColorsize.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
    builder.addCase(upSizecolor.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = sizeslice.actions;

export default sizeslice.reducer;
