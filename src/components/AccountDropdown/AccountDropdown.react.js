// @flow
import * as React from "react";
import { Dropdown, Avatar } from "../";

import type { itemObject } from "../Dropdown/Dropdown.react";

type defaultOptionType =
  | "profile"
  | "settings"
  | "mail"
  | "message"
  | "divider"
  | "help"
  | "logout";

type optionsType = Array<defaultOptionType | itemObject>;

type defaultOptionsType = { [defaultOptionType]: itemObject };

type Props = {|
  +avatarURL?: string,
  +name?: string,
  +description?: string,
  +options?: optionsType,
|};

const defaultOptions: defaultOptionsType = {
  profile: { icon: "user", value: "Profile", to: "/profile" },
  settings: { icon: "settings", value: "Settings", to: "/settings" },
  mail: { icon: "mail", value: "Inbox", badge: "6", to: "/mail" },
  message: { icon: "send", value: "Message", to: "/message" },
  help: { icon: "help-circle", value: "Need help?", to: "/help" },
  logout: { icon: "log-out", value: "Sign out", to: "/logout" },
  divider: { isDivider: true },
};

const itemsFromDefaultOptions = (options: optionsType) =>
  options.map(opt => (typeof opt === "string" ? defaultOptions[opt] : opt));

function AccountDropdown({
  avatarURL,
  name,
  description,
  options,
}: Props): React.Node {
  const itemsObjects = itemsFromDefaultOptions(defaultOptions);

  return (
    <Dropdown
      isNavLink
      triggerClassName="pr-0 leading-none"
      triggerContent={
        <React.Fragment>
          <Avatar imageURL={avatarURL} />
          <span className="ml-2 d-none d-lg-block">
            <span className="text-default">{name}</span>
            <small className="text-muted d-block mt-1">{description}</small>
          </span>
        </React.Fragment>
      }
      position="bottom-end"
      arrow={true}
      arrowPosition="right"
      toggle={false}
      itemsObject={itemsObjects}
    />
  );
}

export default AccountDropdown;
