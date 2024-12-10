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
    <MotionContainer className="w-screen h-screen bg-gray-200 flex flex-col items-center justify-center">
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
