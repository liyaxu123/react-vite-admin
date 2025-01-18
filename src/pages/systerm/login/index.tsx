import { AnimatePresence } from "motion/react";
import MotionContainer from "@/components/animate/motion-container";
import {
  LoginProvider,
  LoginStateContext,
  formTypeEnum,
} from "./providers/LoginProvider";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useContext } from "react";

const Login = () => {
  const { formType } = useContext(LoginStateContext);

  return (
    <MotionContainer className="flex flex-col items-center justify-center w-screen h-screen bg-white lg:bg-gray-200 lg:dark:bg-color-bg-elevated dark:bg-color-bg-container">
      <AnimatePresence mode="wait">
        {formType === formTypeEnum.login ? "登录" : "注册"}
        {formType === formTypeEnum.login && <LoginForm />}
        {formType === formTypeEnum.register && <RegisterForm />}
      </AnimatePresence>
    </MotionContainer>
  );
};

export default () => {
  return (
    <LoginProvider>
      <Login />
    </LoginProvider>
  );
};
