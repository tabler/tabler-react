import React from "react";
import cn from "classnames";
import El from "../El/El";
import { UtilityProps } from "../../helpers/utilityPropsToClassNames";
import { TablerComponent, HTMLPropsWithoutRef } from "../../types";

export interface GridColProps
  extends HTMLPropsWithoutRef<HTMLDivElement>,
    TablerComponent,
    UtilityProps {
  width?: number;
  xs?: number;
  xsAuto?: boolean;
  sm?: number;
  smAuto?: boolean;
  md?: number;
  mdAuto?: boolean;
  lg?: number;
  lgAuto?: boolean;
  xl?: number;
  xlAuto?: boolean;
  auto?: boolean;
  offset?: number;
  offsetXs?: number;
  offsetSm?: number;
  offsetMd?: number;
  offsetLg?: number;
  offsetXl?: number;
  order?: number;
  orderXs?: number;
  orderSm?: number;
  orderMd?: number;
  orderLg?: number;
  orderXl?: number;
  ignoreCol?: boolean;
}

function GridCol({
  className,
  children,
  width = 0,
  xs = 0,
  sm = 0,
  md = 0,
  lg = 0,
  xl = 0,
  xsAuto,
  smAuto,
  mdAuto,
  lgAuto,
  xlAuto,
  auto,
  offset = 0,
  offsetXs = 0,
  offsetSm = 0,
  offsetMd = 0,
  offsetLg = 0,
  offsetXl = 0,
  order,
  orderXs,
  orderSm,
  orderMd,
  orderLg,
  orderXl,
  ignoreCol = false,
  ...props
}: GridColProps) {
  const classes = cn(
    {
      col: !ignoreCol,
      [`col-${width}`]: width,
      [`col-xs-${xs}`]: xs,
      [`col-xs-auto`]: xsAuto,
      [`col-sm-${sm}`]: sm,
      [`col-sm-auto`]: smAuto,
      [`col-md-${md}`]: md,
      [`col-md-auto`]: mdAuto,
      [`col-lg-${lg}`]: lg,
      [`col-lg-auto`]: lgAuto,
      [`col-xl-${xl}`]: xl,
      [`col-xl-auto`]: xlAuto,
      "col-auto": auto,
      [`offset-${offset}`]: offset,
      [`offset-xs-${offsetXs}`]: offsetXs,
      [`offset-sm-${offsetSm}`]: offsetSm,
      [`offset-md-${offsetMd}`]: offsetMd,
      [`offset-lg-${offsetLg}`]: offsetLg,
      [`offset-xl-${offsetXl}`]: offsetXl,
      [`order-${order}`]: order,
      [`order-xs-${orderXs}`]: orderXs,
      [`order-sm-${orderSm}`]: orderSm,
      [`order-md-${orderMd}`]: orderMd,
      [`order-lg-${orderLg}`]: orderLg,
      [`order-xl-${orderXl}`]: orderXl,
    },
    className
  );
  return (
    <El.Div className={classes} {...props}>
      {children}
    </El.Div>
  );
}

/** @component */
export default GridCol;
