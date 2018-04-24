export * from "./components";

export type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export {
  default as StandaloneFormPage,
} from "./page_templates/StandaloneFormPage";
export {
  default as DefaultErrorPage,
} from "./page_templates/DefaultErrorPage";
export { default as FormCard } from "./forms/FormCard";
export { default as FormTextInput } from "./forms/FormTextInput";
export { default as FormCheckboxInput } from "./forms/FormCheckboxInput";
