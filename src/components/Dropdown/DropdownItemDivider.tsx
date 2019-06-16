import React from "react";
import { ELProps } from "../../helpers/makeHtmlElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface DropdownItemDividerProps
  extends ELProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

/**
 * Used to seperate items within a Dropdown with a horizontal line
 */
function DropdownItemDivider({ children, ...rest }: DropdownItemDividerProps) {
  return (
    <El.Div className="dropdown-divider" {...rest}>
      {children}
    </El.Div>
  );
}

export default DropdownItemDivider;
