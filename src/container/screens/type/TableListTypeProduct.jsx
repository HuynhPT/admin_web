import {
  Space,
  Table,
  Radio,
  Divider,
  Input,
  Image,
  Button,
  Popconfirm,
  Modal,
  AutoComplete,
} from "antd";
import { useEffect, useState } from "react";
import {
  EditOutlined,
  DeleteOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  delallopjectCategori,
  delopjectCategori,
  getListIdopjectCategori,
  getOpjectCategori,
  searchopjectCategori,
} from "../../../Redux/OjectCategoriSlice";
import SelectMenWomen from "../../../Components/products/SelectMenWomen";
import SelectOptionTypeProduct from "../../../Components/products/SelectOptionTypeProduct";
import SelectFilter from "../../../Components/type/SelectFilter";
import { LOCALHOST, URL_GET_ALL_OPJECT } from "../../../API/ALLAPI";
const TableObjectProduct = () => {
  const { Search } = Input;
  // khai báo state
  const [isModalDelALl, setisModalDelALl] = useState(false);
  const [data, setData] = useState();
  const [dataLable, setDataLable] = useState("Lọc");
  const [searchLable, setSearchLable] = useState("");

  // lấy type selecte
  useEffect(() => {
    fetch(`${LOCALHOST}` + `${URL_GET_ALL_OPJECT}`)
      .then((res) => res.json())
      .then((dataOp) => {
        const otpn = [];
        dataOp.result.map((item) => {
          otpn.push({ label: item.titleTypeProduct, value: item._id });
        });
        setData(otpn);
      });
  }, []);

  // tham chiếu
  const dispatch = useDispatch();
  const ListOpject = useSelector((data) => data.categoris.value);

  // lấy danh sách theo id
  const handleChange = (values) => {
    setDataLable(values);
    dispatch(getListIdopjectCategori({ idTypeProduct: values }));
  };
  // tìm kiếm
  const onSearch = (value) => {
    setTimeout(() => {
      dispatch(searchopjectCategori({ titleCategoryProduct: value }));
    }, 1000);
  };

  // modal xoá
  const showmodaldell = () => {
    setisModalDelALl(true);
  };
  const handleXoa = () => {
    dispatch(delallopjectCategori());
    setisModalDelALl(false);
    message.success({
      content: "Xoá thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      duration: 2,
    });
  };
  const handleHuy = () => {
    setisModalDelALl(false);
  };

  // get dữ liệu
  useEffect(() => {
    dispatch(getOpjectCategori());
  }, []);

  const deletee = (data) => {
    dispatch(delopjectCategori({ idCategoryProduct: data }));
    message.success({
      content: "Xoá thành công",
      className: "custom-class",
      style: {
        color: "#52c41a",
      },
      icon: () => <CheckCircleTwoTone twoToneColor="#52c41a" />,
      duration: 2,
    });
  };
  const columns = [
    {
      title: "STT",
      dataIndex: "_id",
      render: (_id, data, index) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{index + 1}</p>
        </div>
      ),
    },
    {
      title: "Ảnh",
      dataIndex: "categoryImgProduct",
      render: (categoryImgProduct) => (
        <Image src={categoryImgProduct} alt="" style={{ width: 50 }} />
      ),
    },
    {
      title: "Tên thể loại",
      dataIndex: "titleCategoryProduct",
      render: (titleCategoryProduct) => (
        <div
          style={{
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <p>{titleCategoryProduct}</p>
        </div>
      ),
    },

    {
      title: "Hoạt động",
      dataIndex: "_id",
      render: (_id, data) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link to={`/edit_list_type/${_id}`}>
            <p style={{ color: "blue" }}>Sửa</p>
          </Link>

          <Popconfirm
            title="Bạn có chắc chắn muốn xoá không?"
            onConfirm={() => deletee(data)}
            okText="Xoá"
            cancelText="Huỷ"
          >
            <p
              style={{ width: 50, cursor: "pointer", color: "blue" }}
              size={24}
            >
              Xoá
            </p>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <>
      {/* chức năng */}
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          {/* load lại */}
          <Button
            type="primary"
            style={{
              margin: "0 5px 0 0",
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
            }}
            onClick={() => {
              dispatch(getOpjectCategori());
              setSearchLable("");
              setDataLable("Lọc");
            }}
          >
            <ReloadOutlined />
          </Button>
          {/* xoá tất cả */}
          <Button
            type="primary"
            style={{
              backgroundColor: "#D9D9D9",
              border: "1px solid #D9D9D9 ",
              margin: "0 5px 0 0",
            }}
            onClick={showmodaldell}
          >
            <p style={{ color: "#000" }}>Xoá tất cả</p>
          </Button>
          {/* Lọc */}
          <div style={{ width: "50%" }}>
            <SelectFilter
              options={data}
              onChange={handleChange}
              value={dataLable}
            />
          </div>
        </div>
        {/* Tìm kiếm */}
        <AutoComplete
          onSearch={onSearch}
          style={{ width: "30%", borderRadius: 3, marginBottom: 8 }}
        >
          <Search
            placeholder="Tìm kiếm theo tên"
            onChange={(e) => setSearchLable(e.target.value)}
            value={searchLable}
          />
        </AutoComplete>
      </div>
      <Table
        columns={columns}
        rowKey={(item) => item._id}
        dataSource={ListOpject}
        style={{
          height: "100%",
        }}
      />
      <Modal title="Cảnh báo !" visible={isModalDelALl} footer={null}>
        <p>Bạn có chắc chắn muốn xoá hay không?</p>
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
            onClick={handleXoa}
          >
            Xoá
          </button>
        </div>
      </Modal>
    </>
  );
};

export default TableObjectProduct;
