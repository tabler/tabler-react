import Text from "./Text";
import TextSmall from "./TextSmall";

const CompoundText = Object.assign(Text, { Small: TextSmall });

export { CompoundText as default, Text, TextSmall };
