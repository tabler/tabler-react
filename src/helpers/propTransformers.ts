import { additionalColors, colors, lightColors } from "./colors";
import {
  createPropNamesFromConfig,
  createBaseVariants,
  TransformerProps,
} from "./createPropNamesFromConfig";

const alignTransformer = createPropNamesFromConfig({
  bases: ["align"],
  postfixes: ["items", "content", "self"],
  values: ["start", "end", "center", "baseline", "stretch"],
  options: {
    noBaseProps: true,
    responsive: true,
  },
});

export type AlignProps = TransformerProps<typeof alignTransformer>;

const borderTransformer = createPropNamesFromConfig({
  bases: ["border"],
  postfixes: [],
  values: [0, 1, 2, 3, 4, 5],
  options: {
    responsive: false,
  },
});

export type BorderProps = TransformerProps<typeof borderTransformer>;

const bgColorTransformer = createPropNamesFromConfig({
  bases: ["bg"],
  postfixes: ["color"],
  values: [...colors, ...lightColors],
  options: {
    responsive: false,
    noBaseProps: true,
    removePostfixFromClassName: true,
  },
});

export type BgColorProps = TransformerProps<typeof bgColorTransformer>;

const displayTransformer = createPropNamesFromConfig({
  bases: ["d"],
  postfixes: [],
  values: ["flex", "inline-flex", "block", "inline-block", "none"],
  options: {
    responsive: true,
  },
});

export type DisplayProps = TransformerProps<typeof displayTransformer>;

const flexTransformer = createPropNamesFromConfig({
  bases: ["flex"],
  postfixes: [],
  values: ["row", "column", "row-reverse", "column-reverse"],
  options: {
    responsive: true,
  },
});

export type FlexProps = TransformerProps<typeof flexTransformer>;

const flexExpandTransformer = createPropNamesFromConfig({
  bases: ["flex"],
  postfixes: ["grow", "shrink"],
  values: [1, 0],
  options: {
    noBaseProps: true,
    responsive: true,
  },
});

export type FlexExpandProps = TransformerProps<typeof flexExpandTransformer>;

const flexWrapTransformer = createPropNamesFromConfig({
  bases: ["flex"],
  postfixes: ["wrap"],
  values: ["wrap", "nowrap", "wrap-reverse"],
  options: {
    noBaseProps: true,
    responsive: true,
  },
});

export type FlexWrapProps = TransformerProps<typeof flexWrapTransformer>;

const gutterBase = createBaseVariants(["g"], ["x", "y"]);

const gutterTransformer = createPropNamesFromConfig({
  bases: gutterBase,
  postfixes: [],
  values: [0, 1, 2, 3, 4, 5, "sm", "md", "lg", "xl", "xxl"],
  options: {
    responsive: true,
  },
});

export type GutterProps = TransformerProps<typeof gutterTransformer>;

const justifyTransformer = createPropNamesFromConfig({
  bases: ["justify"],
  postfixes: ["content"],
  values: ["start", "end", "center", "between", "around", "evenly"],
  options: {
    noBaseProps: true,
    responsive: true,
  },
});

export type JustifyProps = TransformerProps<typeof justifyTransformer>;

const lineHeightTransformer = createPropNamesFromConfig({
  bases: ["lh"],
  postfixes: [],
  values: [1, "sm", "base", "lg"],
});

export type LineHeightProps = TransformerProps<typeof lineHeightTransformer>;

const orderTransformer = createPropNamesFromConfig({
  bases: ["order"],
  postfixes: [],
  values: [0, 1, 2, 3, 4, 5, "first", "last"],
  options: {
    responsive: true,
  },
});

export type OrderProps = TransformerProps<typeof orderTransformer>;

const objectFitTransformer = createPropNamesFromConfig({
  bases: ["object"],
  postfixes: ["fit"],
  values: ["contain", "cover", "fill", "scale-down", "none"],
  options: {
    removePostfixFromClassName: true,
    noBaseProps: true,
  },
});

export type ObjectFitProps = TransformerProps<typeof objectFitTransformer>;

const sizingTransformer = createPropNamesFromConfig({
  bases: ["w", "h"],
  postfixes: [],
  values: [1, 25, 50, 75, 100, "auto"],
});

export type SizingProps = TransformerProps<typeof sizingTransformer>;

const sizingViewportTransformer = createPropNamesFromConfig({
  bases: ["mw", "vw"],
  postfixes: [],
  values: [100],
});

export type SizingViewportProps = TransformerProps<
  typeof sizingViewportTransformer
>;

const sizingMinViewportTransformer = createPropNamesFromConfig({
  bases: ["min"],
  postfixes: ["vw"],
  values: [100],
  options: {
    noBaseProps: true,
  },
});

export type SizingMinViewportProps = TransformerProps<
  typeof sizingMinViewportTransformer
>;

const spacingBase = createBaseVariants(
  ["p", "m"],
  ["t", "b", "s", "e", "x", "y"]
);

const spacingTransformer = createPropNamesFromConfig({
  bases: spacingBase,
  postfixes: [],
  values: [0, 1, 2, 3, 4, 5, "auto"],
  options: {
    responsive: true,
  },
});

export type SpacingProps = TransformerProps<typeof spacingTransformer>;

const textAlignTransformer = createPropNamesFromConfig({
  bases: ["text"],
  postfixes: ["align"],
  values: ["left", "right", "center"],
  options: {
    noBaseProps: true,
    responsive: true,
    removePostfixFromClassName: true,
  },
});

export type TextAlignProps = TransformerProps<typeof textAlignTransformer>;

const textColorTransformer = createPropNamesFromConfig({
  bases: ["text"],
  postfixes: ["color"],
  values: [...colors, ...additionalColors],
  options: {
    noBaseProps: true,
    removePostfixFromClassName: true,
  },
});

export type TextColorProps = TransformerProps<typeof textColorTransformer>;

const textTransformTransformer = createPropNamesFromConfig({
  bases: ["text"],
  postfixes: ["transform"],
  values: ["lowercase", "uppercase", "capitalize"],
  options: {
    noBaseProps: true,
    removePostfixFromClassName: true,
  },
});

export type TextTransformProps = TransformerProps<
  typeof textTransformTransformer
>;

const trackingTransformer = createPropNamesFromConfig({
  bases: ["tracking"],
  postfixes: [],
  values: ["tight", "normal", "wide"],
});

export type TextTrackingProps = TransformerProps<typeof trackingTransformer>;

export const propTransformers = {
  ...alignTransformer,
  ...borderTransformer,
  ...bgColorTransformer,
  ...displayTransformer,
  ...flexTransformer,
  ...flexExpandTransformer,
  ...flexWrapTransformer,
  ...gutterTransformer,
  ...justifyTransformer,
  ...lineHeightTransformer,
  ...objectFitTransformer,
  ...orderTransformer,
  ...sizingTransformer,
  ...sizingViewportTransformer,
  ...sizingMinViewportTransformer,
  ...spacingTransformer,
  ...textAlignTransformer,
  ...textColorTransformer,
  ...textTransformTransformer,
  ...trackingTransformer,
} as const;

export type GlobalClassNameProps = AlignProps &
  BorderProps &
  BgColorProps &
  DisplayProps &
  FlexProps &
  FlexExpandProps &
  FlexWrapProps &
  GutterProps &
  JustifyProps &
  LineHeightProps &
  ObjectFitProps &
  OrderProps &
  SizingProps &
  SizingViewportProps &
  SizingMinViewportProps &
  SpacingProps &
  TextTransformProps &
  TextAlignProps &
  TextColorProps &
  TextTrackingProps;
