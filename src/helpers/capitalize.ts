import { ElementType } from "react";

export const capitalize = (str: ElementType) =>
  String(str)
    .charAt(0)
    .toUpperCase() + String(str).slice(1);

export default capitalize;
