import Button from "./Button";
import ButtonList from "./ButtonList";
import ButtonDropdown from "./ButtonDropdown";

const CompoundButton: any = Button;

CompoundButton.List = ButtonList;
CompoundButton.Dropdown = ButtonDropdown;

export { CompoundButton as default, Button, ButtonList, ButtonDropdown };
