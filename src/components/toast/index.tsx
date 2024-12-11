import { Toaster } from "sonner";
import { theme } from "antd";
import type { GlobalToken } from "antd";
import styled from "styled-components";
import Iconify from "../icon/iconify-icon";

const ToasterStyleWrapper = styled.div<{ $theme: GlobalToken }>`
  [data-sonner-toast] {
    font-weight: 600;
    font-size: 14px;

    [data-cancel] {
      color: ${(props) => props.$theme.colorTextBase};
      background-color: transparent;
      &:hover {
        background-color: ${(props) => props.$theme.colorBgTextHover};
      }
    }

    /* Default */
    [data-action] {
      color: ${(props) => props.$theme.colorPrimary};
      background-color: transparent;
      &:hover {
        background-color: ${(props) => props.$theme.colorPrimaryBgHover};
      }
    }

    /* Info */
    &[data-type="info"] [data-action] {
      color: ${(props) => props.$theme.colorInfo};
      background-color: transparent;
      &:hover {
        background-color: ${(props) => props.$theme.colorInfoBgHover};
      }
    }

    /* Error */
    &[data-type="error"] [data-action] {
      color: ${(props) => props.$theme.colorError};
      background-color: transparent;
      &:hover {
        background-color: ${(props) => props.$theme.colorErrorBgHover};
      }
    }

    /* Success */
    &[data-type="success"] [data-action] {
      color: ${(props) => props.$theme.colorSuccess};
      background-color: transparent;
      &:hover {
        background-color: ${(props) => props.$theme.colorSuccessBgHover};
      }
    }

    /* Warning */
    &[data-type="warning"] [data-action] {
      color: ${(props) => props.$theme.colorWarning};
      background-color: transparent;
      &:hover {
        background-color: ${(props) => props.$theme.colorWarningBgHover};
      }
    }

    /* Close Button */
    [data-close-button] {
      top: 0;
      right: 0;
      left: auto;
      border: 1px solid ${(props) => props.$theme.colorBorder};
      border-style: dashed;
      background-color: ${(props) => props.$theme.colorBgContainer};
    }
  }
`;

const Toast = () => {
  const { token } = theme.useToken();
  const {
    colorInfo,
    colorSuccess,
    colorWarning,
    colorError,
    colorBgContainer,
  } = token;

  return (
    <ToasterStyleWrapper $theme={token}>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            backgroundColor: colorBgContainer,
          },
          classNames: {
            toast: "rounded-lg border-0",
						description: "text-xs text-current/45",
						content: "flex-1 ml-2",
						icon: "flex items-center justify-center px-4 rounded-lg",
						success: "bg-[rgba(34,197,94,0.1)]",
						error: "bg-[rgba(255,86,48,0.1)]",
						warning: "bg-[rgba(255,171,0,0.1)]",
						info: "bg-[rgba(0,184,217,0.1)]",
          },
        }}
        icons={{
          success: (
            <div className="p-1.5 rounded-lg bg-[rgba(34,197,94,0.1)]">
              <Iconify
                icon="carbon:checkmark-filled"
                size={24}
                color={colorSuccess}
              />
            </div>
          ),
          error: (
            <div className="p-1.5 rounded-lg bg-[rgba(255,86,48,0.1)]">
              <Iconify
								icon="ant-design:close-circle-filled"
								size={24}
								color={colorError}
							/>
            </div>
          ),
          warning: (
            <div className="p-1.5 rounded-lg bg-[rgba(255,171,0,0.1)]">
              <Iconify
								icon="ant-design:warning-filled"
								size={24}
								color={colorWarning}
							/>
            </div>
          ),
          info: (
            <div className="p-1.5 rounded-lg bg-[rgba(0,184,217,0.1)]">
              <Iconify
								icon="ant-design:info-circle-filled"
								size={24}
								color={colorInfo}
							/>
            </div>
          ),
          loading: (
            <div className="p-1.5 text-gray-400 rounded-lg bg-gray-400/10">
              <Iconify
								icon="svg-spinners:6-dots-scale-middle"
								size={24}
								speed={3}
							/>
            </div>
          ),
        }}
      />
    </ToasterStyleWrapper>
  );
};

export default Toast;
