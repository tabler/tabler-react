export const capitalize = (str: any) =>
  String(str)
    .charAt(0)
    .toUpperCase() + String(str).slice(1);

export default capitalize;
