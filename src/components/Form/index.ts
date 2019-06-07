import Form from "./Form";

import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import FormStaticText from "./FormStaticText";
import FormTextarea from "./FormTextarea";
import FormImageCheck from "./FormImageCheck";
import FormImageCheckItem from "./FormImageCheckItem";
import FormColorCheck from "./FormColorCheck";
import FormColorCheckItem from "./FormColorCheckItem";
import FormInputGroup from "./FormInputGroup";
import FormHelp from "./FormHelp";
import FormSelect from "./FormSelect";
import FormFooter from "./FormFooter";
import FormRatio from "./FormRatio";
import FormFieldSet from "./FormFieldSet";
import FormRadio from "./FormRadio";
import FormCheckbox from "./FormCheckbox";
import FormSelectGroup from "./FormSelectGroup";
import FormSelectGroupItem from "./FormSelectGroupItem";
import FormFileInput from "./FormFileInput";
import FormSwitchStack from "./FormSwitchStack";
import FormSwitch from "./FormSwitch";
import FormInputGroupAppend from "./FormInputGroupAppend";
import FormInputGroupPrepend from "./FormInputGroupPrepend";
import FormInputGroupText from "./FormInputGroupText";
import FormMaskedInput from "./FormMaskedInput";
import FormDatePicker from "./FormDatePicker";

const CompoundForm = Form as typeof Form & {
  Group: typeof FormGroup;
  Label: typeof FormLabel;
  Input: typeof FormInput;
  StaticText: typeof FormStaticText;
  Textarea: typeof FormTextarea;
  ImageCheck: typeof FormImageCheck;
  ImageCheckItem: typeof FormImageCheckItem;
  ColorCheck: typeof FormColorCheck;
  ColorCheckItem: typeof FormColorCheckItem;
  InputGroup: typeof FormInputGroup;
  Help: typeof FormHelp;
  Select: typeof FormSelect;
  Footer: typeof FormFooter;
  Ratio: typeof FormRatio;
  FieldSet: typeof FormFieldSet;
  SelectGroup: typeof FormSelectGroup;
  SelectGroupItem: typeof FormSelectGroupItem;
  Radio: typeof FormRadio;
  Checkbox: typeof FormCheckbox;
  FileInput: typeof FormFileInput;
  SwitchStack: typeof FormSwitchStack;
  Switch: typeof FormSwitch;
  InputGroupAppend: typeof FormInputGroupAppend;
  InputGroupPrepend: typeof FormInputGroupPrepend;
  InputGroupText: typeof FormInputGroupText;
  MaskedInput: typeof FormMaskedInput;
  DatePicker: typeof FormDatePicker;
};

CompoundForm.Group = FormGroup;
CompoundForm.Label = FormLabel;
CompoundForm.Input = FormInput;
CompoundForm.StaticText = FormStaticText;
CompoundForm.Textarea = FormTextarea;
CompoundForm.ImageCheck = FormImageCheck;
CompoundForm.ImageCheckItem = FormImageCheckItem;
CompoundForm.ColorCheck = FormColorCheck;
CompoundForm.ColorCheckItem = FormColorCheckItem;
CompoundForm.InputGroup = FormInputGroup;
CompoundForm.Help = FormHelp;
CompoundForm.Select = FormSelect;
CompoundForm.Footer = FormFooter;
CompoundForm.Ratio = FormRatio;
CompoundForm.FieldSet = FormFieldSet;
CompoundForm.SelectGroup = FormSelectGroup;
CompoundForm.SelectGroupItem = FormSelectGroupItem;
CompoundForm.Radio = FormRadio;
CompoundForm.Checkbox = FormCheckbox;
CompoundForm.FileInput = FormFileInput;
CompoundForm.SwitchStack = FormSwitchStack;
CompoundForm.Switch = FormSwitch;
CompoundForm.InputGroupAppend = FormInputGroupAppend;
CompoundForm.InputGroupPrepend = FormInputGroupPrepend;
CompoundForm.InputGroupText = FormInputGroupText;
CompoundForm.MaskedInput = FormMaskedInput;
CompoundForm.DatePicker = FormDatePicker;

export {
  CompoundForm as default,
  Form,
  FormGroup,
  FormLabel,
  FormInput,
  FormStaticText,
  FormTextarea,
  FormImageCheck,
  FormImageCheckItem,
  FormColorCheck,
  FormColorCheckItem,
  FormInputGroup,
  FormHelp,
  FormSelect,
  FormFooter,
  FormRatio,
  FormFieldSet,
  FormSelectGroup,
  FormSelectGroupItem,
  FormRadio,
  FormCheckbox,
  FormFileInput,
  FormSwitchStack,
  FormSwitch,
  FormInputGroupAppend,
  FormInputGroupPrepend,
  FormInputGroupText,
  FormMaskedInput,
  FormDatePicker,
};
