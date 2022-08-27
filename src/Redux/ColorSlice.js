import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getColor } from "../API/ColorSize";
import { mToken } from "../../token/TokenLogin";
import { message } from "antd";
import {
  LOCALHOST,
  URL_DELETE_ALL_COLOR,
  URL_POST_COLOR,
  URL_REMOVE_ID_COLOR,
  URL_SEARCH_COLOR,
  URL_UPDATE_ID_COLOR,
} from "../API/ALLAPI";
export const getColorsize = createAsyncThunk(
  "colorsize/getColorsize",
  async () => {
    const { data: colors } = await getColor();
    console.log(colors);
    return colors.result;
  }
);
export const addColorsize = createAsyncThunk(
  "colorsize/addColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_POST_COLOR}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
        if (res.data.code === 200) {
          const { data: colors } = await getColor();
          col = colors.result;
          message.success({
            content: "Thêm thành công",
            style: { color: "green" },
          });
        } else {
          message.error({
            content: "Thêm thất bại",
            style: { color: "red" },
          });
        }
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const delAllColorsize = createAsyncThunk(
  "colorsize/delAllColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_DELETE_ALL_COLOR}`,
      method: "DELETE",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const removeColorsize = createAsyncThunk(
  "colorsize/removeColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_REMOVE_ID_COLOR}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const searchColorsize = createAsyncThunk(
  "colorsize/searchColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: LOCALHOST + URL_SEARCH_COLOR,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const upColorsize = createAsyncThunk(
  "colorsize/upColorsize",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_UPDATE_ID_COLOR}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: colors } = await getColor();
        col = colors.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
const colorSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(addColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delAllColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(searchColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(upColorsize.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = colorSlice.actions;

export default colorSlice.reducer;
