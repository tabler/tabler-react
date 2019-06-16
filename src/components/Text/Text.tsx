import React, { HTMLProps } from "react";
import cn from "classnames";
import { ELProps } from "../../helpers/makeHtmlElement";
import { colors } from "../../colors";
import El from "../El/El";

interface AlignProps {
  align?: "left" | "center" | "right" | "justify";
  left?: boolean;
  center?: boolean;
  right?: boolean;
  justify?: boolean;
}

interface TransformProps {
  transform?: "lowercase" | "uppercase" | "capitalize";
  lowercase?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
}

interface TrackingProps {
  tracking?: "tight" | "normal" | "wide";
  trackingTight?: boolean;
  trackingNormal?: boolean;
  trackingWide?: boolean;
}

interface LeadingProps {
  leading?: "none" | "tight" | "normal" | "loose";
  leadingNone?: boolean;
  leadingTight?: boolean;
  leadingNormal?: boolean;
  leadingLoose?: boolean;
}

export interface TextProps<AS extends HTMLElement = HTMLDivElement>
  extends ELProps,
    Omit<HTMLProps<AS>, "as" | "color" | "size" | "wrap">,
    AlignProps,
    TransformProps,
    TrackingProps,
    LeadingProps {
  as?: React.ElementType;
  /**
   * @deprecated use 'as'
   */
  RootComponent?: React.ElementType;
  color?: colors;
  size?: string;
  wrap?: boolean;
  muted?: boolean;
}

const Text = function<AS extends HTMLElement = HTMLDivElement>({
  className,
  children,
  RootComponent,
  as = El.Div,
  color,
  size = "",
  wrap,
  muted,
  align: alignFromProps,
  left,
  center,
  right,
  justify,
  transform: transformFromProps,
  lowercase,
  uppercase,
  capitalize,
  tracking: trackingFromProps,
  trackingTight,
  trackingNormal,
  trackingWide,
  leading: leadingFromProps,
  leadingNone,
  leadingTight,
  leadingNormal,
  leadingLoose,
  ...rest
}: TextProps<AS>) {
  const Component = RootComponent || as;

  const align =
    alignFromProps ||
    (left && "left") ||
    (center && "center") ||
    (right && "right") ||
    (justify && "justify") ||
    "";

  const transform =
    transformFromProps ||
    (lowercase && "lowercase") ||
    (uppercase && "uppercase") ||
    (capitalize && "capitalize") ||
    "";

  const tracking =
    trackingFromProps ||
    (trackingTight && "tight") ||
    (trackingNormal && "normal") ||
    (trackingWide && "wide") ||
    "";

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

  return (
    <Component className={classes} {...rest}>
      {children}
    </Component>
  );
};

/** @component */
export default Text;
