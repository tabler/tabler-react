import React from "react";
import DropdownProvider from "./DropdownProvider";

export const withDropdownProvider = (Component: React.ComponentType) => (
  props: any
) => {
  return (
    <DropdownProvider>
      <Component {...props} />
    </DropdownProvider>
  );
};

export default withDropdownProvider;
