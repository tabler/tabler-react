import React, { useState } from "react";
import Button, { ButtonProps } from "./Button";
import { Manager, Reference } from "react-popper";
import DropdownMenu, { DropdownMenuProps } from "../Dropdown/DropdownMenu";

import { ReferenceChildrenProps } from "react-popper";

export interface ButtonDropdownProps extends ButtonProps {
  dropdownProps?: DropdownMenuProps;
  value?: string;
}

const ButtonDropdown = function({
  children,
  value,
  dropdownProps,
  ...buttonProps
}: ButtonDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const _handleButtonOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsOpen(s => !s);
  };

  return (
    <Manager>
      <Reference>
        {({ ref }: ReferenceChildrenProps) => {
          return (
            <Button
              onClick={_handleButtonOnClick}
              rootRef={ref}
              isDropdownToggle={true}
              {...buttonProps}
            >
              {value}
            </Button>
          );
        }}
      </Reference>
      <DropdownMenu show={isOpen} {...dropdownProps}>
        {children}
      </DropdownMenu>
    </Manager>
  );
};

export default ButtonDropdown;
