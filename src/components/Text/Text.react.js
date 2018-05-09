// @flow

import * as React from "react";
import cn from "classnames";
import TextSmall from "./TextSmall.react";

type AlignProps = {|
  +align?: "left" | "center" | "right" | "justify",
  +left?: boolean,
  +center?: boolean,
  +right?: boolean,
  +justify?: boolean,
|};

type TransformProps = {|
  +transform?: "lowercase" | "uppercase" | "capitalize",
  +lowercase?: boolean,
  +uppercase?: boolean,
  +capitalize?: boolean,
|};

type TrackingProps = {|
  +tracking?: "tight" | "normal" | "wide",
  +trackingTight?: boolean,
  +trackingNormal?: boolean,
  +trackingWide?: boolean,
|};

type LeadingProps = {|
  +leading?: "none" | "tight" | "normal" | "loose",
  +leadingNone?: boolean,
  +leadingTight?: boolean,
  +leadingNormal?: boolean,
  +leadingLoose?: boolean,
|};

type TextProps = {|
  ...AlignProps,
  ...TransformProps,
  ...TrackingProps,
  ...LeadingProps,
  +children?: React.Node,
  +className?: string,
  +RootComponent?: React.ElementType,
  +color?: string,
  +size?: string,
  +wrap?: boolean,
  +muted?: boolean,
|};

const Text = ({
  className,
  children,
  RootComponent,
  color = "",
  size = "",
  wrap,
  muted,
  ...props
}: TextProps): React.Node => {
  const { align: alignFromProps, left, center, right, justify } = props;
  const align =
    alignFromProps ||
    (left && "left") ||
    (center && "center") ||
    (right && "right") ||
    (justify && "justify") ||
    "";

  const {
    transform: transformFromProps,
    lowercase,
    uppercase,
    capitalize,
  } = props;
  const transform =
    transformFromProps ||
    (lowercase && "lowercase") ||
    (uppercase && "uppercase") ||
    (capitalize && "capitalize") ||
    "";

  const {
    tracking: trackingFromProps,
    trackingTight,
    trackingNormal,
    trackingWide,
  } = props;
  const tracking =
    trackingFromProps ||
    (trackingTight && "tight") ||
    (trackingNormal && "normal") ||
    (trackingWide && "wide") ||
    "";

  const {
    leading: leadingFromProps,
    leadingNone,
    leadingTight,
    leadingNormal,
    leadingLoose,
  } = props;
  const leading =
    leadingFromProps ||
    (leadingNone && "none") ||
    (leadingTight && "tight") ||
    (leadingNormal && "normal") ||
    (leadingLoose && "loose") ||
    "";

  const classes = cn(
    {
      [`text-wrap p-lg-6`]: wrap,
      [`text-${color}`]: color,
      [`${size}`]: size,
      "text-muted": muted,
      [`text-${align}`]: align,
      [`text-${transform}`]: transform,
      [`tracking-${tracking}`]: tracking,
      [`leading-${leading}`]: leading,
    },
    className
  );
  const Component = RootComponent || "div";
  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
};

Text.displayName = "Text";

Text.Small = TextSmall;

/** @component */
export default Text;
