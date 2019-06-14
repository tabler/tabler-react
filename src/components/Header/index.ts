import Header from "./Header";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import H4 from "./H4";
import H5 from "./H5";
import H6 from "./H6";

const CompoundHeader = Header as typeof Header & {
  H1: typeof H1;
  H2: typeof H2;
  H3: typeof H3;
  H4: typeof H4;
  H5: typeof H5;
  H6: typeof H6;
};

CompoundHeader.H1 = H1;
CompoundHeader.H2 = H2;
CompoundHeader.H3 = H3;
CompoundHeader.H4 = H4;
CompoundHeader.H5 = H5;
CompoundHeader.H6 = H6;

export { CompoundHeader as default, Header, H1, H2, H3, H4, H5, H6 };
