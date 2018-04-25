import * as React from 'react';

declare namespace DropdownTrigger {
    interface IDropdownTriggerProps<T> extends React.HTMLProps<T> {
      toggle?: boolean;
      value?: string;
      type?: "link" | "button";
      icon?: string;
    }
    type Props = IDropdownTriggerProps<HTMLDivElement>;
    type Component = React.StatelessComponent<Props>;
  }
declare const DropdownTrigger: DropdownTrigger.Component;
export = DropdownTrigger;
