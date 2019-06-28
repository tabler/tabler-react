import Toast from "./Toast";
import ToastHeader from "./ToastHeader";
import ToastBody from "./ToastBody";

const CompoundToast = Toast as typeof Toast & {
  Header: typeof ToastHeader;
  Body: typeof ToastBody;
};

CompoundToast.Header = ToastHeader;
CompoundToast.Body = ToastBody;

export { CompoundToast as default, Toast, ToastHeader, ToastBody };
