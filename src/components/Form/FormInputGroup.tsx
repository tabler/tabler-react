import React, { HTMLAttributes } from "react";
import cn from "classnames";
import FormInputGroupAppend from "./FormInputGroupAppend";
import FormInputGroupPrepend from "./FormInputGroupPrepend";
import FormInput, { FormInputProps } from "./FormInput";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";

interface FormInputGroupProps
  extends TablerComponentProps,
    HTMLAttributes<HTMLDivElement> {
  append?: React.ReactNode;
  prepend?: React.ReactNode;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;

  inputProps?: FormInputProps;
}

function FormInputGroup({
  className,
  append,
  prepend,
  RootComponent,
  as,
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
  const Component = RootComponent || as || El.Div;
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
