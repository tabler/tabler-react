import React, { HTMLAttributes } from "react";
import cn from "classnames";
import FormInputGroupAppend from "./FormInputGroupAppend";
import FormInputGroupPrepend from "./FormInputGroupPrepend";
import FormInput, { FormInputProps } from "./FormInput";
import { TablerComponent } from "../../types";
import El from "../El/El";

interface FormInputGroupProps
  extends TablerComponent,
    HTMLAttributes<HTMLDivElement> {
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  as?: React.ElementType;
  inputProps?: FormInputProps;
}

function FormInputGroup({
  className,
  append,
  prepend,
  RootComponent,
  as = El.Div,
  inputProps,
  children,
  ...rest
}: FormInputGroupProps) {
  const classes = cn(
    {
      "input-group": true,
    },
    className
  );
  const Component = RootComponent || as;
  const _children = inputProps ? <FormInput {...inputProps} /> : children;

  if (prepend === true) {
    return <FormInputGroupPrepend>{children}</FormInputGroupPrepend>;
  }

  if (append === true) {
    return <FormInputGroupAppend>{children}</FormInputGroupAppend>;
  }

  return (
    <Component className={classes} {...rest}>
      {prepend && <FormInputGroupPrepend>{prepend}</FormInputGroupPrepend>}
      {_children}
      {append && <FormInputGroupAppend>{append}</FormInputGroupAppend>}
    </Component>
  );
}

export default FormInputGroup;
