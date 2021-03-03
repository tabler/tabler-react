import React, { useState } from "react";
import Button, { ButtonProps } from "./Button";
import { Manager, Reference } from "react-popper";
import DropdownMenu, { DropdownMenuProps } from "../Dropdown/DropdownMenu";

export type ButtonDropdownProps = ButtonProps & {
  dropdownProps?: DropdownMenuProps;
  value?: string;
};

const ButtonDropdown = function ({
  children,
  value,
  dropdownProps,
  ...buttonProps
}: ButtonDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const _handleButtonOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(s => !s);
  };

  return (
    <Manager>
      <Reference>
        {({ ref }: any) => {
          return (
            <Button
              onClick={_handleButtonOnClick}
              rootRef={ref as any}
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
