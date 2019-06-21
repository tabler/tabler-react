import React from "react";
import Dropdown from "../Dropdown";
import Avatar from "../Avatar";

import { itemObject, DropdownProps } from "../Dropdown/Dropdown";
import Nav from "../Nav";

type defaultOptionType =
  | "profile"
  | "settings"
  | "mail"
  | "message"
  | "divider"
  | "help"
  | "logout";

type optionsType = Array<defaultOptionType | itemObject>;

type defaultOptionsType = { [K in defaultOptionType]: Object | itemObject };

export interface Props extends DropdownProps {
  /**
   * URl of the avatar image
   */
  avatarURL?: string;
  /**
   * The account name to be displayed
   */
  name?: string;
  /**
   * The account description
   */
  description?: string;
  /**
   * An array of the option items within the Dropdown
   */
  options?: optionsType;
  /**
   * The default RootComponent for all options.
   * optionsObjects[x].RootComponent takes priority
   */
  optionsRootComponent?: React.ElementType;
}

const defaultOptions: defaultOptionsType = {
  profile: { icon: "user", value: "Profile", to: "/profile" },
  settings: { icon: "settings", value: "Settings", to: "/settings" },
  mail: { icon: "mail", value: "Inbox", to: "/mail" },
  message: { icon: "send", value: "Message", to: "/message" },
  help: { icon: "help-circle", value: "Need help?", to: "/help" },
  logout: { icon: "log-out", value: "Sign out", to: "/logout" },
  divider: { isDivider: true },
};

const itemsFromDefaultOptions = (options: optionsType) =>
  options.map(opt => (typeof opt === "string" ? defaultOptions[opt] : opt));

/**
 * A component for fast creation of an account centric dropdown
 */
export function AccountDropdown({
  avatarURL,
  name,
  description,
  options = [],
  optionsRootComponent,
  ...rest
}: Props) {
  const itemsObjects = itemsFromDefaultOptions(options);

  return (
    <Dropdown
      as={Nav.Item}
      link={false}
      triggerClassName="d-flex align-items-center py-0 px-lg-0 px-2 text-color ml-2"
      triggerAs={Nav.Link}
      triggerContent={
        <React.Fragment>
          {avatarURL && <Avatar imageURL={avatarURL} />}
          <span className="ml-2 d-none d-lg-block leading-none">
            <span>{name}</span>
            <span className="text-muted d-block mt-1 text-h6">
              {description}
            </span>
          </span>
        </React.Fragment>
      }
      position="bottom-end"
      arrow={true}
      arrowPosition="right"
      toggle={false}
      itemsObject={itemsObjects}
      itemsRootComponent={optionsRootComponent}
      {...rest}
    />
  );
}

export default AccountDropdown;
