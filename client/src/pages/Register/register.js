import React from "react";
import { Checkbox, Form, Input } from "antd";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-red-500">
      <div className="flex flex-col gap-4 justify-center items-center p-10 bg-white rounded-md">
        <h1 className="text-3xl font-bold text-black">
          Register Yourself at, BookMyShow!
        </h1>
        <Form
           layout="verticle"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button title="Register" fullwidth />


<div className="mt-4">
  <Link to={"/login"} className="text-blue-400 text-sm">
    Already have an account?
  </Link>
</div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
