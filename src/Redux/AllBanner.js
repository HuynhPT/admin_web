import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll } from "../API/ImageAPI";
import { mToken } from "../../token/TokenLogin";
import {
  LOCALHOST,
  URL_DELETE_ALL_IMG,
  URL_GET_IMG_TITLE,
  URL_REMOVE_ID_IMG,
  URL_UPDATE_IMG,
} from "../API/ALLAPI";
export const getBanner = createAsyncThunk("banners/getBanner",
 async () => {
  const { data: banner } = await getAll();
  console.log(banner);
  return banner.data;
});

export const getBannertitle = createAsyncThunk(
  "banners/getBannertitle",
  async (data) => {
    let bannners = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_GET_IMG_TITLE}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        bannners = res.data.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return bannners;
  }
);

export const delBanner = createAsyncThunk(
  "banners/delBanner",
  async (id) => {
    let banners = [];
    await axios({
      url: `${LOCALHOST}` + `${URL_REMOVE_ID_IMG}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data : qs.stringify(id)
    }).then(
      async (res) => {
        
        const { data: banner } = await getAll();
        console.log(banner.data,'aaa');
        banners = banner.data;

      },

      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;

  });
export const delallBanner = createAsyncThunk(
  "banners/delallBanner",
  async (data) => {
    console.log(data);
    let banners = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_DELETE_ALL_IMG}`,
      method: "delete",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
        }).then(
      async (res) => {
        const { data: banner } = await getAll();
        banners = banner.data;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;
  }
);
export const upBanner = createAsyncThunk("banners/upBanner", async (data) => {
  console.log(data);
  let banners = [];
  await axios({
    url: `${LOCALHOST}` + `${URL_UPDATE_IMG}`,
    method: "PUT",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    //d
    async (res) => {
      const { data: banner } = await getAll();
      banners = banner.data;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  return banners;
});
export const searchBanner = createAsyncThunk(
  "imgFirstImages/searchBanner",
  async (data) => {
    console.log(data);
    let banners = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_GET_IMG_TITLE}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: banner } = await getAll();
        banners = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return banners;
  }
);
const bannerSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getBannertitle.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delallBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delBanner.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    // builder.addCase(searchBanner.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
    // builder.addCase(upBanner.fulfilled, (state, action) => {
    //   console.log(action.payload);
    //   state.value = action.payload;
    //   // action is inferred correctly here if using TS
    // });
  },
});

export const { loginStart, loginSuccess, loginFailed } = bannerSlice.actions;

export default bannerSlice.reducer;
