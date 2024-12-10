import {
  type PropsWithChildren,
  createContext,
  useState,
  useContext,
  useMemo,
} from "react";

export enum formTypeEnum {
  login = "login",
  register = "register",
  forgotPassword = "forgotPassword",
}

interface LoginStateContextType {
  formType: formTypeEnum;
  setFormType: (loginState: formTypeEnum) => void;
}

export const LoginStateContext = createContext<LoginStateContextType>({
  formType: formTypeEnum.login,
  setFormType: () => {},
});

export function useLoginStateContext() {
  const context = useContext(LoginStateContext);
  return context;
}

export function LoginProvider({ children }: PropsWithChildren) {
  // 当前显示的表单类型
  const [formType, setFormType] = useState(formTypeEnum.login);

  const contextValue = useMemo(
    () => ({
      formType,
      setFormType,
    }),
    [formType]
  );

  return (
    <LoginStateContext.Provider value={contextValue}>
      {children}
    </LoginStateContext.Provider>
  );
}
