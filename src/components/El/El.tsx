import makeElement from "../../helpers/makeHtmlElement";

export const Div = makeElement<HTMLDivElement>("div");
export const Span = makeElement<HTMLDivElement>("span");

export const Header = makeElement<HTMLDivElement>("header");
export const Section = makeElement<HTMLDivElement>("section");
export const Nav = makeElement<HTMLDivElement>("nav");
export const Footer = makeElement<HTMLDivElement>("footer");

export const A = makeElement<HTMLAnchorElement>("a");
export const Button = makeElement<HTMLButtonElement>("button");
export const P = makeElement<HTMLParagraphElement>("p");

export const Ul = makeElement<HTMLUListElement>("ul");
export const Li = makeElement<HTMLLIElement>("li");
export const Ol = makeElement<HTMLOListElement>("ol");

export const H1 = makeElement<HTMLHeadingElement>("h1");
export const H2 = makeElement<HTMLHeadingElement>("h2");
export const H3 = makeElement<HTMLHeadingElement>("h3");
export const H4 = makeElement<HTMLHeadingElement>("h4");
export const H5 = makeElement<HTMLHeadingElement>("h5");
export const H6 = makeElement<HTMLHeadingElement>("h6");

export const Form = makeElement<HTMLFormElement>("form");
export const Input = makeElement<HTMLInputElement>("input");
export const Textarea = makeElement<HTMLTextAreaElement>("textarea");
export const Select = makeElement<HTMLSelectElement>("select");
export const Option = makeElement<HTMLOptionElement>("option");
export const Fieldset = makeElement<HTMLFieldSetElement>("fieldset");
export const Label = makeElement<HTMLLabelElement>("label");

export const Iframe = makeElement<HTMLIFrameElement>("iframe");
// const Svg = makeElement<SVGElement>("svg");

export const Small = makeElement<HTMLDivElement>("small");

export const Table = makeElement<HTMLTableElement>("table");
export const Thead = makeElement<HTMLTableSectionElement>("thead");
export const Tbody = makeElement<HTMLTableSectionElement>("tbody");
export const Tfoot = makeElement<HTMLTableSectionElement>("tfoot");
export const Col = makeElement<HTMLTableColElement>("col");
export const Tr = makeElement<HTMLTableRowElement>("tr");
export const Td = makeElement<HTMLTableCellElement>("td");
export const Th = makeElement<HTMLTableHeaderCellElement>("th");

export const El = {
  Div,
  Span,
  Header,
  Section,
  Nav,
  Footer,
  A,
  Button,
  P,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Ul,
  Li,
  Ol,
  Form,
  Input,
  Textarea,
  Select,
  Option,
  Fieldset,
  Label,
  Iframe,
  // Svg,
  Small,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Col,
  Tr,
  Td,
  Th,
};

export default El;
