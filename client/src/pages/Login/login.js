import React from "react";
import { Form, Input, message } from "antd";
import Button from "../../Components/Button";
import { Link, useNavigate } from "react-router-dom";
import { LoginUser } from "../../ApiCalls/user";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const onFinish = async (values) => {
    try {
      const response = await LoginUser(values);
      console.log(response);
      if (response.success) {
        message.success(response.message);
        localStorage.setItem("tokenForBms", response.data);
        navigate("/");
      } else {
        message.error(response.message || "Invalid Credentials");
      }
    } catch (error) {
      message.error("Invalid Credentials");
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-red-500">
      <div className="flex flex-col gap-4 justify-center items-center p-10 bg-white rounded-md">
        <h1 className="text-3xl font-bold text-black tracking-tight">
          Log in, BookMyShow!
        </h1>
        <Form
          layout="verticle"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
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
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button title="Login" fullwidth />

            <div className="mt-4">
              <Link to={"/register"} className="text-blue-400 text-sm">
                Don't have an account?
              </Link>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
