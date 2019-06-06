import Dropdown from "./Dropdown";

import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import DropdownItemDivider from "./DropdownItemDivider";

const CompoundDropdown = Object.assign(Dropdown, {
  Trigger: DropdownTrigger,
  Menu: DropdownMenu,
  Item: DropdownItem,
  ItemDivider: DropdownItemDivider,
});

export {
  CompoundDropdown as default,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownItemDivider,
};
