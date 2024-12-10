import { Button, Form, Input, Divider } from "antd";
import { useContext } from "react";
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

type FieldType = {
  username?: string;
  password?: string;
  code?: string;
};

const LoginForm = () => {
  const { setFormType } = useContext(LoginStateContext);
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{
        duration: 0.4,
      }}
      className="w-[420px] h-[534px] py-10 px-5 bg-[#F9FAFB] rounded-2xl"
    >
      <div className="flex flex-col items-center gap-3 mb-10">
        <h5 className="text-xl font-bold">登录</h5>
      </div>

      <Form size="large" onFinish={onFinish} autoComplete="off">
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
          name="code"
          rules={[{ required: true, message: "请输入验证码" }]}
        >
          <div className="flex h-full gap-2">
            <Input
              placeholder="请输入验证码"
              className="flex-1"
              prefix={<SafetyOutlined />}
            />
            <Button style={{ width: 80 }}>3412</Button>
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
