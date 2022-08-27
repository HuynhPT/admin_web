import React from "react";
import { Form, Input, Button, Checkbox } from "antd";

function TextInput(props) {
  const [form] = Form.useForm();

  return (
    <>
      <Form.Item
        name={props.name}
        rules={[
          {
            required: true,
            message: props.message,
          },
        ]}
      >
        <Input
          prefix={props.Outlined}
          placeholder={props.placeholder}
          type={props.type}
          // onChange={props.onChange}
        />
      </Form.Item>
    </>
  );
}

export default TextInput;
