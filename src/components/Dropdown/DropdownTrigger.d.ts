import * as React from 'react';

declare namespace DropdownTrigger {
    export interface IDropdownTriggerProps<T> extends React.HTMLProps<T> {
      className?: string;
      toggle?: boolean;
      value?: string;
      type?: "link" | "button";
      icon?: string;
    }
    export type DropdownTriggerProps = IDropdownTriggerProps<HTMLDivElement>;
}
declare class DropdownTrigger extends React.Component<DropdownTrigger.DropdownTriggerProps> { }
export = DropdownTrigger;
