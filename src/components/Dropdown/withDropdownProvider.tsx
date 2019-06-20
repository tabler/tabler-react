import React, { forwardRef } from "react";
import DropdownProvider from "./DropdownProvider";

export const withDropdownProvider = (Component: React.ComponentType) =>
  forwardRef((props: any, ref: React.Ref<any>) => {
    return (
      <DropdownProvider>
        <Component ref={ref} {...props} />
      </DropdownProvider>
    );
  });

export default withDropdownProvider;
