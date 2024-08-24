import React from "react";
import { Checkbox, Form, Input, message } from "antd";
import Button from "../../Components/Button";
import { Link,useNavigate } from "react-router-dom";
import { RegisterUser } from "../../ApiCalls/user";

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const Register = () => {
  const navigate = useNavigate();  // Initialize useNavigate

  const onFinish = async (values) => {
    try {
      const response = await RegisterUser(values);
      console.log(response);
      if (response.success) {
        message.success(response.message);
        navigate("/login");
      }
    } catch (error) {
      message.error(error);
    }
  };
  
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-red-500">
      <div className="flex flex-col gap-4 justify-center items-center p-10 bg-white rounded-md">
        <h1 className="text-3xl font-bold text-black/70 antialiased tracking-tight">
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
            name="name"
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
            <Button title="Register" fullwidth  type="submit"/>
            {/* <Button type="primary" htmlType="submit" onClick={onFinish}>
        Submit
      </Button> */}
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
