import { ClassValue } from "classnames/types";

type autoOrNumber = "auto" | number;

type spacePropBreakpoints = {
  xs?: autoOrNumber;
  sm?: autoOrNumber;
  md?: autoOrNumber;
  lg?: autoOrNumber;
  xl?: autoOrNumber;
};

type spacePropValue = autoOrNumber | spacePropBreakpoints;

type displayTypes =
  | "none"
  | "inline"
  | "inline-block"
  | "block"
  | "table"
  | "table-cell"
  | "table-row"
  | "flex"
  | "inline-flex";

type DisplayPropBreakPoints = {
  xs?: displayTypes;
  sm?: displayTypes;
  md?: displayTypes;
  lg?: displayTypes;
  xl?: displayTypes;
};

type displayProps = displayTypes | DisplayPropBreakPoints;

export interface UtilityProps {
  /**
   * Display prop
   */
  d?:
    | "none"
    | "inline"
    | "inline-block"
    | "block"
    | "table"
    | "table-cell"
    | "table-row"
    | "flex"
    | "inline-flex"
    | DisplayPropBreakPoints;
  m?: spacePropValue;
  mt?: spacePropValue;
  mb?: spacePropValue;
  ml?: spacePropValue;
  mr?: spacePropValue;
  mx?: spacePropValue;
  my?: spacePropValue;
  p?: spacePropValue;
  pt?: spacePropValue;
  pb?: spacePropValue;
  pl?: spacePropValue;
  pr?: spacePropValue;
  px?: spacePropValue;
  py?: spacePropValue;
}

type utilityyPropKeys = keyof UtilityProps;

function parseValue(property: string, value?: spacePropValue | displayProps) {
  if (!value) {
    return undefined;
  }
  if (typeof value === "number" || typeof value === "string") {
    return `${property}-${value}`;
  }
  const { xs, sm, md, lg, xl } = value;
  const classes = {
    [`${property}-${xs}`]: xs,
    [`${property}-sm-${sm}`]: sm,
    [`${property}-md-${md}`]: md,
    [`${property}-lg-${lg}`]: lg,
    [`${property}-xl-${xl}`]: xl,
  };
  return classes;
}

const utilityProps: utilityyPropKeys[] = [
  "d",
  "m",
  "mt",
  "mb",
  "ml",
  "mr",
  "mx",
  "my",
  "p",
  "pt",
  "pb",
  "pl",
  "pr",
  "px",
  "py",
];

export const getUtilityPropsClasses = function(props: { [key: string]: any }) {
  const utilityPropsClasses = utilityProps.reduce(
    (acc, cur) => {
      if (props[cur]) {
        acc.push(parseValue(cur, props[cur]));
      }
      return acc;
    },
    [] as ClassValue[]
  );
  return utilityPropsClasses;
};

export default getUtilityPropsClasses;
