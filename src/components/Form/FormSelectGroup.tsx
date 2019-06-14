import React from "react";
import { TablerComponent } from "../../types";
import El from "../El/El";
import { ELProps } from "../../helpers/makeHtmlElement";

export interface FormSelectGroupProps
  extends TablerComponent,
    ELProps<HTMLDivElement> {
  pills?: boolean;
  canSelectMultiple?: boolean;
}

function FormSelectGroup({
  children,
  pills,
  canSelectMultiple,
  ...rest
}: FormSelectGroupProps) {
  const classNames = {
    selectgroup: true,
    "w-100": true,
    "selectgroup-pills": pills,
  };
  return (
    <El.Div classNames={classNames} {...rest}>
      {canSelectMultiple && children
        ? React.Children.map(children, itm =>
            React.isValidElement(itm)
              ? React.cloneElement(itm, { type: "checkbox" })
              : itm
          )
        : children}
    </El.Div>
  );
}

export default FormSelectGroup;
