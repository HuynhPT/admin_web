import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { getAll } from "../API/TypeProductAPI";
import { mToken } from "../../token/TokenLogin";
import {
  LOCALHOST,
  URL_DELETE_ALL_OPJECT,
  URL_POST_OPJECT,
  URL_REMOVE_ID_OPJECT,
  URL_SEARCH_OPJECT,
  URL_UPDATE_ID_OPJECT,
} from "../API/ALLAPI";
export const getTypeProduct = createAsyncThunk(
  "typeProduct/getTypeProduct",
  async () => {
    const { data: product } = await getAll();
    console.log(product);
    return product.result;
  }
);
export const dellAllTypeProduct = createAsyncThunk(
  "typeProduct/dellAllTypeProduct",
  async (id) => {
    let products = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_DELETE_ALL_OPJECT}`,
      method: "DELETE",
      headers: {
        token: mToken,
        "Content-Type": "application/json",
      },
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        products = product.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
export const addTypeProduct = createAsyncThunk(
  "typeProduct/addTypeProduct",
  async (data) => {
    let products = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_POST_OPJECT}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        products = product.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
export const delTypeProduct = createAsyncThunk(
  "typeProduct/delTypeProduct",
  async (id) => {
    let products = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_REMOVE_ID_OPJECT}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(id),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        products = product.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return products;
  }
);
export const upTypeProduct = createAsyncThunk(
  "typeProduct/upTypeProduct",
  async (data) => {
    let products = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_UPDATE_ID_OPJECT}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: product } = await getAll();
        products = product.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );

    return products;
  }
);
export const searchTypeproduct = createAsyncThunk(
  "opjectcategori/searchTypeproduct",
  async (data) => {
    let categoriss = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_SEARCH_OPJECT}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        console.log(res);
        categoriss = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return categoriss;
  }
);
const typeProductSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(dellAllTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload, "fdfff");
      state.value = action.payload;
    });
    builder.addCase(upTypeProduct.fulfilled, (state, action) => {
      console.log(action.payload, "fdfff");
      state.value = action.payload;
    });
    builder.addCase(searchTypeproduct.fulfilled, (state, action) => {
      console.log(action.payload, "fdfff");
      state.value = action.payload;
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } =
  typeProductSlice.actions;

export default typeProductSlice.reducer;
