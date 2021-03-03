import React, { useState } from "react";

import { TabProps } from "./Tab";
import TabbedContainer from "./TabbedContainer";
import TabbedHeader from "./TabbedHeader";

export interface TabsProps {
  initialTab: string;
  children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
}

const Tabs = function ({ children, initialTab }: TabsProps) {
  const [selectedTitle, setSelectedTitle] = useState(initialTab);

  return (
    <React.Fragment>
      <TabbedHeader
        selectedTitle={selectedTitle}
        stateCallback={setSelectedTitle}
      >
        {children}
      </TabbedHeader>
      <div className={"margin-bottom-24"} />
      <TabbedContainer selectedTitle={selectedTitle}>
        {children}
      </TabbedContainer>
    </React.Fragment>
  );
};

export default Tabs;
