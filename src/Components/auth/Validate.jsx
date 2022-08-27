const Validate = (values) => {
  let errors = {};
  if (!values.email) {
    errors.email = "Xin mời nhập email!";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email không hợp lệ!";
  }
  if (!values.password) {
    errors.password = "Xin mời nhập mật khẩu!";
  } else if (values.password.length < 5) {
    errors.password = "Mật khẩu không được nhỏ hơn 5!";
  }
  if (!values.titleTypeProduct) {
    errors.titleTypeProduct = "Xin mời nhập đối tượng!";
  }

  return errors;
};

export default Validate;
