export type CamelCase<
  S extends string
> = S extends `${infer P1}-${infer P2}${infer P3}`
  ? `${Lowercase<P1>}${Uppercase<P2>}${CamelCase<P3>}`
  : Lowercase<S>;

export type CapitalCamel<S extends string | number | symbol> = S extends string
  ? Capitalize<CamelCase<S>>
  : number;

export type ArrayEntry<BaseType extends readonly unknown[]> = BaseType[number];
