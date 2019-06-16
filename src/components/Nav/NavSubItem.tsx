import * as React from "react";
import Dropdown from "../Dropdown";
import { TablerComponent } from "../../types";
import { DropdownItemProps } from "../Dropdown/DropdownItem";

export interface NavSubItemProps extends TablerComponent, DropdownItemProps {
  as?: React.ElementType;
  LinkComponent?: React.ElementType;
  /**
   * @deprecated use children
   */
  value?: string;
  [key: string]: any;
}

function NavSubItem({
  children,
  as,
  LinkComponent,
  value,
  ...props
}: NavSubItemProps) {
  const _as = LinkComponent || as;
  const _children = value || children;
  return (
    <Dropdown.Item RootComponent={_as} {...props}>
      {_children}
    </Dropdown.Item>
  );
}

export default NavSubItem;
