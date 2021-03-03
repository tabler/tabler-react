import React, {
  ComponentType,
  useContext,
  WeakValidationMap,
  ValidationMap,
} from "react";
import classnames from "classnames";
import { ClassValue } from "classnames/types";

import { GlobalClassNameProps, propTransformers } from "./propTransformers";
import { ClassNamesContext } from "./ClassNamesContext";

type TablerProps<As extends React.ElementType = React.ElementType> = {
  as?: As;
  className?: string;
  classNames?: ClassValue;
} & GlobalClassNameProps;

export type TablerPropsWithChildren<
  As extends React.ElementType = React.ElementType
> = React.PropsWithChildren<TablerProps<As>>;

export type TablerComponentPropsWithoutRef<
  As extends React.ElementType = "div",
  Props = unknown
> = Props &
  Omit<React.ComponentProps<As>, keyof Props> &
  TablerPropsWithChildren<As>;

export type TablerComponentProps<
  As extends React.ElementType = "div",
  Props = unknown
> = Props &
  Omit<React.ComponentPropsWithRef<As>, keyof Props> &
  TablerPropsWithChildren<As>;

export interface TablerRefForwardingComponent<
  InitialAs extends React.ElementType,
  Props = unknown
> {
  <As extends React.ElementType = InitialAs>(
    props: TablerComponentProps<As, Props>,
    ref?: any
  ): React.ReactElement | null;
  propTypes?: WeakValidationMap<Props>;
  contextTypes?: ValidationMap<any>;
  defaultProps?: Partial<Props>;
  displayName?: string;
}

// export type TablerProps<As extends React.ElementType = React.ElementType> = {
//   as?: As;
//   className?: string;
// } & GlobalClassNameProps;

// export type TablerPropsWithChildren<
//   As extends React.ElementType = React.ElementType
// > = React.PropsWithChildren<
//   { as?: As; className?: string } & GlobalClassNameProps
// >;

// export type TablerComponentProps<
//   As extends React.ElementType = "div",
//   P = unknown
// > = React.PropsWithChildren<
//   React.ComponentPropsWithRef<As> & { as?: As } & P & GlobalClassNameProps
// >;

// export interface TablerRefForwardingComponent<
//   InitialAs extends React.ElementType,
//   P = unknown
// > {
//   <As extends React.ElementType = InitialAs>(
//     props: TablerComponentProps<As, P>,
//     context?: any
//   ): React.ReactElement | null;
//   propTypes?: any;
//   contextTypes?: any;
//   defaultProps?: Partial<P>;
//   displayName?: string;
// }

type PropsAndDefaultProps<P = unknown, D = unknown> = P extends unknown
  ? D & P
  : D;

export interface TablerElementOptions<
  As extends React.ElementType = "div",
  P = unknown,
  D extends Partial<GlobalClassNameProps> = {}
> {
  className?: string;
  component?: ComponentType<P>;
  classNames?: (props: P) => ClassValue;
  modifyProps?: (props: Partial<P>) => Partial<P>;
  defaultProps?: Partial<TablerComponentProps<As, PropsAndDefaultProps<P, D>>>;
  displayName?: string;
  provideClassNames?: { [key: string]: string };
  /**
   * Unfiltered and unparsed props are passed to the Child
   */
  child?: React.ComponentType<Partial<P>>;
}

type PropTransformers = typeof propTransformers;
type PropTransformersKeys = keyof PropTransformers;

/**
 * @TODO don't propagate className props to the element
 */
export function createPropsParser<
  As extends React.ElementType = "div",
  P = unknown
>({
  className,
  classNames,
}: {
  className?: string;
  classNames?: (props: P) => ClassValue;
}) {
  return (props: TablerComponentProps<As, P>, classNameContext?: string) => {
    const { className: _className = "", classNames: _classNames = "" } = props;
    return classnames(
      classNameContext,
      className,
      classNames && classNames(props),
      Object.entries(props)
        .reduce((prev, [key, value]) => {
          if (!value || !propTransformers[key as PropTransformersKeys]) {
            return prev;
          }
          // @ts-ignore
          return `${prev} ${propTransformers[key as PropTransformersKeys](
            value as never
          )}` as string;
        }, "")
        .trim(),
      _className,
      _classNames
    );
  };
}

export function createTablerElement<
  As extends React.ElementType = "div",
  P = unknown
>(
  element: As,
  {
    className,
    component,
    classNames,
    modifyProps,
    displayName,
    defaultProps,
    provideClassNames,
    child: Child,
  }: TablerElementOptions<As, P> = {}
): TablerRefForwardingComponent<As, P> {
  const parseProps = createPropsParser<As, P>({
    className,
    classNames,
  });
  const El = component || element || "div";
  const TablerComponent = React.forwardRef(
    ({ children, as, className = "", classNames = "", ...props }: any, ref) => {
      const _classNameContext = useContext(ClassNamesContext);

      const _className = parseProps(
        { ...props, children, className, classNames },
        classnames(
          _classNameContext[displayName || ""],
          className.split(" ").map((c: string) => _classNameContext[c])
        )
      );

      const _props = modifyProps ? modifyProps(props) : props;

      const Component = as || El;

      if (provideClassNames) {
        return (
          <ClassNamesContext.Provider value={provideClassNames}>
            <Component ref={ref} className={_className} {..._props}>
              {Child ? <Child {...props}>{children}</Child> : children}
            </Component>
          </ClassNamesContext.Provider>
        );
      }
      return (
        <Component ref={ref} className={_className} {..._props}>
          {Child ? <Child {...props}>{children}</Child> : children}
        </Component>
      );
    }
  );
  if (displayName) {
    TablerComponent.displayName = displayName;
  }
  if (defaultProps) {
    TablerComponent.defaultProps = defaultProps;
  }
  return TablerComponent;
}
