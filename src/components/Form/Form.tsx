import * as React from "react";

import { FormEvents } from "../../";

export interface Props extends FormEvents {
  children?: React.ReactNode;
  className?: string;
  action?: string;
  method?: string;
  autoComplete: "on" | "off";
}

function Form({
  className,
  children,
  action,
  method,
  onSubmit,
  autoComplete,
}: Props) {
  return (
    <form
      className={className}
      onSubmit={onSubmit}
      action={action}
      method={method}
      autoComplete={autoComplete}
    >
      {children}
    </form>
  );
}

Form.defaultProps = {
  autoComplete: "off",
};

export default Form;
