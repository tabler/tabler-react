import Text from "./Text";
import TextSmall from "./TextSmall";

const CompoundText = Text as typeof Text & {
  Small: typeof TextSmall;
};

CompoundText.Small = TextSmall;

export { CompoundText as default, Text, TextSmall };
