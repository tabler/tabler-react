import React from "react";
import { TablerComponentProps } from "../../helpers/createTablerElement";
import El from "../El/El";
import { HTMLPropsWithoutRef } from "../../types";

export interface DropdownItemDividerProps
  extends TablerComponentProps,
    HTMLPropsWithoutRef<HTMLDivElement> {}

/**
 * Used to seperate items within a Dropdown with a horizontal line
 */
export function DropdownItemDivider({
  children,
  ...rest
}: DropdownItemDividerProps) {
  return (
    <El.Div className="dropdown-divider" {...rest}>
      {children}
    </El.Div>
  );
}

export default DropdownItemDivider;
