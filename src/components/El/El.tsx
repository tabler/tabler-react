import makeElement from "../../helpers/makeHtmlElement";
import { ReactHTMLElement, ReactSVGElement } from "react";

const Div = makeElement<HTMLDivElement>("div");
const Span = makeElement<HTMLDivElement>("span");

const Header = makeElement<HTMLDivElement>("header");
const Section = makeElement<HTMLDivElement>("section");
const Nav = makeElement<HTMLDivElement>("nav");
const Footer = makeElement<HTMLDivElement>("footer");

const A = makeElement<HTMLAnchorElement>("a");
const Button = makeElement<HTMLButtonElement>("button");
const P = makeElement<HTMLParagraphElement>("p");

const Ul = makeElement<HTMLUListElement>("ul");
const Li = makeElement<HTMLLIElement>("li");
const Ol = makeElement<HTMLOListElement>("ol");

const H1 = makeElement<HTMLHeadingElement>("h1");
const H2 = makeElement<HTMLHeadingElement>("h2");
const H3 = makeElement<HTMLHeadingElement>("h3");
const H4 = makeElement<HTMLHeadingElement>("h4");
const H5 = makeElement<HTMLHeadingElement>("h5");
const H6 = makeElement<HTMLHeadingElement>("h6");

const Form = makeElement<HTMLFormElement>("form");
const Input = makeElement<HTMLInputElement>("input");
const Textarea = makeElement<HTMLTextAreaElement>("textarea");
const Select = makeElement<HTMLSelectElement>("select");
const Option = makeElement<HTMLOptionElement>("option");
const Fieldset = makeElement<HTMLFieldSetElement>("fieldset");
const Label = makeElement<HTMLLabelElement>("label");

const Iframe = makeElement<HTMLIFrameElement>("iframe");
const Svg = makeElement<SVGElement>("svg");

const Small = makeElement<HTMLDivElement>("small");

const Table = makeElement<HTMLTableElement>("table");
const Thead = makeElement<HTMLTableSectionElement>("thead");
const Tbody = makeElement<HTMLTableSectionElement>("tbody");
const Tfoot = makeElement<HTMLTableSectionElement>("tfoot");
const Col = makeElement<HTMLTableColElement>("col");
const Tr = makeElement<HTMLTableRowElement>("tr");
const Td = makeElement<HTMLTableCellElement>("td");
const Th = makeElement<HTMLTableHeaderCellElement>("th");

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
  Svg,
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
