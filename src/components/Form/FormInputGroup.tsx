import * as React from "react";
import cn from "classnames";
import FormInputGroupAppend from "./FormInputGroupAppend";
import FormInputGroupPrepend from "./FormInputGroupPrepend";
import FormInput from "./FormInput";

type Props = {
  children?: React.ReactNode;
  className?: string;
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  RootComponent?: React.ElementType;
  inputProps?: any;
};

function FormInputGroup(props: Props) {
  const { className, append, prepend, RootComponent, inputProps } = props;
  const classes = cn(
    {
      "input-group": true,
    },
    className
  );
  const Component = RootComponent || "div";
  const children = inputProps ? <FormInput {...inputProps} /> : props.children;

  if (prepend === true) {
    return <FormInputGroupPrepend>{children}</FormInputGroupPrepend>;
  }

  if (append === true) {
    return <FormInputGroupAppend>{children}</FormInputGroupAppend>;
  }

  return (
    <Component className={classes}>
      {prepend && <FormInputGroupPrepend>{prepend}</FormInputGroupPrepend>}
      {children}
      {append && <FormInputGroupAppend>{append}</FormInputGroupAppend>}
    </Component>
  );
}

FormInputGroup.displayName = "Form.InputGroup";

export default FormInputGroup;
