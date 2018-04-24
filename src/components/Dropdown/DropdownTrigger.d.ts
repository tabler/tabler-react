import * as React from 'react';

declare namespace DropdownTrigger {
    export interface DropdownTriggerProps extends React.Props<DropdownTrigger> {
      className?: string;
      toggle?: boolean;
      value?: string;
      type?: "link" | "button";
      icon?: string;
    }
}
declare class DropdownTrigger extends React.Component<DropdownTrigger.DropdownTriggerProps> { }
export = DropdownTrigger;
