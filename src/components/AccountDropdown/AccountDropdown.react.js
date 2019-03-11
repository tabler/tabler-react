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

export type Props = {|
  +avatarURL?: string,
  +name?: string,
  +description?: string,
  /**
   * An array of the option items within the Dropdown
   */
  +options?: optionsType,
  /**
   * The default RootComponent for all options.
   * optionsObjects[x].RootComponent takes priority
   */
  +optionsRootComponent?: React.ElementType,
|};

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
function AccountDropdown({
  avatarURL,
  name,
  description,
  options = [],
  optionsRootComponent,
}: Props): React.Node {
  const itemsObjects = itemsFromDefaultOptions(options);

  return (
    <Dropdown
      isNavLink
      triggerClassName="pr-0 leading-none"
      triggerContent={
        <React.Fragment>
          {avatarURL && <Avatar imageURL={avatarURL} />}
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
      itemsRootComponent={optionsRootComponent}
    />
  );
}

export default AccountDropdown;
