import Button from "./Button";
import ButtonList from "./ButtonList";
import ButtonDropdown from "./ButtonDropdown";

const CompoundButton = Button as typeof Button & {
  List: typeof ButtonList;
  Dropdown: typeof ButtonDropdown;
};

CompoundButton.List = ButtonList;
CompoundButton.Dropdown = ButtonDropdown;

export { CompoundButton as default, Button, ButtonList, ButtonDropdown };
