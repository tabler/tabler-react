import * as React from "react";
import { Button, Dropdown } from "..";
import { Manager, Reference } from "react-popper";
import { DefaultButtonComponent } from "../Button/Button";
import { Props as DropdownMenuProps } from "../Dropdown/DropdownMenu";

import { ReferenceChildrenProps } from "react-popper";

interface Props extends DefaultButtonComponent {
  value?: string;
  children?: React.ReactNode;
  dropdownProps?: DropdownMenuProps;
}

type State = {
  isOpen: boolean;
};

class ButtonDropdown extends React.Component<Props, State> {
  state = { isOpen: false };

  _handleButtonOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    this.setState(s => ({ isOpen: !s.isOpen }));
  };

  render() {
    const { children, value, dropdownProps, ...buttonProps } = this.props;

    const propsForDropdownMenu: DropdownMenuProps = dropdownProps
      ? Object.assign(dropdownProps, { show: this.state.isOpen })
      : {
          show: this.state.isOpen,
        };

    const dropdownMenu = React.createElement(
      Dropdown.Menu,
      propsForDropdownMenu,
      children
    );

    return (
      <Manager>
        <Reference>
          {({ ref }: ReferenceChildrenProps) => {
            const propsForButton = Object.assign(
              {
                onClick: this._handleButtonOnClick,
                rootRef: ref,
                isDropdownToggle: true,
              },
              buttonProps
            );
            const button = React.createElement(Button, propsForButton, value);
            return button;
          }}
        </Reference>
        {dropdownMenu}
      </Manager>
    );
  }
}

(ButtonDropdown as any).displayName = "Button.Dropdown";

export default ButtonDropdown;
