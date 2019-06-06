import Button from "./Button";
import ButtonList from "./ButtonList";
import ButtonDropdown from "./ButtonDropdown";

const CompoundButton = Object.assign(Button, {
  List: ButtonList,
  Dropdown: ButtonDropdown,
});

export { CompoundButton as default, Button, ButtonList, ButtonDropdown };
