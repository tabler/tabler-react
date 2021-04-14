import React, { forwardRef, ElementType } from "react";
import cn from "classnames";
import getUtilityPropsClasses, {
  UtilityProps,
  utilityPropsKeys,
} from "./utilityPropsToClassNames";
import capitalize from "./capitalize";
import { ClassValue } from "classnames/types";
import { RefHandler } from "react-popper";
import { HTMLPropsWithoutRef } from "../types";

export interface ELProps extends UtilityProps {
  classNames?: ClassValue;
  as?: ElementType;
  [key: string]: any;
}

export interface ComponentProps<T extends HTMLElement>
  extends ELProps,
    Omit<HTMLPropsWithoutRef<T>, "as"> {}

const splitProps = (props: { [key: string]: any }) =>
  Object.keys(props).reduce(
    (pre, cur: any) => {
      if (utilityPropsKeys.includes(cur)) {
        pre[0][cur] = props[cur];
      } else {
        pre[1][cur] = props[cur];
      }
      return pre;
    },
    [{}, {}] as { [key: string]: any }[]
  );

export const makeElement = function <T extends HTMLElement>(
  element: ElementType
) {
  const Component = forwardRef(function (
    { className, classNames, as = element, ...props }: ComponentProps<T>,
    ref: React.Ref<any> | RefHandler
  ) {
    const [elProps, _props] = splitProps(props);
    const utilityClasses = getUtilityPropsClasses(elProps);
    const _className = cn(utilityClasses, classNames, className);
    return React.createElement(as || element, {
      className: _className,
      ref,
      ..._props,
    });
  });
  Component.displayName = `ForwardRef(${capitalize(element)})`;
  return Component;
};

export default makeElement;
