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
  textTransform?: "lowercase" | "uppercase" | "capitalize";
}

type utilityPropKeys = keyof UtilityProps;

function parseValue(property: string, value?: spacePropValue | displayProps) {
  if (typeof value === "undefined") {
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

const utilityBrekapointPropsKeys: utilityPropKeys[] = [
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

export const utilityPropsKeys: utilityPropKeys[] = [
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
  const utilityBreakpointPropsClasses = utilityBrekapointPropsKeys.reduce(
    (acc, cur) => {
      if (typeof props[cur] !== "undefined") {
        acc.push(parseValue(cur, props[cur]));
      }
      return acc;
    },
    [] as ClassValue[]
  );

  const utilityPropsClasses = utilityPropsKeys.reduce(
    (acc, cur) => {
      if (props[cur]) {
        acc.push(parseValue(cur, props[cur]));
      }
      return acc;
    },
    [] as ClassValue[]
  );

  return utilityBreakpointPropsClasses;
};

export default getUtilityPropsClasses;
