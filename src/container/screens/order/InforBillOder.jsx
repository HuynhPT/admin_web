import { Modal, Steps } from "antd";
import axios from "axios";
import QueryString from "qs";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mToken } from "../../../../token/TokenLogin";
import {
  LOCALHOST,
  URL_GET_ALL_BILL,
  URL_GET_ID_BILL_DETALS,
} from "../../../API/ALLAPI";
import "./infro.css";
import { useDispatch, useSelector } from "react-redux";
import { getBillProduct, statusBill } from "../../../Redux/BillSlice";
import { getBill } from "../../../API/BillApi";
function InforBillOder() {
  const { id } = useParams();

  const dispatch = useDispatch();
  const databill = useSelector((data) => data.bills.value);
  const [data, setData] = useState(databill);
  const [dataall, setDataAll] = useState();
  const [currentStep, setCurrentStep] = useState();
  const [disabled1, setDisable1] = useState(false);
  const [disabled2, setDisable2] = useState(false);
  const [disabled3, setDisable3] = useState(false);
  const [disabled4, setDisable4] = useState(false);
  const [disabled, setDisable] = useState(false);

  const [curent, setCurrent] = useState();
  const [isModal, setisModal] = useState(false);
  const { Step } = Steps;

  useEffect(() => {
    dispatch(getBillProduct());
    const newData = databill.find((item) => item._id == id);
    setData(newData);
    if (data?.status === 0) {
      setDisable(true);
    } else if (data?.status === 1) {
    }
  }, []);
  useEffect(() => {
    axios({
      url: `${LOCALHOST}` + `${URL_GET_ID_BILL_DETALS}`,
      method: "POST",
      headers: {
        token: mToken,
        "content-type": "application/x-www-form-urlencoded",
      },
      data: QueryString.stringify({ idBill: id }),
    }).then((resl) => {
      setDataAll(resl.data.billDetails);
    });
  }, []);

  const Showmodal = (index) => {
    setCurrentStep(index);
    setisModal(true);
  };
  const handleHuy = () => {
    setisModal(false);
  };
  const handleXacnhan = () => {
    if (currentStep === 0) {
      setCurrent(0);
      setisModal(false);
      setDisable(true);
      dispatch(
        statusBill({
          idBill: id,
          status: 0,
        })
      );
    } else if (currentStep === 1) {
      setCurrent(1);
      setisModal(false);
      setDisable(true);
      dispatch(
        statusBill({
          idBill: id,
          status: 1,
        })
      );
    } else if (currentStep === 2) {
      setCurrent(2);
      setisModal(false);
      setDisable(true);
      setDisable1(true);
      dispatch(
        statusBill({
          idBill: id,
          status: 2,
        })
      );
    } else if (currentStep === 3) {
      setCurrent(3);
      setisModal(false);

      setDisable(true);
      setDisable1(true);
      setDisable2(true);
      dispatch(
        statusBill({
          idBill: id,
          status: 3,
        })
      );
    } else if (currentStep === 4) {
      setCurrent(4);
      setisModal(false);

      setDisable(true);
      setDisable1(true);
      setDisable2(true);
      setDisable3(true);
      dispatch(
        statusBill({
          idBill: id,
          status: 4,
        })
      );
    } else if (currentStep === 5) {
      setCurrent(5);
      setisModal(false);

      setDisable(true);
      setDisable1(true);
      setDisable2(true);
      setDisable3(true);
      setDisable4(true);
      dispatch(
        statusBill({
          idBill: id,
          status: 5,
        })
      );
    }
  };
  const dataPrice = [];
  dataall?.map((item) => dataPrice.push(item.price * item.quantity));
  let sum = 0;
  for (let i = 0; i < dataPrice?.length; i++) {
    sum += dataPrice[i];
  }
  return (
    <div className="_allcontai">
      <div className="_cntai">
        <p className="_textHeader_m">Thông tin chi tiết hoá đơn</p>
        <div style={{ paddingTop: 10 }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className="_title_m">Trạng thái đơn hàng:</p>
            <p className="_title_m">Ngày: {data?.createdAt?.slice(0, -14)}</p>
          </div>
          <Steps
            current={curent === undefined ? data?.status : curent}
            // onChange={onStepsChange}
            size="small"
            type="default"
          >
            <Step
              title="Đơn hàng"
              description="Chờ xác nhận"
              onStepClick={Showmodal}
              disabled={disabled}
            />
            <Step
              title="Đơn hàng"
              description="Đang xử lý"
              onStepClick={Showmodal}
              disabled={disabled1}
            />

            <Step
              title="Đơn hàng"
              description="Đang vận chuyển"
              onStepClick={Showmodal}
              disabled={disabled2}
            />
            <Step
              title="Đơn hàng"
              description="Hoàn thành "
              onStepClick={Showmodal}
              disabled={disabled3}
            />
          </Steps>
        </div>

        <Modal
          title="Cảnh báo !"
          visible={isModal}
          footer={null}
          closable={false}
        >
          <p>Bạn có chắc chắn muốn xác nhận đơn hàng này</p>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={{
                backgroundColor: "#fff",
                border: "1px solid #000",
                margin: 10,
                padding: " 8px 16px",
                borderRadius: 3,
              }}
              onClick={handleHuy}
            >
              Huỷ
            </button>
            <button
              style={{
                backgroundColor: "red",
                border: "1px solid #000",
                margin: 10,
                padding: " 8px 16px",
                color: "#fff",
                borderRadius: 3,
              }}
              onClick={handleXacnhan}
            >
              Đồng ý
            </button>
          </div>
        </Modal>
        <hr />
        <div style={{ display: "flex" }}>
          <p className="_title_m">Thông tin khách hàng:</p>
          <p className="_title_c">
            {data?.firstName} {data?.lastName}
          </p>
          <p className="_title_c">{data?.numberPhone}</p>
          {/* <div className="_all_d"> */}
          <p className="_title_c">{data?.fullAddress},</p>

          <p className="_title_c">{data?.commune},</p>

          <p className="_title_c">{data?.district},</p>

          <p className="_title_c">{data?.cityProvince},</p>
          {/* </div> */}
          <p className="_title_c">Mã bưu điện: {data?.codeZip}</p>
        </div>
        <div style={{ display: "flex" }}>
          <p className="_title_m">Hình thức thanh toán:</p>
          <p className="_title_c">{data?.payment}</p>
        </div>
        <hr />

        <p className="_title_m">Thông tin sản phẩm đơn hàng</p>

        {/* thông tin đơn hàng */}
        {dataall?.map((item) => {
          return (
            <>
              <div className="_all_m">
                <div className="_all_m">
                  <img
                    src={item?.imageProduct}
                    alt=""
                    style={{ width: 30, height: 45 }}
                  />

                  <div style={{ marginTop: 15, width: 500 }}>
                    <p className="_title_l"> Mã sản phẩm: {item?.code}</p>
                    <p className="_title_l">
                      Tên sản phẩm: {item?.titleProduct}
                    </p>
                  </div>
                </div>

                <div style={{ textAlign: "left" }}>
                  <div style={{ display: "flex", paddingTop: -20 }}>
                    <p className="_title_l">Size: {item?.sizeProduct}</p>
                    <p className="_title_l">Màu: </p>
                    <p
                      style={{
                        width: 15,
                        height: 15,
                        marginTop: 5,
                        marginLeft: 10,
                        background: item?.colorProduct,
                      }}
                    ></p>
                  </div>
                  <p className="_title_l">Thương hiệu: {item?.trademark}</p>
                </div>

                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <p className="_title_l">x{item?.quantity}</p>
                  <p className="_title_l">
                    {item?.price
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
                    vnđ
                  </p>
                </div>
              </div>
              {/* <hr style={{ width: "70%", paddingBottom: 10 }} /> */}
            </>
          );
        })}
        <hr />

        <div className="_all_m">
          <p className=" _title_m">Thành tiền :</p>
          <span className="_title_ls">
            {sum.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}
            vnđ
          </span>
        </div>
      </div>
    </div>
  );
}

export default InforBillOder;
