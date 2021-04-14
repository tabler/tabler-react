type BreakpointModifiers = "sm" | "md" | "lg" | "xl" | "xxl";
const breakpointModifiers = ["sm", "md", "lg", "xl", "xxl"];
// type SizeNumbers = 0 | 1 | 2 | 3 | 4 | 5;

export type TransformerProps<
  Transformer extends { [k: string]: (...args: any) => any }
> = {
  [K in keyof Transformer]?: Parameters<Transformer[K]>[0];
};

type BreakpointValues<ValueType> = {
  [K in BreakpointModifiers]?: ValueType;
};

export type PropertyConfigOptions = {
  /**
   * don't create props based on the `base` alone
   */
  noBaseProps?: boolean;
  /**
   * allow prop value to be a responsive breakpoints value object
   */
  responsive?: boolean;
  removePostfixFromClassName?: boolean;
};

type IsResponsiveValue<Value, Options> = Options extends {
  responsive: true;
}
  ? Value | BreakpointValues<Value>
  : Value;

type IsResponsiveBase<Base extends string, Options> = Options extends {
  responsive: true;
}
  ? `${Base}` | `${Base}${Capitalize<BreakpointModifiers>}`
  : Base;

export interface PropertyConfig<
  Base extends string,
  Postfix extends string,
  Value extends string | number,
  Options extends PropertyConfigOptions
> {
  base: Base;
  postfix: Postfix;
  value: Value;
  options: Options;
}

const capitalize = (str: string | any) =>
  typeof str === "string" ? str.charAt(0).toUpperCase() + str.slice(1) : str;

export function createBaseVariants<Base extends string, Variant extends string>(
  base: Base[],
  variants: Variant[]
) {
  return base.map(b => [b, ...variants.map(v => `${b}${v}`)]).flat() as Array<
    Base | `${Base}${Variant}`
  >;
}

function buildClassName<
  Base extends string,
  Postfix extends string | null,
  Value extends string | number,
  Breakpoint extends BreakpointModifiers | "zero" | null
>(base: Base, postfix: Postfix, value: Value, breakpoint: Breakpoint) {
  let className = `${base}`;
  if (postfix) {
    className = `${className}-${postfix}`;
  }
  if (breakpoint && breakpoint !== "zero") {
    className = `${className}-${breakpoint}`;
  }
  className = `${className}-${value}`;
  return className as Class_Name<Base, Postfix, Value, Breakpoint>;
}

type TranformedClassName<
  Base extends string,
  Postfix extends string | null,
  Value extends string | number,
  Options extends PropertyConfigOptions
> = Postfix extends string
  ? Options["responsive"] extends true
    ? Options["removePostfixFromClassName"] extends true
      ? `${Base}-${BreakpointModifiers}-${Value}`
      :
          | `${Base}-${BreakpointModifiers}-${Value}`
          | `${Base}-${Postfix}-${BreakpointModifiers}-${Value}`
    : Options["removePostfixFromClassName"] extends true
    ? `${Base}-${Value}`
    : `${Base}-${Value}` | `${Base}-${Postfix}-${Value}`
  : Options["responsive"] extends true
  ? `${Base}-${Value}` | `${Base}-${BreakpointModifiers}-${Value}`
  : `${Base}-${Value}`;

type BaseProps<
  Base extends string,
  Postfix extends string,
  Value extends string | number,
  Options extends PropertyConfigOptions
> = {
  [K in `${IsResponsiveBase<Base, Options>}`]: (
    value: IsResponsiveValue<Value, Options>
  ) => TranformedClassName<Base, Postfix, Value, Options>;
};

type BasePostfixProps<
  Base extends string,
  Postfix extends string,
  Value extends string | number,
  Options extends PropertyConfigOptions
> = {
  [K in `${IsResponsiveBase<`${Base}${Capitalize<Postfix>}`, Options>}`]: (
    value: IsResponsiveValue<Value, Options>
  ) => TranformedClassName<Base, Postfix, Value, Options>;
};

type Class_Name<
  Base extends string,
  Postfix extends string | null,
  Value extends string | number,
  Breakpoint extends BreakpointModifiers | "zero" | null
> = Postfix extends string
  ? Breakpoint extends Omit<BreakpointModifiers, "zero">
    ? `${Base}-${Postfix}-${Breakpoint}-${Value}`
    : `${Base}-${Postfix}-${Value}`
  : Breakpoint extends Omit<BreakpointModifiers, "zero">
  ? `${Base}-${Breakpoint}-${Value}`
  : `${Base}-${Value}`;

export function createPropNamesFromConfig<
  Base extends string,
  Postfix extends string,
  Value extends string | number,
  Options extends PropertyConfigOptions
>(config: {
  bases: Base[];
  postfixes: Postfix[];
  values: Value[];
  options?: Options;
}) {
  const postfixedNames = config.bases
    .map(base =>
      (config.postfixes || [])?.map(p => {
        const fn = (value: IsResponsiveValue<Value, Options>) =>
          typeof value === "string" || typeof value === "number"
            ? buildClassName(
                base,
                config?.options?.removePostfixFromClassName ? null : p,
                value,
                null
              ) // `${base}-${p}-${value}`
            : Object.entries(value)
                .map(([breakpoint, v]) =>
                  buildClassName(
                    base,
                    config?.options?.removePostfixFromClassName ? null : p,
                    v,
                    breakpoint as BreakpointModifiers
                  )
                ) //`${base}-${p}-${breakpoint}-${v}`
                .join(" ");
        return [
          [`${base}${capitalize(p)}`, fn],
          ...(config.options?.responsive
            ? breakpointModifiers.map(breakpoint => [
                `${base}${capitalize(p)}${capitalize(breakpoint)}`,
                (value: Value) => {
                  return buildClassName(
                    base,
                    config?.options?.removePostfixFromClassName ? null : p,
                    value,
                    breakpoint as BreakpointModifiers
                  );
                },
              ])
            : []),
        ];
      })
    )
    .flat(2);
  const names = config.options?.noBaseProps
    ? postfixedNames
    : [
        ...config.bases.map(base => [
          `${base}`,
          (value: IsResponsiveValue<Value, Options>) => {
            return typeof value === "string" || typeof value === "number"
              ? buildClassName(base, null, value, null) // `${base}-${value}`
              : Object.entries(value)
                  .map(([breakpoint, v]) =>
                    buildClassName(
                      base,
                      null,
                      v,
                      breakpoint as BreakpointModifiers
                    )
                  ) // `${base}-${breakpoint}-${v}`
                  .join(" ");
          },
        ]),
        ...(config.options?.responsive
          ? config.bases.map(base =>
              breakpointModifiers.map(breakpoint => [
                `${base}${capitalize(breakpoint)}`,
                (value: Value) => {
                  return buildClassName(
                    base,
                    null,
                    value,
                    breakpoint as BreakpointModifiers
                  );
                },
              ])
            )
          : []
        ).flat(1),
        ...postfixedNames,
      ];

  return Object.fromEntries(names) as `${Postfix}` extends ""
    ? // if there are no prefixes its safe to say the base will be used
      BaseProps<Base, Postfix, Value, Options>
    : Options extends {
        noBaseProps: true;
      }
    ? BasePostfixProps<Base, Postfix, Value, Options>
    : BaseProps<Base, Postfix, Value, Options> &
        BasePostfixProps<Base, Postfix, Value, Options>;
}
