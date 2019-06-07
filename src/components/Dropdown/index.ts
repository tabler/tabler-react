import Dropdown from "./Dropdown";

import DropdownTrigger from "./DropdownTrigger";
import DropdownMenu from "./DropdownMenu";
import DropdownItem from "./DropdownItem";
import DropdownItemDivider from "./DropdownItemDivider";

const CompoundDropdown = Dropdown as typeof Dropdown & {
  Trigger: typeof DropdownTrigger;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownItem;
  ItemDivider: typeof DropdownItemDivider;
};

CompoundDropdown.Trigger = DropdownTrigger;
CompoundDropdown.Menu = DropdownMenu;
CompoundDropdown.Item = DropdownItem;
CompoundDropdown.ItemDivider = DropdownItemDivider;

export {
  CompoundDropdown as default,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownItemDivider,
};
