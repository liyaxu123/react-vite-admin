import { useContext, useState } from "react";
import { Button, Form, Input, Statistic } from "antd";
import type { FormProps, CountdownProps } from "antd";
import {
  UserOutlined,
  LockOutlined,
  SafetyOutlined,
  MailOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { motion } from "motion/react";
import { LoginStateContext, formTypeEnum } from "./providers/LoginProvider";
import { getRegisterCaptcha, register } from "@/api/systerm/userService";
import { toast } from "sonner";

type FieldType = {
  username: string;
  password: string;
  nickName: string;
  email: string;
  captcha: string;
};

const { Countdown } = Statistic;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const [getEmailCaptchaDisabled, setGetEmailCaptchaDisabled] = useState(false);
  const { setFormType } = useContext(LoginStateContext);

  const onCountdownFinished: CountdownProps["onFinish"] = () => {
    setGetEmailCaptchaDisabled(false);
  };

  const getEmailCaptcha = async () => {
    try {
      const { email } = await form.validateFields(["email"]);
      setGetEmailCaptchaDisabled(true);
      const res = await getRegisterCaptcha(email);
      toast.success(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      await register(values);
      toast.success("注册成功，请登录");
      setFormType(formTypeEnum.login);
    } catch (err: any) {
      toast.error(err);
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
      className="w-[100%] lg:w-[420px] py-10 px-5 lg:bg-[#F9FAFB] lg:rounded-2xl dark:bg-color-bg-container"
    >
      <div className="flex flex-col items-center gap-3 mb-10">
        <h5 className="text-xl font-bold">注册</h5>
      </div>

      <Form form={form} size="large" onFinish={handleSubmit} autoComplete="off">
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

        <Form.Item<FieldType>
          label=""
          name="nickName"
          rules={[{ required: true, message: "请输入昵称" }]}
        >
          <Input placeholder="请输入昵称" prefix={<TagOutlined />} />
        </Form.Item>

        <Form.Item<FieldType>
          name="email"
          rules={[
            { required: true, message: "请输入邮箱" },
            { type: "email", message: "请输入正确的邮箱" },
          ]}
        >
          <Input placeholder="请输入邮箱" prefix={<MailOutlined />} />
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
            <Button
              disabled={getEmailCaptchaDisabled}
              style={{ width: 110 }}
              onClick={getEmailCaptcha}
            >
              {getEmailCaptchaDisabled ? (
                <Countdown
                  value={Date.now() + 60 * 1000}
                  format="ss"
                  suffix="秒后再获取"
                  valueStyle={{ fontSize: 14 }}
                  onFinish={onCountdownFinished}
                />
              ) : (
                <>获取验证码</>
              )}
            </Button>
          </div>
        </Form.Item>

        <Form.Item label={null}>
          <Button block type="primary" htmlType="submit">
            注册
          </Button>
        </Form.Item>

        <Form.Item label={null}>
          <div className="flex flex-col items-center justify-center gap-4 text-sm text-[#1877F2]">
            <p className="text-[#637381]">
              已有账号
              <a
                className="mx-1 leading-[22px] text-[#1877F2] underline hover:underline underline-offset-4 cursor-pointer"
                onClick={() => setFormType(formTypeEnum.login)}
              >
                去登录
              </a>
            </p>

            <p className="text-[#637381]">
              注册即表示同意
              <a className="mx-1 leading-[22px] text-[#1877F2] underline hover:underline underline-offset-4">
                服务条款
              </a>
              &
              <a className="mx-1 leading-[22px] text-[#1877F2] underline hover:underline underline-offset-4">
                隐私政策
              </a>
            </p>
          </div>
        </Form.Item>
      </Form>
    </motion.div>
  );
};

export default RegisterForm;
