import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import axios from "axios";
import { mToken } from "../../token/TokenLogin";
import {
  getBill,
  getBillNew,
  getBillOld,
  get_sum_bill_status_0,
  get_sum_bill_status_1,
  get_sum_bill_status_2,
  get_sum_bill_status_3,
} from "../API/BillApi";
import { message } from "antd";
import {
  LOCALHOST,
  URL_ADMIN_REMOVE_BILL,
  URL_CHANGE_STATUS_BILL,
  URL_CHANGE_STATUS_PRODUCT,
  URL_DELETE_ALL_BILL,
  URL_GET_ID_USER_BILL,
  URL_SEARCH_BILL_DATE,
  URL_SEARCH_BILL_PHONE,
  URL_SEARCH_ENCODE_BILL,
} from "../API/ALLAPI";
export const getBillProduct = createAsyncThunk(
  "bills/getBillProduct",
  async () => {
    const { data: billoder } = await getBill();
    console.log(billoder);
    return billoder.bill;
  }
);
export const getBillOderNew = createAsyncThunk(
  "bills/getBillOderNew",

  async () => {
    const { data: billoder } = await getBillNew();
    console.log(billoder);
    return billoder.result;
  }
);
export const get_bill_status_0 = createAsyncThunk(
  "bills/get_bill_status_0",

  async () => {
    const { data: billoder } = await get_sum_bill_status_0();
    console.log(billoder);
    return billoder.result;
  }
);
export const get_bill_status_1 = createAsyncThunk(
  "bills/get_bill_status_1",

  async () => {
    const { data: billoder } = await get_sum_bill_status_1();
    console.log(billoder);
    return billoder.result;
  }
);
export const get_bill_status_2 = createAsyncThunk(
  "bills/get_bill_status_2",

  async () => {
    const { data: billoder } = await get_sum_bill_status_2();
    console.log(billoder);
    return billoder.result;
  }
);
export const get_bill_status_3 = createAsyncThunk(
  "bills/get_bill_status_3",

  async () => {
    const { data: billoder } = await get_sum_bill_status_3();
    console.log(billoder);
    return billoder.result;
  }
);
export const getBillOderOld = createAsyncThunk(
  "bills/getBillOderOld",

  async () => {
    const { data: billoder } = await getBillOld();
    console.log(billoder);
    return billoder.result;
  }
);
export const FilterIdus = createAsyncThunk("bills/FilterIdus", async (data) => {
  let billdata = [];

  await axios({
    url: `${LOCALHOST}` + `${URL_GET_ID_USER_BILL}`,
    method: "POST",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      const { data: billoder } = await getBill();
      console.log(billoder);
      billdata = res.data.bill;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  return billdata;
});
export const delAllBill = createAsyncThunk("bills/delAllBill", async (data) => {
  let billdata = [];

  await axios({
    url: `${LOCALHOST}` + `${URL_DELETE_ALL_BILL}`,
    method: "DELETE",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      const { data: billoder } = await getBill();
      console.log(billoder);
      billdata = billoder.bill;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  return billdata;
});
export const removeBillOder = createAsyncThunk(
  "bills/removeBillOder",
  async (data) => {
    console.log(data);
    let billdata = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_ADMIN_REMOVE_BILL}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: billoder } = await getBill();
        console.log(billoder);
        billdata = billoder.bill;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return billdata;
  }
);
export const statusBill = createAsyncThunk("bills/statusBill", async (data) => {
  console.log(data);
  let col = [];

  await axios({
    url: `${LOCALHOST}` + `${URL_CHANGE_STATUS_BILL}`,
    method: "POST",
    headers: {
      token: mToken,
      "content-type": "application/x-www-form-urlencoded",
    },
    data: qs.stringify(data),
  }).then(
    async (res) => {
      const { data: billoder } = await getBill();
      col = billoder.bill;
    },
    (err) => {
      console.log(err.response, "?");
    }
  );
  console.log(col);
  return col;
});
export const searchBillPhone = createAsyncThunk(
  "bills/searchBillPhone",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_SEARCH_BILL_PHONE}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: billoder } = await getBill();
        col = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
export const searchBillDate = createAsyncThunk(
  "bills/searchBillDate",
  async (data) => {
    console.log(data);
    let col = [];

    await axios({
      url: `${LOCALHOST}` + `${URL_SEARCH_BILL_DATE}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify(data),
    }).then(
      async (res) => {
        const { data: billoder } = await getBill();
        col = res.data.result;
      },
      (err) => {
        console.log(err.response, "?");
      }
    );
    return col;
  }
);
const billslice = createSlice({
  name: "auth",
  initialState: {
    value: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBillProduct.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getBillOderNew.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(getBillOderOld.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(FilterIdus.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(delAllBill.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(removeBillOder.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(statusBill.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(searchBillPhone.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(searchBillDate.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(get_bill_status_0.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(get_bill_status_1.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(get_bill_status_2.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
    builder.addCase(get_bill_status_3.fulfilled, (state, action) => {
      console.log(action.payload);
      state.value = action.payload;
      // action is inferred correctly here if using TS
    });
  },
});

export const { loginStart, loginSuccess, loginFailed } = billslice.actions;

export default billslice.reducer;
