import { useContext, useState } from "react";
import { Button, Form, Input, Divider, message } from "antd";
import type { FormProps } from "antd";
import {
  UserOutlined,
  LockOutlined,
  GithubOutlined,
  WechatOutlined,
  AlipayOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import { motion } from "motion/react";
import { LoginStateContext, formTypeEnum } from "./providers/LoginProvider";
import { useNavigate } from "react-router";
import { UserApi, login } from "@/api/systerm/userService";

type FieldType = {
  username: string;
  password: string;
  captcha: string;
};

const LoginForm = () => {
  const navigate = useNavigate();
  const { setFormType } = useContext(LoginStateContext);
  const [captchaImageSrc, setCaptchaImageSrc] = useState<string>(
    UserApi.CaptchaImage
  );

  const handleLogin: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res = await login(values);
      console.log(res);
      message.success("登录成功");
      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{
        duration: 0.4,
      }}
      className="w-[100%] lg:w-[420px] h-[560px] lg:h-[534px] py-10 px-5 lg:bg-[#F9FAFB] lg:rounded-2xl"
    >
      <div className="flex flex-col items-center gap-3 mb-10">
        <h5 className="font-sans text-xl font-bold font-notoSansSC">登录</h5>
      </div>

      <Form size="large" onFinish={handleLogin} autoComplete="off">
        <Form.Item<FieldType>
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
        </Form.Item>

        <Form.Item<FieldType>
          label=""
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
        </Form.Item>

        <Form.Item
          label={null}
          name="captcha"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <div className="flex h-full gap-2">
            <Input
              placeholder="请输入验证码"
              className="flex-1"
              prefix={<SafetyOutlined />}
            />
            <img
              src={captchaImageSrc}
              alt="验证码"
              className="w-20 cursor-pointer"
              onClick={() =>
                setCaptchaImageSrc(`${UserApi.CaptchaImage}?time=${Date.now()}`)
              }
            />
          </div>
        </Form.Item>

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>

        <Form.Item label={null}>
          <div className="flex justify-between text-sm text-[#1877F2]">
            <p className="text-[#637381]">
              还没有账户？
              <a
                className="leading-[22px] text-[#1877F2] hover:underline underline-offset-4"
                onClick={() => setFormType(formTypeEnum.register)}
              >
                立即注册
              </a>
            </p>
            <a className="hover:underline underline-offset-4">忘记密码?</a>
          </div>
        </Form.Item>

        <Divider plain>
          <span className="text-gray-400">其他登录方式</span>
        </Divider>

        <div className="flex items-center justify-center gap-10 pt-2 text-xl">
          <WechatOutlined style={{ cursor: "pointer" }} />
          <GithubOutlined style={{ cursor: "pointer" }} />
          <AlipayOutlined style={{ cursor: "pointer" }} />
        </div>
      </Form>
    </motion.div>
  );
};

export default LoginForm;
