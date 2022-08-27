import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import { getPostAll } from "../API/PostApi";
import{LOCALHOST,URL_REMOVE_ID_USER_SOCIETY,URL_POST_COMMENT_SOCIETY} from "../API/ALLAPI";
export const getPosst = createAsyncThunk(
  "posts/getPosst",
  async () => {
    const { data: Postdata } = await getPostAll();
    console.log(Postdata);
    return Postdata.result;
  }
);
export const delPost = createAsyncThunk(
  "posts/delPost",
  async (id) => {
    let postt = [];
    await axios({
      url: `${LOCALHOST}` + `${URL_REMOVE_ID_USER_SOCIETY}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data : qs.stringify(id)
    }).then(
      async (res) => {
        
        const { data: Postdata } = await getAll();
        console.log(Postdata.data,'aaa');
        postt = Postdata.data;

      },

      (err) => {
        console.log(err.response, "?");
      }
    );
    return postt;

  });
const postSlice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosst.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delPost.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = postSlice.actions;

export default postSlice.reducer;
