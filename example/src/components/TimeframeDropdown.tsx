import React from "react";
import { Dropdown, El } from "tabler-react";

export const TimeframeDropdown = function() {
  return (
    <Dropdown
      triggerAs={El.A}
      triggerContent="Last 7 days"
      triggerProps={{ className: "text-muted-light", href: "#" }}
      position="bottom-end"
      arrowPosition="right"
      itemsObject={[
        { value: "Last 7 days" },
        { value: "Last 30 days" },
        { value: "Last 3 months" },
      ]}
    />
  );
};

export default TimeframeDropdown;
