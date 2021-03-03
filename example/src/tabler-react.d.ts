/// <reference types="react" />
declare module "types/events/Animation" {
    /**
     * interface definitions for Animation EventHandling
     */
    export interface AnimationEvents {
        /**
         * Handle Animation Start
         */
        onAnimationStart?: (event: React.AnimationEvent) => any;
        /**
         * Handle Animation End
         */
        onAnimationEnd?: (event: React.AnimationEvent) => any;
        /**
         * Handle Animation Interation
         */
        onAnimationIteration?: (event: React.AnimationEvent) => any;
    }
}
declare module "types/events/Clipboard" {
    /**
     * interface definitions for Clipboard EventHandling
     */
    export interface ClipboardEvents {
        /**
         * Handle Copy Event
         */
        onCopy?: (event: React.ClipboardEvent) => any;
        /**
         * Handle Cut Event
         */
        onCut?: (event: React.ClipboardEvent) => any;
        /**
         * Handle Paste Event
         */
        onPaste?: (event: React.ClipboardEvent) => any;
    }
}
declare module "types/events/Composition" {
    /**
     * interface definitions for Composition EventHandling
     */
    export interface CompositionEvents {
        /**
         * Handle Composition Start
         */
        onCompositionStart?: (event: React.ClipboardEvent) => any;
        /**
         * Handle Composition End
         */
        onCompositionEnd?: (event: React.ClipboardEvent) => any;
        /**
         * Handle Composition Update
         */
        onCompositionUpdate?: (event: React.ClipboardEvent) => any;
    }
}
declare module "types/events/Focus" {
    /**
     * interface definitions for Focus EventHandling
     */
    export interface FocusEvents {
        /**
         * Handle Blur Event
         */
        onBlur?: (event: React.FocusEvent) => any;
        /**
         * Handle Focus Event
         */
        onFocus?: (event: React.FocusEvent) => any;
    }
}
declare module "types/events/Form" {
    /**
     * interface definitions for Form EventHandling
     */
    export interface FormEvents {
        /**
         * Handle Change Event
         */
        onChange?: (event: React.ChangeEvent<any>) => any;
        /**
         * Handle Input Event
         */
        onInput?: (event: React.FormEvent) => any;
        /**
         * Handle Invalid Input Event
         */
        onInvalid?: (event: React.FormEvent) => any;
        /**
         * Handle Form Submit Event
         */
        onSubmit?: (event?: React.FormEvent<any> | undefined) => any;
    }
}
declare module "types/events/Image" {
    /**
     * interface definitions for Image EventHandling
     */
    export interface ImageEvents {
        /**
         * Handle Image Loading Event
         */
        onLoad?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Image Error Event
         */
        onError?: (event: React.SyntheticEvent) => any;
    }
}
declare module "types/events/Keyboard" {
    /**
     * interface definitions for Keyboard EventHandling
     */
    export interface KeyboardEvents {
        /**
         * Handle Key Down Event
         */
        onKeyDown?: (event: React.KeyboardEvent) => any;
        /**
         * Handle Key Press Event
         */
        onKeyPress?: (event: React.KeyboardEvent) => any;
        /**
         * Handle Key Up Event
         */
        onKeyUp?: (event: React.KeyboardEvent) => any;
    }
}
declare module "types/events/Media" {
    /**
     * interface definitions for Media EventHandling
     */
    export interface MediaEvents {
        /**
         * Handle Media Abort Event
         */
        onAbort?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Can Play Event
         */
        onCanPlay?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Can Play Through Event
         */
        onCanPlayThrough?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Duration Change Event
         */
        onDurationChange?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Emptied Event
         */
        onEmptied?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Encrypted Media
         */
        onEncrypted?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media End Event
         */
        onEnded?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Error Event
         */
        onError?: (event: React.SyntheticEvent) => any;
        /**
         * Handle End of Media Data Loading
         */
        onLoadedData?: (event: React.SyntheticEvent) => any;
        /**
         * Handle End of Media Metadata Loading
         */
        onLoadedMetadata?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Start of  Media Loading
         */
        onLoadStart?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Pause Event
         */
        onPause?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Play Event
         */
        onPlay?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Playing
         */
        onPlaying?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Progress
         */
        onProgress?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Rate Change
         */
        onRateChange?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Seeked Media Event
         */
        onSeeked?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Seeking
         */
        onSeeking?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Stalled Media Event
         */
        onStalled?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Suspend Event
         */
        onSuspend?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Time Update
         */
        onTimeUpdate?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Volume Change
         */
        onVolumeChange?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Media Waiting
         */
        onWaiting?: (event: React.SyntheticEvent) => any;
    }
}
declare module "types/events/Mouse" {
    /**
     * interface definitions for Mouse EventHandling
     */
    export interface MouseEvents {
        /**
         * Handle Single-click Event (Left-click)
         */
        onClick?: (event: React.MouseEvent) => any;
        /**
         * Handle ContextMenu Click Event (Right-click)
         */
        onContextMenu?: (event: React.MouseEvent) => any;
        /**
         * Handle Double-click Event (Left-click)
         */
        onDoubleClick?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Drag Event
         */
        onDrag?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Dragging End Event
         */
        onDragEnd?: (event: React.MouseEvent) => any;
        /**
         * Handle Drag Enter of Current Component
         */
        onDragEnter?: (event: React.MouseEvent) => any;
        /**
         * Handle Drag Exit of the Window
         */
        onDragExit?: (event: React.MouseEvent) => any;
        /**
         * Handle Drag Leave of Current Component
         */
        onDragLeave?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Drag Over Event
         */
        onDragOver?: (event: React.MouseEvent) => any;
        /**
         * Handle Drag Start Event
         */
        onDragStart?: (event: React.MouseEvent) => any;
        /**
         * Handle Drag-Release Event (Drop)
         */
        onDrop?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Down Event
         */
        onMouseDown?: (event: React.MouseEvent) => any;
        /**
         * Handle the entering (hovering) of the Component.
         */
        onMouseEnter?: (event: React.MouseEvent) => any;
        /**
         * Handle the exiting of the Component.
         */
        onMouseLeave?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Move Event
         */
        onMouseMove?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Out Event
         */
        onMouseOut?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Over Event
         */
        onMouseOver?: (event: React.MouseEvent) => any;
        /**
         * Handle Mouse Up Event
         */
        onMouseUp?: (event: React.MouseEvent) => any;
    }
}
declare module "types/events/Other" {
    /**
     * interface definitions for Other EventHandling
     */
    export interface OtherEvents {
        /**
         * Handle Toggling Event
         */
        onToggle?: (event: React.SyntheticEvent) => void;
    }
}
declare module "types/events/Pointer" {
    /**
     * interface definitions for Pointer EventHandling
     */
    export interface PointerEvents {
        /**
         * Handle Pointer Down Event
         */
        onPointerDown?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Move Event
         */
        onPointerMove?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Up Event
         */
        onPointerUp?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Cancel Event
         */
        onPointerCancel?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Capture Acquisition Event
         */
        onGotPointerCapture?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Capture Loss Event
         */
        onLostPointerCapture?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Entering the Current Component
         */
        onPointerEnter?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Leaving the Current Component Event
         */
        onPointerLeave?: (event: React.SyntheticEvent) => any;
        /**
         * Handle Pointer Over Event
         */
        onPointerOver?: (event: React.SyntheticEvent) => any;
    }
}
declare module "types/events/Select" {
    /**
     * interface definitions for Selection EventHandling
     */
    export interface SelectionEvents {
        /**
         * Handle Selection Event
         */
        onSelect?: (event: React.SyntheticEvent) => any;
    }
}
declare module "types/events/Touch" {
    /**
     * interface definitions for Touch EventHandling
     */
    export interface TouchEvents {
        /**
         * Handle Touch Cancel Event
         */
        onTouchCancel?: (event: React.TouchEvent) => any;
        /**
         * Handle Touch End Event
         */
        onTouchEnd?: (event: React.TouchEvent) => any;
        /**
         * Handle Touch Move Event
         */
        onTouchMove?: (event: React.TouchEvent) => any;
        /**
         * Handle Touch Start Event
         */
        onTouchStart?: (event: React.TouchEvent) => any;
    }
}
declare module "types/events/UI" {
    /**
     * interface definitions for UI EventHandling
     */
    export interface UIEvents {
        /**
         * Handle Scroll Event
         */
        onScroll?: (event: React.UIEvent) => any;
    }
}
declare module "types/events/Wheel" {
    /**
     * interface definitions for Wheel EventHandling
     */
    export interface WheelEvents {
        /**
         * Handle Wheel Event
         */
        onWheel?: (event: React.WheelEvent) => any;
    }
}
declare module "types/events/index" {
    export * from "types/events/Animation";
    export * from "types/events/Clipboard";
    export * from "types/events/Composition";
    export * from "types/events/Focus";
    export * from "types/events/Form";
    export * from "types/events/Image";
    export * from "types/events/Keyboard";
    export * from "types/events/Media";
    export * from "types/events/Mouse";
    export * from "types/events/Other";
    export * from "types/events/Pointer";
    export * from "types/events/Select";
    export * from "types/events/Touch";
    export * from "types/events/UI";
    export * from "types/events/Wheel";
}
declare module "helpers/utilityPropsToClassNames" {
    import { ClassValue } from "classnames/types";
    type autoOrNumber = "auto" | number;
    type spacePropBreakpoints = {
        xs?: autoOrNumber;
        sm?: autoOrNumber;
        md?: autoOrNumber;
        lg?: autoOrNumber;
        xl?: autoOrNumber;
    };
    type spacePropValue = autoOrNumber | spacePropBreakpoints;
    type displayTypes = "none" | "inline" | "inline-block" | "block" | "table" | "table-cell" | "table-row" | "flex" | "inline-flex";
    type DisplayPropBreakPoints = {
        xs?: displayTypes;
        sm?: displayTypes;
        md?: displayTypes;
        lg?: displayTypes;
        xl?: displayTypes;
    };
    export interface UtilityProps {
        /**
         * Display prop
         */
        d?: "none" | "inline" | "inline-block" | "block" | "table" | "table-cell" | "table-row" | "flex" | "inline-flex" | DisplayPropBreakPoints;
        m?: spacePropValue;
        mt?: spacePropValue;
        mb?: spacePropValue;
        ml?: spacePropValue;
        mr?: spacePropValue;
        mx?: spacePropValue;
        my?: spacePropValue;
        p?: spacePropValue;
        pt?: spacePropValue;
        pb?: spacePropValue;
        pl?: spacePropValue;
        pr?: spacePropValue;
        px?: spacePropValue;
        py?: spacePropValue;
        textTransform?: "lowercase" | "uppercase" | "capitalize";
    }
    type utilityPropKeys = keyof UtilityProps;
    export const utilityPropsKeys: utilityPropKeys[];
    export const getUtilityPropsClasses: (props: {
        [key: string]: any;
    }) => ClassValue[];
    export default getUtilityPropsClasses;
}
declare module "types/TablerComponent" {
    import React, { CSSProperties } from "react";
    import { UtilityProps } from "helpers/utilityPropsToClassNames";
    /**
     * Base Props Interface for Tabler components
     */
    export interface TablerComponent extends UtilityProps {
        children?: React.ReactNode;
        className?: string;
        style?: CSSProperties;
    }
}
declare module "types/index" {
    export * from "types/events/index";
    export * from "types/TablerComponent";
    export interface ReactHTMLElementWithoutRef<T extends HTMLElement> extends Omit<React.HTMLProps<React.ReactHTMLElement<T>>, "ref"> {
    }
    export interface HTMLPropsWithoutRef<T extends HTMLElement> extends Omit<React.HTMLProps<T>, "ref" | "as"> {
    }
    export interface ReactHTMLElementProps<T extends HTMLElement> extends React.HTMLProps<React.ReactHTMLElement<T>> {
    }
    export interface HTMLElementProps<T extends HTMLElement> extends React.HTMLProps<T> {
    }
}
declare module "components/Icon/Icon" {
    import { HTMLAttributes } from "react";
    export interface IconProps extends HTMLAttributes<HTMLElement> {
        /**
         * Should this icon be rendered within an <a> tag
         */
        link?: boolean;
        /**
         * The icon prefix
         */
        prefix?: string;
        /**
         * The icon name
         */
        name: string;
        isAriaHidden?: boolean;
        /**
         * Use the built-in payment icon set
         */
        payment?: boolean;
        /**
         * Use the built-in flag icon set
         */
        flag?: boolean;
        /**
         * A thinner version of the icon
         */
        thin?: boolean;
    }
    /**
     * Display an icon.
     * Uses the included feathers icon set by default but you can add your own
     */
    function Icon({ prefix: prefixFromProps, name, className, link, isAriaHidden, payment, flag, thin, ...rest }: IconProps): JSX.Element;
    /** @component */
    export default Icon;
}
declare module "components/Icon/index" {
    import Icon from "components/Icon/Icon";
    export { Icon as default };
}
declare module "helpers/capitalize" {
    export const capitalize: (str: any) => string;
    export default capitalize;
}
declare module "helpers/makeHtmlElement" {
    import React, { ElementType } from "react";
    import { UtilityProps } from "helpers/utilityPropsToClassNames";
    import { ClassValue } from "classnames/types";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface ELProps extends UtilityProps {
        classNames?: ClassValue;
        as?: ElementType;
        [key: string]: any;
    }
    export interface ComponentProps<T extends HTMLElement> extends ELProps, Omit<HTMLPropsWithoutRef<T>, "as"> {
    }
    export const makeElement: <T extends HTMLElement>(element: ElementType) => React.ForwardRefExoticComponent<Pick<ComponentProps<T>, string | number> & React.RefAttributes<HTMLElement>>;
    export default makeElement;
}
declare module "components/El/El" {
    export const Div: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Span: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Header: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Section: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Nav: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Footer: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const A: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLAnchorElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Button: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLButtonElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const P: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLParagraphElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Ul: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLUListElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Li: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLLIElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Ol: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLOListElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const H1: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const H2: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const H3: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const H4: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const H5: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const H6: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Form: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLFormElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Input: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLInputElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Textarea: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTextAreaElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Select: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLSelectElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Option: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLOptionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Fieldset: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLFieldSetElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Label: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLLabelElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Iframe: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLIFrameElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Small: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Table: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Thead: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableSectionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Tbody: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableSectionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Tfoot: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableSectionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Col: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableColElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Tr: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableRowElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Td: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableCellElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const Th: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableHeaderCellElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    export const El: {
        Div: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Span: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Header: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Section: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Nav: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Footer: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        A: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLAnchorElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Button: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLButtonElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        P: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLParagraphElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        H1: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        H2: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        H3: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        H4: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        H5: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        H6: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLHeadingElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Ul: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLUListElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Li: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLLIElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Ol: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLOListElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Form: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLFormElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Input: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLInputElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Textarea: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTextAreaElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Select: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLSelectElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Option: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLOptionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Fieldset: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLFieldSetElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Label: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLLabelElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Iframe: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLIFrameElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Small: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLDivElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Table: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Thead: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableSectionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Tbody: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableSectionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Tfoot: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableSectionElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Col: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableColElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Tr: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableRowElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Td: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableCellElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
        Th: import("react").ForwardRefExoticComponent<Pick<import("helpers/makeHtmlElement").ComponentProps<HTMLTableHeaderCellElement>, string | number> & import("react").RefAttributes<HTMLElement>>;
    };
    export default El;
}
declare module "components/El/index" {
    import El from "components/El/El";
    export * from "components/El/El";
    export default El;
}
declare module "components/Avatar/AvatarList" {
    import * as React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface AvatarListProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        children?: React.ReactNode;
        className?: string;
        /**
         * Renders the Avatars to look stacked by slightly overlapping each over
         */
        stacked?: boolean;
    }
    /**
     * Renders a group of Icons
     */
    export function AvatarList({ className, children, stacked, ...rest }: AvatarListProps): JSX.Element;
    export default AvatarList;
}
declare module "colors" {
    const colors: {
        white: string;
        blue: string;
        "blue-darkest": string;
        "blue-darker": string;
        "blue-dark": string;
        "blue-light": string;
        "blue-lighter": string;
        "blue-lightest": string;
        azure: string;
        "azure-darkest": string;
        "azure-darker": string;
        "azure-dark": string;
        "azure-light": string;
        "azure-lighter": string;
        "azure-lightest": string;
        indigo: string;
        "indigo-darkest": string;
        "indigo-darker": string;
        "indigo-dark": string;
        "indigo-light": string;
        "indigo-lighter": string;
        "indigo-lightest": string;
        purple: string;
        "purple-darkest": string;
        "purple-darker": string;
        "purple-dark": string;
        "purple-light": string;
        "purple-lighter": string;
        "purple-lightest": string;
        pink: string;
        "pink-darkest": string;
        "pink-darker": string;
        "pink-dark": string;
        "pink-light": string;
        "pink-lighter": string;
        "pink-lightest": string;
        red: string;
        "red-darkest": string;
        "red-darker": string;
        "red-dark": string;
        "red-light": string;
        "red-lighter": string;
        "red-lightest": string;
        orange: string;
        "orange-darkest": string;
        "orange-darker": string;
        "orange-dark": string;
        "orange-light": string;
        "orange-lighter": string;
        "orange-lightest": string;
        yellow: string;
        "yellow-darkest": string;
        "yellow-darker": string;
        "yellow-dark": string;
        "yellow-light": string;
        "yellow-lighter": string;
        "yellow-lightest": string;
        lime: string;
        "lime-darkest": string;
        "lime-darker": string;
        "lime-dark": string;
        "lime-light": string;
        "lime-lighter": string;
        "lime-lightest": string;
        green: string;
        "green-darkest": string;
        "green-darker": string;
        "green-dark": string;
        "green-light": string;
        "green-lighter": string;
        "green-lightest": string;
        teal: string;
        "teal-darkest": string;
        "teal-darker": string;
        "teal-dark": string;
        "teal-light": string;
        "teal-lighter": string;
        "teal-lightest": string;
        cyan: string;
        "cyan-darkest": string;
        "cyan-darker": string;
        "cyan-dark": string;
        "cyan-light": string;
        "cyan-lighter": string;
        "cyan-lightest": string;
        gray: string;
        "gray-darkest": string;
        "gray-darker": string;
        "gray-light": string;
        "gray-lighter": string;
        "gray-lightest": string;
        "gray-dark": string;
        "gray-dark-darkest": string;
        "gray-dark-darker": string;
        "gray-dark-dark": string;
        "gray-dark-light": string;
        "gray-dark-lighter": string;
        "gray-dark-lightest": string;
    };
    export const softColors: string[];
    type ltColors = "blue-lt" | "azure-lt" | "indigo-lt" | "purple-lt" | "pink-lt" | "red-lt" | "orange-lt" | "yellow-lt" | "lime-lt" | "green-lt" | "teal-lt" | "cyan-lt" | "gray-lt" | "dark-lt";
    export type colors = keyof typeof colors | ltColors | "danger" | "success" | "warning" | "info" | "primary" | "secondary" | string;
    export default colors;
}
declare module "components/Badge/BadgeAddOn" {
    import * as React from "react";
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    export interface BadgeAddOnProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "as"> {
        children?: React.ReactNode;
        className?: string;
        /**
         * Display an icon of this name
         */
        icon?: string;
        /**
         * Background color
         */
        color?: colors;
        /**
         * @deprecated use 'as'
         */
        link?: boolean;
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        /**
         * Render component as something else
         */
        as?: React.ElementType;
    }
    /**
     * Appended something to the inside of the badge
     */
    export function BadgeAddOn({ children, className, icon, color, as, RootComponent, ...rest }: BadgeAddOnProps): JSX.Element;
    export default BadgeAddOn;
}
declare module "components/Badge/Badge" {
    import React from "react";
    import { HTMLPropsWithoutRef } from "types/index";
    import { colors } from "colors";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface BadgeProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "as"> {
        /**
         * Rounded corners
         */
        rounded?: boolean;
        /**
         * Background color
         */
        color?: colors;
        /**
         * URL to an image/avatar to display inside
         */
        avatar?: string;
        /**
         * Add a X to remove the tag
         */
        remove?: boolean;
        /**
         * When the remove X is clicked
         */
        onRemoveClick?: React.MouseEventHandler;
        /**
         * Append something to the inside of the badge
         */
        addOn?: React.ReactNode;
        /**
         * The addon icon
         */
        addOnIcon?: string;
        /**
         * The addon background color
         */
        addOnColor?: string;
        /**
         * When the addon is clicked
         */
        onAddOnClick?: React.MouseEventHandler;
        /**
         * @deprecated use 'as'
         */
        link?: true;
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        /**
         * Text color
         */
        textColor?: colors;
        /**
         * Rounded corners
         */
        pill?: boolean;
        /**
         * Render this component as something else
         */
        as?: React.ElementType;
    }
    export const Badge: React.ForwardRefExoticComponent<Pick<BadgeProps, string | number> & React.RefAttributes<unknown>>;
    export default Badge;
}
declare module "components/Badge/BadgeList" {
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface Props extends ELProps, HTMLPropsWithoutRef<HTMLSpanElement> {
    }
    /**
     * Adds a space between its child Badges
     */
    export const BadgeList: ({ children, className, ...rest }: Props) => JSX.Element;
    export default BadgeList;
}
declare module "components/Badge/index" {
    import Badge from "components/Badge/Badge";
    import BadgeAddOn from "components/Badge/BadgeAddOn";
    import BadgeList from "components/Badge/BadgeList";
    const CompoundBadge: import("react").ForwardRefExoticComponent<Pick<import("components/Badge/Badge").BadgeProps, string | number> & import("react").RefAttributes<unknown>> & {
        AddOn: typeof BadgeAddOn;
        List: typeof BadgeList;
    };
    export { CompoundBadge as default, Badge, BadgeAddOn, BadgeList };
}
declare module "components/Avatar/Avatar" {
    import AvatarList from "components/Avatar/AvatarList";
    import { HTMLPropsWithoutRef } from "types/index";
    import { colors } from "colors";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface Props extends ELProps, Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "placeholder" | "size"> {
        /**
         * The URL of the image to be displayed
         */
        imageURL?: string;
        /**
         * Size
         */
        size?: "sm" | "md" | "lg" | "xl" | "xxl";
        /**
         * Display a colored status dot with the avatar
         */
        status?: colors;
        /**
         * Displays the user icon as a placeholder
         */
        placeholder?: boolean;
        /**
         * Render an icon instead of an imageURL
         */
        icon?: string;
        /**
         * The background and font color of the circle
         */
        color?: colors;
    }
    /**
     * Renders a single circular avatar
     */
    export function Avatar({ className, children, imageURL, style, size, status, placeholder, icon, color, ...rest }: Props): JSX.Element;
    /**
     * Renders a single circular avatar
     */
    export namespace Avatar {
        var List: typeof AvatarList;
    }
    export default Avatar;
}
declare module "components/Avatar/index" {
    import Avatar from "components/Avatar/Avatar";
    export { Avatar as default };
}
declare module "components/Text/Text" {
    import React, { HTMLProps } from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    interface AlignProps {
        align?: "left" | "center" | "right" | "justify";
        left?: boolean;
        center?: boolean;
        right?: boolean;
        justify?: boolean;
    }
    interface TransformProps {
        transform?: "lowercase" | "uppercase" | "capitalize";
        lowercase?: boolean;
        uppercase?: boolean;
        capitalize?: boolean;
    }
    interface TrackingProps {
        tracking?: "tight" | "normal" | "wide";
        trackingTight?: boolean;
        trackingNormal?: boolean;
        trackingWide?: boolean;
    }
    interface LeadingProps {
        leading?: "none" | "tight" | "normal" | "loose";
        leadingNone?: boolean;
        leadingTight?: boolean;
        leadingNormal?: boolean;
        leadingLoose?: boolean;
    }
    export interface TextProps<AS extends HTMLElement = HTMLDivElement> extends ELProps, Omit<HTMLProps<AS>, "as" | "color" | "size" | "wrap">, AlignProps, TransformProps, TrackingProps, LeadingProps {
        as?: React.ElementType;
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        color?: colors;
        size?: string;
        wrap?: boolean;
        muted?: boolean;
    }
    const Text: <AS extends HTMLElement = HTMLDivElement>({ className, children, RootComponent, as, color, size, wrap, muted, align: alignFromProps, left, center, right, justify, transform: transformFromProps, lowercase, uppercase, capitalize, tracking: trackingFromProps, trackingTight, trackingNormal, trackingWide, leading: leadingFromProps, leadingNone, leadingTight, leadingNormal, leadingLoose, ...rest }: TextProps<AS>) => JSX.Element;
    /** @component */
    export default Text;
}
declare module "components/Text/TextSmall" {
    import { TextProps } from "components/Text/Text";
    export interface TextSmallProps extends TextProps {
    }
    const TextSmall: ({ children, ...rest }: TextSmallProps) => JSX.Element;
    export default TextSmall;
}
declare module "components/Text/index" {
    import Text from "components/Text/Text";
    import TextSmall from "components/Text/TextSmall";
    const CompoundText: (<AS extends HTMLElement = HTMLDivElement>({ className, children, RootComponent, as, color, size, wrap, muted, align: alignFromProps, left, center, right, justify, transform: transformFromProps, lowercase, uppercase, capitalize, tracking: trackingFromProps, trackingTight, trackingNormal, trackingWide, leading: leadingFromProps, leadingNone, leadingTight, leadingNormal, leadingLoose, ...rest }: import("components/Text/Text").TextProps<AS>) => JSX.Element) & {
        Small: typeof TextSmall;
    };
    export { CompoundText as default, Text, TextSmall };
}
declare module "components/Notification/Notification" {
    import * as React from "react";
    export interface Props {
        /**
         * The  avatar image URL
         */
        avatarURL?: string;
        /**
         * The message displayed within the Notification
         */
        message: React.ReactNode;
        /**
         * The time displayed within the Notification
         */
        time?: string;
        /**
         * Indicate the notification as unread
         */
        unread?: boolean;
    }
    /**
     * An individual Notification made up of an Avatar alongside some text and the time
     */
    function Notification({ avatarURL, message, time }: Props): JSX.Element;
    export default Notification;
}
declare module "components/Dropdown/DropdownContext" {
    import React from "react";
    export const DropdownContext: React.Context<[boolean, Function]>;
    export default DropdownContext;
}
declare module "components/Dropdown/DropdownTrigger" {
    import { colors } from "colors";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface DropdownTriggerProps extends ELProps {
        /**
         * Display an arrow alongside the trigger content
         */
        toggle?: boolean;
        /**
         * The value to be displayed within the trigger if children is not included
         */
        value?: string;
        /**
         * The background color for a Button trigger
         */
        color?: colors;
        /**
         * An Icon displayed to the left of the trigger content
         */
        icon?: string;
        /**
         * Is this trigger being used as a NavLink
         */
        isNavLink?: boolean;
        /**
         * Is this trigger beind used as a Card.Header option
         */
        isOption?: boolean;
    }
    /**
     * Provides the trigger element for a Dropdown
     */
    function DropdownTrigger({ className, toggle, value, children, icon, isNavLink, isOption, as: Component, ...rest }: DropdownTriggerProps): JSX.Element;
    /** @component */
    export default DropdownTrigger;
}
declare module "components/Dropdown/DropdownMenu" {
    import React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface DropdownMenuProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {
        children?: React.ReactNode;
        className?: string;
        position?: any;
        /**
         * Display an arrow pointing towards the trigger
         */
        arrow?: boolean;
        /**
         * The position of the arrow pointing towards the trigger
         */
        arrowPosition?: "left" | "right";
        rootRef?: (el: HTMLElement) => void;
        /**
         * Show the DropdownMenu
         * @deprecated use context
         */
        show?: boolean;
    }
    /**
     * The wrapper element for a Dropdowns Items
     */
    function DropdownMenu({ className, children, position, arrow, arrowPosition, style: _style, show, ...rest }: DropdownMenuProps): JSX.Element;
    export default DropdownMenu;
}
declare module "components/Dropdown/DropdownItem" {
    import * as React from "react";
    import { colors } from "colors";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface DropdownItemProps extends ELProps, Omit<React.HTMLProps<React.ReactHTMLElement<HTMLAnchorElement>>, "as"> {
        /**
         * Display an Icon to the left of DropdownItem content
         */
        icon?: string;
        /**
         * The content of the DropdownItem if children is not used
         */
        value?: string;
        /**
         * Display a badge with this content to the right of DropdownItem content
         */
        badge?: string;
        /**
         * The type/color of Badge to be displayed
         */
        badgeType?: colors;
        /**
         * A component to be used instead of an <a> tag
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        as?: React.ElementType;
    }
    /**
     * An individual item that should be contained within a Dropdown.Menu
     */
    function DropdownItem({ className, icon, value, children, badge, badgeType, as, RootComponent, ...rest }: DropdownItemProps): JSX.Element;
    /** @component */
    export default DropdownItem;
}
declare module "components/Dropdown/DropdownItemDivider" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface DropdownItemDividerProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    /**
     * Used to seperate items within a Dropdown with a horizontal line
     */
    export function DropdownItemDivider({ children, ...rest }: DropdownItemDividerProps): JSX.Element;
    export default DropdownItemDivider;
}
declare module "helpers/ClickOutside" {
    import React from "react";
    interface Props {
        children: (v: {
            setElementRef: (el: HTMLElement) => any;
        }) => React.ReactNode;
        onOutsideClick: () => void;
    }
    export const useClickOutside: (onOutsideClick: Function, ref?: React.Ref<any> | undefined) => React.MutableRefObject<HTMLElement | null>;
    /**
     * A helper to help you do something when a user clicks outside of a component
     */
    class ClickOutside extends React.PureComponent<Props, {}> {
        elementRef: HTMLElement | undefined;
        componentDidMount: () => void;
        componentWillUnmount: () => void;
        setElementRef: (el: HTMLElement) => void;
        isOutsideClick: (target: any) => boolean | undefined;
        handleOutsideOnClick: React.EventHandler<any>;
        render(): React.ReactNode;
    }
    export default ClickOutside;
}
declare module "components/Dropdown/DropdownProvider" {
    import React from "react";
    export interface DropdownProviderProps {
        children: React.ReactChild | React.ReactChildren;
    }
    export const DropdownProvider: ({ children }: DropdownProviderProps) => JSX.Element;
    export default DropdownProvider;
}
declare module "components/Dropdown/withDropdownProvider" {
    import React from "react";
    export const withDropdownProvider: (Component: React.ComponentType) => React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
    export default withDropdownProvider;
}
declare module "components/Dropdown/Dropdown" {
    import React from "react";
    import { DropdownTriggerProps } from "components/Dropdown/DropdownTrigger";
    import { DropdownItemProps } from "components/Dropdown/DropdownItem";
    import { DropdownItemDividerProps } from "components/Dropdown/DropdownItemDivider";
    import { colors } from "colors";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface DropdownProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {
        /**
         * This dropdown should only be displayed on desktop
         */
        desktopOnly?: boolean;
        /**
         * The trigger component for this Dropdown
         */
        trigger?: any;
        /**
         * Is this Dropdown a Card option?
         */
        isOption?: boolean;
        /**
         * Add flex classes to the Dropdown
         */
        flex?: boolean | "xs" | "sm" | "md" | "lg" | "xl";
        /**
         * Any additional classNames for the trigger component
         */
        triggerClassName?: string;
        /**
         * Is this Dropdown being used as a Nav Link?
         */
        isNavLink?: boolean;
        /**
         * An Icon to be displayed within the trigger
         */
        icon?: string;
        /**
         * The trigger content
         */
        triggerContent?: React.ReactNode;
        /**
         * Component to render the trigger as
         */
        triggerAs?: React.ElementType<DropdownTriggerProps>;
        /**
         * The triggers background color
         */
        color?: colors;
        /**
         * Should the trigger display an arrow toggler?
         */
        toggle?: boolean;
        items?: React.ReactNode;
        dropdownMenuClassName?: string;
        /**
         * The DropdownMenu position
         */
        position?: any;
        /**
         * Display an arrow between the trigger and menu?
         */
        arrow?: boolean;
        /**
         * The position of the arrow between the trigger and menu
         */
        arrowPosition?: "left" | "right";
        /**
         * The items for this Dropdowns menu in object form
         */
        itemsObject?: Array<itemObject>;
        /**
         * The default RootComponent for all itemsObjects.
         * itemsObjects[x].RootComponent takes priority
         */
        itemsRootComponent?: React.ElementType;
        triggerProps?: DropdownTriggerProps;
    }
    export interface itemObject extends DropdownItemProps {
        isDivider?: boolean;
        dividerProps?: DropdownItemDividerProps;
        [key: string]: any;
    }
    const _default: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
    export default _default;
}
declare module "components/Dropdown/index" {
    import Dropdown from "components/Dropdown/Dropdown";
    import DropdownTrigger from "components/Dropdown/DropdownTrigger";
    import DropdownMenu from "components/Dropdown/DropdownMenu";
    import DropdownItem from "components/Dropdown/DropdownItem";
    import DropdownItemDivider from "components/Dropdown/DropdownItemDivider";
    const CompoundDropdown: import("react").ForwardRefExoticComponent<Pick<any, string | number | symbol> & import("react").RefAttributes<any>> & {
        Trigger: typeof DropdownTrigger;
        Menu: typeof DropdownMenu;
        Item: typeof DropdownItem;
        ItemDivider: typeof DropdownItemDivider;
    };
    export { CompoundDropdown as default, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownItemDivider, };
}
declare module "components/Nav/NavLinkTitle" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface NavLinkTitleProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "as"> {
    }
    export function NavLinkTitle({ children, className, ...rest }: NavLinkTitleProps): JSX.Element;
    export default NavLinkTitle;
}
declare module "components/Nav/NavLink" {
    import React from "react";
    import { TablerComponent } from "types/index";
    export interface NavLinkProps extends TablerComponent {
        as?: React.ElementType;
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        active?: boolean;
        icon?: string;
        to?: string;
        hasSubNav?: boolean;
        rootRef?: any;
        useExact?: boolean;
        title?: React.ReactNode;
        collapsed?: boolean;
        isToggle?: boolean;
        [key: string]: any;
    }
    export const NavLink: React.ForwardRefExoticComponent<Pick<NavLinkProps, string | number> & React.RefAttributes<any>>;
    export default NavLink;
}
declare module "components/Nav/NavSubNav" {
    import React from "react";
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface NavSubNavProps extends ELProps, HTMLPropsWithoutRef<HTMLElement> {
        as?: React.ElementType;
        collapsed?: boolean;
        show?: boolean;
    }
    function NavSubNav({ as: Component, className, children, collapsed, show, ...rest }: NavSubNavProps): JSX.Element;
    export default NavSubNav;
}
declare module "components/Nav/NavSubNavContext" {
    import React from "react";
    export const NavSubNavContext: React.Context<boolean>;
    export default NavSubNavContext;
}
declare module "components/Nav/NavItem" {
    import React from "react";
    import { NavLinkProps } from "components/Nav/NavLink";
    import { TablerComponent } from "types/index";
    export interface NavItemProps extends TablerComponent {
        as?: React.ElementType;
        linkAs?: React.ElementType;
        linkProps?: NavLinkProps;
        value?: string;
        /**
         * @deprecated use 'linkAs'
         */
        LinkComponent?: React.ElementType;
        /**
         * @deprecated use 'linkProps'
         */
        href?: string;
        /**
         * @deprecated use 'linkProps'
         */
        to?: string;
        /**
         * @deprecated use 'linkProps'
         */
        icon?: string;
        /**
         * @deprecated use 'as'
         */
        type?: "li" | "div";
        /**
         * Make this item behave like it has a subNav even if you dont use subItems or subItemsObjects
         */
        hasSubNav?: boolean;
        onClick?: () => void;
        /**
         * @deprecated use 'linkProps'
         * Display this item in an active, or currently viewing, state
         */
        active?: boolean;
        subItems?: React.ReactNode;
        subItemsObjects?: Array<NavItemProps>;
        /**
         * Position of the subnav Dropdown
         */
        position?: any;
        /**
         * @deprecated use 'linkProps'
         * Whether or not to pass "exact" property to underlying NavLink component
         */
        useExact?: boolean;
        /**
         * Will wrap children in a NavLink
         */
        link?: boolean;
        subNav?: React.ReactNode;
        [key: string]: any;
    }
    export const NavItem: React.ForwardRefExoticComponent<Pick<NavItemProps, string | number> & React.RefAttributes<any>>;
    /** @component */
    export default NavItem;
}
declare module "components/Nav/NavSubItem" {
    import * as React from "react";
    import { TablerComponent } from "types/index";
    import { DropdownItemProps } from "components/Dropdown/DropdownItem";
    export interface NavSubItemProps extends TablerComponent, DropdownItemProps {
        as?: React.ElementType;
        LinkComponent?: React.ElementType;
        /**
         * @deprecated use children
         */
        value?: string;
        [key: string]: any;
    }
    function NavSubItem({ children, as, LinkComponent, value, ...props }: NavSubItemProps): JSX.Element;
    export default NavSubItem;
}
declare module "components/Header/Header" {
    import React, { HTMLProps } from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface HeaderProps<AS extends HTMLElement = HTMLDivElement> extends ELProps, Omit<HTMLProps<AS>, "as"> {
        /**
         * A component to use instead of a <div> as the root component
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        as?: React.ElementType;
        /**
         * The size of the header
         */
        size?: 1 | 2 | 3 | 4 | 5 | 6;
    }
    /**
     * A header
     * By default renders a div not a <hX> tag and has no additional spacing classes applied
     */
    function Header<AS extends HTMLElement = HTMLDivElement>({ as, RootComponent, className, children, size, ...props }: HeaderProps<AS>): JSX.Element;
    export default Header;
}
declare module "components/Header/H6" {
    import { HeaderProps } from "components/Header/Header";
    export interface H6Props extends HeaderProps<HTMLHeadingElement> {
    }
    /**
     * A Header component rendered as a h6 HTML element with a margin below
     */
    function H6({ children, as, mt, mb, size, ...props }: H6Props): JSX.Element;
    export default H6;
}
declare module "components/Nav/NavBarHeading" {
    import { H6Props } from "components/Header/H6";
    export interface NavBarHeadingProps extends H6Props {
    }
    export function NavBarHeading({ children, className, ...rest }: NavBarHeadingProps): JSX.Element;
    export default NavBarHeading;
}
declare module "components/Nav/Nav" {
    import React from "react";
    import { NavItemProps } from "components/Nav/NavItem";
    import { TablerComponent } from "types/index";
    export interface NavProps extends TablerComponent {
        as?: React.ElementType;
        tabbed?: boolean;
        items?: React.ReactNode;
        itemsObjects?: Array<NavItemProps>;
        routerContextComponentType?: any;
        isMenu?: boolean;
        heading?: string;
    }
    const Nav: ({ as: Component, className, children, tabbed, items, itemsObjects, routerContextComponentType, isMenu, heading, ...rest }: NavProps) => JSX.Element;
    export default Nav;
}
declare module "components/Nav/NavSubmenu" {
    import * as React from "react";
    import { TablerComponent } from "types/index";
    export interface NavSubmenuProps extends TablerComponent {
        as?: React.ElementType;
    }
    function NavSubmenu({ as: Component, className, children, ...rest }: NavSubmenuProps): JSX.Element;
    export default NavSubmenu;
}
declare module "components/Nav/NavSubmenuItem" {
    import * as React from "react";
    import { TablerComponent } from "types/index";
    export interface NavSubmenuItemProps extends TablerComponent {
        as?: React.ElementType;
        RootComponent?: React.ElementType;
        active?: boolean;
        icon?: string;
        [key: string]: any;
    }
    function NavSubmenuItem({ className, as, RootComponent, icon, children, active, ...rest }: NavSubmenuItemProps): JSX.Element;
    export default NavSubmenuItem;
}
declare module "components/Nav/NavBar" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface NavBarProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {
        isDark?: boolean;
        isSide?: boolean;
        side?: "left" | "right";
        expand?: "xs" | "sm" | "md" | "lg" | "xl";
    }
    export function NavBar({ children, className, isDark, isSide, side, expand, ...rest }: NavBarProps): JSX.Element;
    export default NavBar;
}
declare module "components/Nav/index" {
    import NavItem from "components/Nav/NavItem";
    import NavLink from "components/Nav/NavLink";
    import NavSubItem from "components/Nav/NavSubItem";
    import NavSubmenu from "components/Nav/NavSubmenu";
    import NavSubmenuItem from "components/Nav/NavSubmenuItem";
    import NavLinkTitle from "components/Nav/NavLinkTitle";
    import NavSubNav from "components/Nav/NavSubNav";
    import NavBar from "components/Nav/NavBar";
    import NavBarHeading from "components/Nav/NavBarHeading";
    const CompoundNav: (({ as: Component, className, children, tabbed, items, itemsObjects, routerContextComponentType, isMenu, heading, ...rest }: import("components/Nav/Nav").NavProps) => JSX.Element) & {
        Item: typeof NavItem;
        SubItem: typeof NavSubItem;
        Link: typeof NavLink;
        LinkTitle: typeof NavLinkTitle;
        Submenu: typeof NavSubmenu;
        SubmenuItem: typeof NavSubmenuItem;
        SubNav: typeof NavSubNav;
        Bar: typeof NavBar;
        BarHeading: typeof NavBarHeading;
    };
    export { CompoundNav as default, CompoundNav as Nav, NavItem, NavSubItem, NavLink, NavLinkTitle, NavSubmenu, NavSubmenuItem, NavSubNav, NavBarHeading, };
}
declare module "components/Notification/NotificationTray" {
    import * as React from "react";
    import Notification, { Props as NotificationProps } from "components/Notification/Notification";
    export interface Props {
        /**
         * Notification components
         */
        children?: React.ReactElement<typeof Notification>[];
        /**
         * An array containing objects of notification data
         */
        notificationsObjects?: NotificationProps[];
        /**
         * Display a small red circle to symbolize that there are unread notifications
         */
        unread?: boolean;
        /**
         * Action to run when the 'Mark All As Read' button is activated
         */
        markAllAsRead?: () => void;
    }
    /**
     * An Icon triggered Dropdown containing Notifications
     */
    function NotificationTray(props: Props): JSX.Element;
    export default NotificationTray;
}
declare module "components/Notification/index" {
    import Notification from "components/Notification/Notification";
    import NotificationTray from "components/Notification/NotificationTray";
    const CompoundNotification: typeof Notification & {
        Tray: typeof NotificationTray;
    };
    export { CompoundNotification as default, Notification, NotificationTray };
}
declare module "components/AccountDropdown/AccountDropdown" {
    import React from "react";
    import { itemObject, DropdownProps } from "components/Dropdown/Dropdown";
    type defaultOptionType = "profile" | "settings" | "mail" | "message" | "divider" | "help" | "logout";
    type optionsType = Array<defaultOptionType | itemObject>;
    export interface Props extends DropdownProps {
        /**
         * URl of the avatar image
         */
        avatarURL?: string;
        /**
         * The account name to be displayed
         */
        name?: string;
        /**
         * The account description
         */
        description?: string;
        /**
         * An array of the option items within the Dropdown
         */
        options?: optionsType;
        /**
         * The default RootComponent for all options.
         * optionsObjects[x].RootComponent takes priority
         */
        optionsRootComponent?: React.ElementType;
    }
    /**
     * A component for fast creation of an account centric dropdown
     */
    export function AccountDropdown({ avatarURL, name, description, options, optionsRootComponent, ...rest }: Props): JSX.Element;
    export default AccountDropdown;
}
declare module "components/AccountDropdown/index" {
    import AccountDropdown from "components/AccountDropdown/AccountDropdown";
    export { AccountDropdown as default };
}
declare module "components/Button/Button" {
    import React from "react";
    import { RefHandler } from "react-popper";
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    import { HTMLPropsWithoutRef } from "types/index";
    interface Props {
        as?: React.ElementType;
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        size?: "sm" | "lg";
        outline?: boolean;
        link?: boolean;
        block?: boolean;
        disabled?: boolean;
        color?: colors;
        square?: boolean;
        pill?: boolean;
        icon?: string;
        social?: string;
        loading?: boolean;
        tabIndex?: number;
        isDropdownToggle?: boolean;
        to?: string;
        isOption?: boolean;
        /**
         * @depreacted use ref
         */
        rootRef?: RefHandler;
    }
    export interface ButtonProps<AS extends HTMLElement = HTMLButtonElement> extends Props, ELProps, Omit<HTMLPropsWithoutRef<AS>, "as" | "color" | "size"> {
    }
    const Button: React.ForwardRefExoticComponent<Pick<ButtonProps<HTMLElement>, string | number> & React.RefAttributes<HTMLElement>>;
    export default Button;
}
declare module "components/Button/ButtonList" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface ButtonListProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLDivElement>, "align"> {
        align?: "" | "left" | "center" | "right";
    }
    function ButtonList({ className, children, align, ...props }: ButtonListProps): JSX.Element;
    export default ButtonList;
}
declare module "components/Button/ButtonDropdown" {
    import { ButtonProps } from "components/Button/Button";
    import { DropdownMenuProps } from "components/Dropdown/DropdownMenu";
    export interface ButtonDropdownProps extends ButtonProps {
        dropdownProps?: DropdownMenuProps;
        value?: string;
    }
    const ButtonDropdown: ({ children, value, dropdownProps, ...buttonProps }: ButtonDropdownProps) => JSX.Element;
    export default ButtonDropdown;
}
declare module "components/Button/index" {
    import Button from "components/Button/Button";
    import ButtonList from "components/Button/ButtonList";
    import ButtonDropdown from "components/Button/ButtonDropdown";
    const CompoundButton: import("react").ForwardRefExoticComponent<Pick<import("components/Button/Button").ButtonProps<HTMLElement>, string | number> & import("react").RefAttributes<HTMLElement>> & {
        List: typeof ButtonList;
        Dropdown: typeof ButtonDropdown;
    };
    export { CompoundButton as default, Button, ButtonList, ButtonDropdown };
}
declare module "components/Alert/Alert" {
    import { TablerComponent, MouseEvents, PointerEvents } from "index";
    export interface AlertType {
        /**
         * The type of this Alert, changes it's color
         */
        type: "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    }
    export interface Props extends AlertType, TablerComponent, MouseEvents, PointerEvents {
        /**
         * An Icon to be displayed on the right hand side of the Alert
         */
        icon?: string;
        /**
         * Add extra space above and below the alert
         */
        hasExtraSpace?: boolean;
        /**
         * Adds an 'X' to the left side of the Alert that dismisses the Alert
         */
        isDismissible?: boolean;
        /**
         * Display an Avatar on the left hand side of this Alert
         */
        avatar?: string;
        /**
         * Handle the dismissing of the Alert yourself
         */
        onDismissClick?: () => void;
    }
    export const Alert: ({ className, style, children, type, icon, hasExtraSpace, isDismissible, avatar, onDismissClick, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: Props) => JSX.Element | null;
    export default Alert;
}
declare module "components/Alert/AlertLink" {
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface AlertLinkProps extends ELProps, HTMLPropsWithoutRef<HTMLAnchorElement> {
    }
    /**
     * Renders an anchor that stands out more within Alerts
     */
    export function AlertLink({ children, className, ...rest }: AlertLinkProps): JSX.Element;
    export default AlertLink;
}
declare module "components/Alert/index" {
    import Alert from "components/Alert/Alert";
    import AlertLink from "components/Alert/AlertLink";
    const CompoundAlert: (({ className, style, children, type, icon, hasExtraSpace, isDismissible, avatar, onDismissClick, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: import("components/Alert/Alert").Props) => JSX.Element | null) & {
        Link: typeof AlertLink;
    };
    export { CompoundAlert as default, Alert, AlertLink };
}
declare module "components/Card/CardHeader" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardHeaderProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        backgroundURL?: string;
    }
    function CardHeader({ className, children, backgroundURL, ...rest }: CardHeaderProps): JSX.Element;
    export default CardHeader;
}
declare module "components/Card/CardTitle" {
    import { HeaderProps } from "components/Header/Header";
    export interface CardTitleProps extends HeaderProps {
    }
    function CardTitle({ className, children, RootComponent, as, ...rest }: CardTitleProps): JSX.Element;
    export default CardTitle;
}
declare module "components/Card/CardBody" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardBodyProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function CardBody({ className, children, ...rest }: CardBodyProps): JSX.Element;
    export default CardBody;
}
declare module "components/Card/CardOptions" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardOptionsProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function CardOptions({ className, children, ...rest }: CardOptionsProps): JSX.Element;
    export default CardOptions;
}
declare module "components/Card/CardOptionsItem" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardOptionsItemProps extends ELProps, HTMLPropsWithoutRef<HTMLAnchorElement> {
        icon?: string;
        type?: "collapse" | "close" | "fullscreen";
    }
    function CardOptionsItem({ className, children, icon, type, ...rest }: CardOptionsItemProps): JSX.Element;
    export default CardOptionsItem;
}
declare module "components/Card/CardStatus" {
    import { colors } from "colors";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardStatusProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        color: colors;
        side?: boolean;
    }
    function CardStatus({ className, children, color, side, ...rest }: CardStatusProps): JSX.Element;
    export default CardStatus;
}
declare module "components/Card/CardAlert" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardAlertProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        color: colors;
    }
    function CardAlert({ className, children, color, ...rest }: CardAlertProps): JSX.Element;
    export default CardAlert;
}
declare module "components/Card/CardFooter" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardFooterProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function CardFooter({ className, children, ...rest }: CardFooterProps): JSX.Element;
    export default CardFooter;
}
declare module "components/Card/Card" {
    import React, { HTMLProps } from "react";
    import { colors } from "colors";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface CardProps extends ELProps, Omit<HTMLProps<HTMLDivElement>, "as"> {
        title?: string;
        body?: React.ReactNode;
        as?: React.ElementType;
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        options?: React.ReactNode;
        isCollapsible?: boolean;
        isCollapsed?: boolean;
        isClosable?: boolean;
        isClosed?: boolean;
        isFullscreenable?: boolean;
        statusColor?: colors;
        statusSide?: boolean;
        alert?: React.ReactNode;
        alertColor?: colors;
        footer?: string;
        aside?: boolean;
    }
    const Card: ({ className, children, as, RootComponent, title, body, options, isCollapsible, isClosable, isFullscreenable, aside, statusColor, statusSide, alert, alertColor, footer, isClosed, isCollapsed, ...rest }: CardProps) => JSX.Element | null;
    /** @component */
    export default Card;
}
declare module "components/Card/CardMap" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface CardMapProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        placeholder?: string;
    }
    function CardMap({ className, children, placeholder, ...rest }: CardMapProps): JSX.Element;
    export default CardMap;
}
declare module "components/Card/index" {
    import CardBody from "components/Card/CardBody";
    import CardAlert from "components/Card/CardAlert";
    import CardFooter from "components/Card/CardFooter";
    import CardHeader from "components/Card/CardHeader";
    import CardMap from "components/Card/CardMap";
    import CardOptions from "components/Card/CardOptions";
    import CardOptionsItem from "components/Card/CardOptionsItem";
    import CardStatus from "components/Card/CardStatus";
    import CardTitle from "components/Card/CardTitle";
    const CompoundCard: (({ className, children, as, RootComponent, title, body, options, isCollapsible, isClosable, isFullscreenable, aside, statusColor, statusSide, alert, alertColor, footer, isClosed, isCollapsed, ...rest }: import("components/Card/Card").CardProps) => JSX.Element | null) & {
        Alert: typeof CardAlert;
        Body: typeof CardBody;
        Footer: typeof CardFooter;
        Header: typeof CardHeader;
        Map: typeof CardMap;
        Options: typeof CardOptions;
        OptionsItem: typeof CardOptionsItem;
        Status: typeof CardStatus;
        Title: typeof CardTitle;
    };
    export { CompoundCard as default };
}
declare module "components/BlogCard/BlogCard" {
    import * as React from "react";
    interface Props {
        children?: React.ReactChildren;
        title?: string;
        titleUrl?: string;
        avatarUrl?: string;
        description?: string;
        date?: string;
        imgUrl?: string;
        iconName?: string;
        iconHref?: string;
        authorName?: string;
        avatarImgSrc?: string;
        imgSrc?: string;
        imgAlt?: string;
        aside?: boolean;
        postHref?: string;
        profileHref?: string;
    }
    function BlogCard({ title, description, imgAlt, aside, authorName, date, imgSrc, avatarImgSrc, iconName, iconHref, postHref, profileHref, }: Props): JSX.Element;
    /** @component */
    export default BlogCard;
}
declare module "components/BlogCard/index" {
    import BlogCard from "components/BlogCard/BlogCard";
    export { BlogCard as default };
}
declare module "components/Breadcrumb/Breadcrumb" {
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface BreadcrumbProps extends ELProps, HTMLPropsWithoutRef<HTMLOListElement> {
        /**
         * Character to seperate the items with
         */
        separator?: "dot" | "arrow" | "slash";
    }
    /**
     * Breadcrumbs
     */
    export function Breadcrumb({ children, className, separator, ...rest }: BreadcrumbProps): JSX.Element;
    export default Breadcrumb;
}
declare module "components/Breadcrumb/BreadcrumbItem" {
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface BreadcrumbItemProps extends ELProps, HTMLPropsWithoutRef<HTMLLIElement> {
        /**
         * Mark this item as the active item
         */
        active?: boolean;
    }
    /**
     * Breadcrumb Item
     */
    export function BreadcrumbItem({ children, className, active, ...rest }: BreadcrumbItemProps): JSX.Element;
    export default BreadcrumbItem;
}
declare module "components/Breadcrumb/index" {
    import Breadcrumb from "components/Breadcrumb/Breadcrumb";
    import BreadcrumbItem from "components/Breadcrumb/BreadcrumbItem";
    const CompoundBreadcrumb: typeof Breadcrumb & {
        Item: typeof BreadcrumbItem;
    };
    export { CompoundBreadcrumb as default, Breadcrumb, BreadcrumbItem };
}
declare module "components/List/ListItem" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    interface ListItemProps extends ELProps, HTMLPropsWithoutRef<HTMLLIElement> {
        inline?: boolean;
    }
    function ListItem({ className, children, inline, ...rest }: ListItemProps): JSX.Element;
    export default ListItem;
}
declare module "components/List/ListGroup" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface ListGroupProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        transparent?: boolean;
        isCardBody?: boolean;
    }
    function ListGroup({ className, children, transparent, isCardBody, ...rest }: ListGroupProps): JSX.Element;
    export default ListGroup;
}
declare module "components/List/ListGroupItem" {
    import * as React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface ListGroupItemProps extends ELProps, Omit<React.HTMLProps<HTMLAnchorElement>, "as" | "action"> {
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        as?: React.ElementType;
        active?: boolean;
        action?: boolean;
        icon?: string;
        to?: string;
    }
    function ListGroupItem({ className, children, RootComponent, as, active, action, icon, ...rest }: ListGroupItemProps): JSX.Element;
    /** @component */
    export default ListGroupItem;
}
declare module "components/List/List" {
    import ListItem from "components/List/ListItem";
    import ListGroup from "components/List/ListGroup";
    import ListGroupItem from "components/List/ListGroupItem";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface ListProps extends ELProps, HTMLPropsWithoutRef<HTMLUListElement> {
        unstyled?: boolean;
        seperated?: boolean;
        inline?: boolean;
    }
    function List({ className, children, unstyled, seperated, inline, ...rest }: ListProps): JSX.Element;
    namespace List {
        var Item: typeof ListItem;
        var Group: typeof ListGroup;
        var GroupItem: typeof ListGroupItem;
    }
    export default List;
}
declare module "components/List/index" {
    import List from "components/List/List";
    export { List as default };
}
declare module "components/Media/Media" {
    import React from "react";
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    interface Props extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        children?: React.ReactNode;
        className?: string;
        rounded?: boolean;
        aspectRatio?: "2x1" | "3x4";
    }
    function Media({ className, children, rounded, aspectRatio, ...rest }: Props): JSX.Element;
    export default Media;
}
declare module "components/Media/MediaBody" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function MediaBody({ className, children }: Props): JSX.Element;
    export default MediaBody;
}
declare module "components/Media/MediaHeading" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function MediaHeading({ className, children }: Props): JSX.Element;
    export default MediaHeading;
}
declare module "components/Media/MediaList" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function MediaList({ className, children }: Props): JSX.Element;
    export default MediaList;
}
declare module "components/Media/MediaObject" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        avatar?: boolean;
        objectURL?: string;
        size?: "sm" | "md" | "lg" | "xl" | "xxl";
        rounded?: boolean;
        alt?: string;
    }
    function MediaObject({ className, children, avatar, objectURL, size, rounded, alt, }: Props): JSX.Element;
    export default MediaObject;
}
declare module "components/SocialNetworksList/SocialNetworksList" {
    import * as React from "react";
    import { colors } from "colors";
    type itemObject = {
        name: string;
        label?: string;
        to?: string;
        tooltip?: string;
        color?: colors;
    };
    type Props = {
        children?: React.ReactNode;
        className?: string;
        asButtons?: boolean;
        prefix?: string;
        itemsObjects?: Array<itemObject>;
        items?: Array<React.ReactNode>;
    };
    function SocialNetworksList(props: Props): JSX.Element;
    export default SocialNetworksList;
}
declare module "components/SocialNetworksList/index" {
    import SocialNetworksList from "components/SocialNetworksList/SocialNetworksList";
    export { SocialNetworksList as default };
}
declare module "components/Tooltip/Tooltip" {
    import React from "react";
    export interface TooltipProps {
        /**
         * The reference element which the Tooltip will be based on.
         */
        children?: React.ReactElement<any>;
        /**
         * Any additional classNames for the Tooltip.
         */
        className?: string;
        /**
         * This is the text content of the Tooltip.
         */
        content: string;
        /**
         * This is the placement of the Tooltip (top, bottom, left, right).
         */
        placement?: any;
        type?: "link";
        arrow?: boolean;
    }
    const Tooltip: ({ className, children, placement, content, arrow, }: TooltipProps) => JSX.Element;
    export default Tooltip;
}
declare module "components/Tooltip/index" {
    import Tooltip from "components/Tooltip/Tooltip";
    export { Tooltip as default };
}
declare module "components/Media/MediaBodySocial" {
    import * as React from "react";
    export interface Props {
        children?: React.ReactNode;
        className?: string;
        name: string;
        workTitle: string;
        facebook?: string;
        twitter?: string;
        phone?: string;
        skype?: string;
    }
    function MediaBodySocial({ className, children, name, workTitle, facebook, twitter, phone, skype, }: Props): JSX.Element;
    export default MediaBodySocial;
}
declare module "components/Media/MediaListItem" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function MediaListItem({ className, children }: Props): JSX.Element;
    export default MediaListItem;
}
declare module "components/Media/MediaContent" {
    import React from "react";
    import { HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    interface Props extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        children?: React.ReactNode;
        className?: string;
    }
    function MediaContent({ className, children, ...rest }: Props): JSX.Element;
    export default MediaContent;
}
declare module "components/Media/index" {
    import Media from "components/Media/Media";
    import MediaBody from "components/Media/MediaBody";
    import MediaHeading from "components/Media/MediaHeading";
    import MediaList from "components/Media/MediaList";
    import MediaObject from "components/Media/MediaObject";
    import MediaBodySocial from "components/Media/MediaBodySocial";
    import MediaListItem from "components/Media/MediaListItem";
    import MediaContent from "components/Media/MediaContent";
    const CompoundMedia: typeof Media & {
        Body: typeof MediaBody;
        BodySocial: typeof MediaBodySocial;
        Heading: typeof MediaHeading;
        List: typeof MediaList;
        ListItem: typeof MediaListItem;
        Object: typeof MediaObject;
        Content: typeof MediaContent;
    };
    export { CompoundMedia as default, Media, MediaBody, MediaBodySocial, MediaHeading, MediaList, MediaListItem, MediaObject, MediaContent, };
}
declare module "components/Comment/CommentList" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function CommentList({ className, children }: Props): JSX.Element;
    export default CommentList;
}
declare module "components/Comment/CommentReply" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        avatarURL?: string;
        name?: string;
        date?: string;
        text?: string;
    }
    function CommentReply({ className, children, avatarURL, name, date, text, }: Props): JSX.Element;
    export default CommentReply;
}
declare module "components/Comment/Comment" {
    import * as React from "react";
    import CommentList from "components/Comment/CommentList";
    import CommentReply from "components/Comment/CommentReply";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        avatarURL?: string;
        name?: string;
        date?: string;
        text?: string;
        replies?: React.ReactNode;
    }
    function Comment({ className, avatarURL, name, date, text, replies }: Props): JSX.Element;
    namespace Comment {
        var List: typeof CommentList;
        var Reply: typeof CommentReply;
    }
    export default Comment;
}
declare module "components/Comment/index" {
    import Comment from "components/Comment/Comment";
    export { Comment as default };
}
declare module "components/Form/Form" {
    import React from "react";
    import { TablerComponent, HTMLElementProps } from "types/index";
    export interface FormProps extends TablerComponent, Omit<HTMLElementProps<HTMLFormElement>, "as"> {
        as?: React.ElementType;
    }
    function Form({ children, as: Component, ...rest }: FormProps): JSX.Element;
    export default Form;
}
declare module "components/Form/FormLabel" {
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    interface Props extends TablerComponent, HTMLPropsWithoutRef<HTMLLabelElement> {
        aside?: string;
    }
    function FormLabel({ className, aside, children, ...rest }: Props): JSX.Element;
    export default FormLabel;
}
declare module "components/Form/FormGroup" {
    import React from "react";
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    export interface FormGroupProps extends TablerComponent, Omit<HTMLPropsWithoutRef<HTMLDivElement>, "label"> {
        label?: React.ReactNode;
        isRequired?: boolean;
        /**
         * @deprecated
         */
        inputProps?: any;
    }
    function FormGroup({ className, children, label, isRequired, ...rest }: FormGroupProps): JSX.Element;
    export default FormGroup;
}
declare module "components/Form/FormInput" {
    import React from "react";
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    export interface FormInputProps extends TablerComponent, HTMLPropsWithoutRef<HTMLInputElement> {
        /**
         * Wraps the input in Form.Group and adds a label
         */
        label?: string;
        icon?: string;
        position?: "append" | "prepend";
        valid?: boolean;
        tick?: boolean;
        invalid?: boolean;
        cross?: boolean;
        feedback?: string;
        error?: string;
        /**
         * a lighter, more subtle input
         */
        light?: boolean;
    }
    /**
     * A an input field
     */
    export const FormInput: React.ForwardRefExoticComponent<FormInputProps & React.RefAttributes<any>>;
    export default FormInput;
}
declare module "components/Form/FormStaticText" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    interface FormStaticTextProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function FormStaticText({ children, ...rest }: FormStaticTextProps): JSX.Element;
    export default FormStaticText;
}
declare module "components/Form/FormTextarea" {
    import { HTMLPropsWithoutRef } from "types/index";
    export interface FormTextareaProps extends HTMLPropsWithoutRef<HTMLTextAreaElement> {
        valid?: boolean;
        tick?: boolean;
        invalid?: boolean;
        cross?: boolean;
        feedback?: string;
        error?: string;
        children?: string;
        label?: string;
    }
    function FormTextarea({ className, valid, tick, invalid, cross, error, children, label, feedback, ...rest }: FormTextareaProps): JSX.Element;
    /** @component */
    export default FormTextarea;
}
declare module "components/Grid/GridRow" {
    import { UtilityProps } from "helpers/utilityPropsToClassNames";
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    export interface GridRowProps extends HTMLPropsWithoutRef<HTMLDivElement>, TablerComponent, UtilityProps {
        cards?: boolean;
        deck?: boolean;
        gutters?: "xs" | "sm" | "md" | "lg";
        alignItems?: string;
        justifyContent?: string;
    }
    function GridRow({ className, children, cards, deck, gutters, alignItems, justifyContent, ...props }: GridRowProps): JSX.Element;
    /** @component */
    export default GridRow;
}
declare module "components/Grid/GridCol" {
    import { UtilityProps } from "helpers/utilityPropsToClassNames";
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    export interface GridColProps extends HTMLPropsWithoutRef<HTMLDivElement>, TablerComponent, UtilityProps {
        width?: number;
        xs?: number;
        xsAuto?: boolean;
        sm?: number;
        smAuto?: boolean;
        md?: number;
        mdAuto?: boolean;
        lg?: number;
        lgAuto?: boolean;
        xl?: number;
        xlAuto?: boolean;
        auto?: boolean;
        offset?: number;
        offsetXs?: number;
        offsetSm?: number;
        offsetMd?: number;
        offsetLg?: number;
        offsetXl?: number;
        order?: number;
        orderXs?: number;
        orderSm?: number;
        orderMd?: number;
        orderLg?: number;
        orderXl?: number;
        ignoreCol?: boolean;
    }
    function GridCol({ className, children, width, xs, sm, md, lg, xl, xsAuto, smAuto, mdAuto, lgAuto, xlAuto, auto, offset, offsetXs, offsetSm, offsetMd, offsetLg, offsetXl, order, orderXs, orderSm, orderMd, orderLg, orderXl, ignoreCol, ...props }: GridColProps): JSX.Element;
    /** @component */
    export default GridCol;
}
declare module "components/Grid/Grid" {
    import * as React from "react";
    import GridRow from "components/Grid/GridRow";
    import GridCol from "components/Grid/GridCol";
    interface Props {
        children: React.ReactNode;
    }
    function Grid(props: Props): React.ReactNode;
    namespace Grid {
        var Row: typeof GridRow;
        var Col: typeof GridCol;
    }
    /** @component */
    export default Grid;
}
declare module "components/Grid/index" {
    import Grid from "components/Grid/Grid";
    export { Grid as default };
}
declare module "components/Form/FormImageCheck" {
    import { GridRowProps } from "components/Grid/GridRow";
    export interface FormImageCheckProps extends GridRowProps {
    }
    function FormImageCheck({ children, ...rest }: FormImageCheckProps): JSX.Element;
    export default FormImageCheck;
}
declare module "components/Form/FormImageCheckItem" {
    import { HTMLAttributes } from "react";
    import { GridColProps } from "components/Grid/GridCol";
    export interface FormImageCheckItemProps extends HTMLAttributes<HTMLInputElement> {
        value: string | number;
        imageURL: string;
        col?: GridColProps;
        imgProps?: HTMLAttributes<HTMLImageElement>;
    }
    function FormImageCheckItem({ className, col, imageURL, imgProps, ...rest }: FormImageCheckItemProps): JSX.Element;
    export default FormImageCheckItem;
}
declare module "components/Form/FormColorCheck" {
    import { GridRowProps } from "components/Grid/GridRow";
    interface FormColorCheckProps extends GridRowProps {
    }
    function FormColorCheck({ children, ...rest }: FormColorCheckProps): JSX.Element;
    export default FormColorCheck;
}
declare module "components/Form/FormColorCheckItem" {
    import { InputHTMLAttributes } from "react";
    import { colors } from "colors";
    interface Props extends InputHTMLAttributes<HTMLInputElement> {
        color: colors;
    }
    function FormColorCheckItem({ className, color, ...rest }: Props): JSX.Element;
    export default FormColorCheckItem;
}
declare module "components/Form/FormInputGroupAppend" {
    import { HTMLAttributes } from "react";
    import { TablerComponent } from "types/index";
    export interface FormInputGroupAppendProps extends TablerComponent, HTMLAttributes<HTMLSpanElement> {
    }
    function FormInputGroupAppend({ className, children, }: FormInputGroupAppendProps): JSX.Element;
    export default FormInputGroupAppend;
}
declare module "components/Form/FormInputGroupPrepend" {
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    export interface FormInputGroupPrependProps extends TablerComponent, HTMLPropsWithoutRef<HTMLSpanElement> {
    }
    function FormInputGroupPrepend({ className, children, ...rest }: FormInputGroupPrependProps): JSX.Element;
    export default FormInputGroupPrepend;
}
declare module "components/Form/FormInputGroup" {
    import React, { HTMLAttributes } from "react";
    import { FormInputProps } from "components/Form/FormInput";
    import { TablerComponent } from "types/index";
    interface FormInputGroupProps extends TablerComponent, HTMLAttributes<HTMLDivElement> {
        append?: React.ReactNode;
        prepend?: React.ReactNode;
        /**
         * @deprecated use 'as'
         */
        RootComponent?: React.ElementType;
        as?: React.ElementType;
        inputProps?: FormInputProps;
    }
    function FormInputGroup({ className, append, prepend, RootComponent, as, inputProps, children, ...rest }: FormInputGroupProps): JSX.Element;
    export default FormInputGroup;
}
declare module "components/Form/FormHelp" {
    import React from "react";
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    export interface FormHelpProps extends TablerComponent, HTMLPropsWithoutRef<HTMLSpanElement> {
        position?: "top" | "bottom";
        message?: React.ReactNode;
    }
    function FormHelp({ className, children, position, message, ...rest }: FormHelpProps): JSX.Element;
    export default FormHelp;
}
declare module "components/Form/FormSelect" {
    import { HTMLPropsWithoutRef } from "types/index";
    export interface FormSelectProps extends HTMLPropsWithoutRef<HTMLSelectElement> {
        valid?: boolean;
        tick?: boolean;
        invalid?: boolean;
        cross?: boolean;
        feedback?: string;
        error?: string;
        /**
         * Wraps the select in Form.Group and adds a label
         */
        label?: string;
    }
    function FormSelect({ className, children, valid, tick, invalid, cross, error, label, feedback, ...rest }: FormSelectProps): JSX.Element;
    /** @component */
    export default FormSelect;
}
declare module "components/Form/FormFooter" {
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    interface FormFooterProps extends TablerComponent, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function FormFooter({ className, children, ...rest }: FormFooterProps): JSX.Element;
    export default FormFooter;
}
declare module "components/Form/FormRatio" {
    import React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface FormRatioProps extends ELProps, HTMLPropsWithoutRef<HTMLInputElement> {
        value?: number | string;
        onChange?: (event: React.ChangeEvent<EventTarget>) => any;
    }
    const FormRatio: ({ className, onChange, defaultValue, value, ...rest }: FormRatioProps) => JSX.Element;
    export default FormRatio;
}
declare module "components/Form/FormFieldSet" {
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    export interface FormFieldSetProps extends TablerComponent, HTMLPropsWithoutRef<HTMLFieldSetElement> {
    }
    function FormFieldSet({ className, children, ...rest }: FormFieldSetProps): JSX.Element;
    export default FormFieldSet;
}
declare module "components/Form/FormRadio" {
    import { FormInputProps } from "components/Form/FormInput";
    export interface FormRadioProps extends FormInputProps {
        /**
         * Wrap the checkbox with a label
         */
        label?: string;
        isInline?: boolean;
    }
    function FormRadio({ className, label, isInline, ...rest }: FormRadioProps): JSX.Element;
    export default FormRadio;
}
declare module "components/Form/FormCheckbox" {
    import { FormInputProps } from "components/Form/FormInput";
    import { TablerComponent } from "types/index";
    export interface Props extends TablerComponent, FormInputProps {
        /**
         * Wrap the checkbox with a label
         */
        label?: string;
        isInline?: boolean;
    }
    function FormCheckbox({ className, label, isInline, ...rest }: Props): JSX.Element;
    /** @component */
    export default FormCheckbox;
}
declare module "components/Form/FormSelectGroup" {
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface FormSelectGroupProps extends TablerComponent, ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        pills?: boolean;
        canSelectMultiple?: boolean;
    }
    function FormSelectGroup({ children, pills, canSelectMultiple, ...rest }: FormSelectGroupProps): JSX.Element;
    export default FormSelectGroup;
}
declare module "components/Form/FormSelectGroupItem" {
    import { HTMLPropsWithoutRef, TablerComponent } from "types/index";
    export interface FormSelectGroupItemProps extends TablerComponent, HTMLPropsWithoutRef<HTMLInputElement> {
        label?: string;
        icon?: string;
        type?: "radio" | "checkbox";
        [key: string]: any;
    }
    function FormSelectGroupItem({ className, label, icon, type, ...rest }: FormSelectGroupItemProps): JSX.Element;
    export default FormSelectGroupItem;
}
declare module "components/Form/FormFileInput" {
    import { InputHTMLAttributes } from "react";
    export interface FormFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
        label?: string;
    }
    const FormFileInput: ({ onChange, className, label: labelFromProps, ...rest }: FormFileInputProps) => JSX.Element;
    export default FormFileInput;
}
declare module "components/Form/FormSwitchStack" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface FormToggleStackProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function FormToggleStack({ children, ...rest }: FormToggleStackProps): JSX.Element;
    export default FormToggleStack;
}
declare module "components/Form/FormSwitch" {
    import { InputHTMLAttributes } from "react";
    export interface FormToggleProps extends InputHTMLAttributes<HTMLInputElement> {
        label?: string | number;
        type?: "checkbox" | "radio";
    }
    function FormToggle({ className, type, label, ...rest }: FormToggleProps): JSX.Element;
    export default FormToggle;
}
declare module "components/Form/FormInputGroupText" {
    import { TablerComponent, HTMLPropsWithoutRef } from "types/index";
    interface FormInputGroupTextProps extends TablerComponent, HTMLPropsWithoutRef<HTMLSpanElement> {
    }
    function FormInputGroupText({ className, children, ...rest }: FormInputGroupTextProps): JSX.Element;
    export default FormInputGroupText;
}
declare module "components/Form/FormMaskedInput" {
    import { MaskedInputProps } from "react-text-mask";
    import { TablerComponent } from "types/index";
    interface Props extends MaskedInputProps, TablerComponent {
        valid?: boolean;
        tick?: boolean;
        invalid?: boolean;
        cross?: boolean;
        feedback?: string;
    }
    /**
     * A masked input field using react-text-mask
     */
    function FormMaskedInput({ valid, tick, invalid, cross, feedback, className, ...rest }: Props): JSX.Element;
    export default FormMaskedInput;
}
declare module "components/Form/FormDatePicker" {
    import { FormSelectProps } from "components/Form/FormSelect";
    import { TablerComponent } from "types/index";
    export interface FormDatePickerProps extends TablerComponent {
        defaultDate: Date;
        minYear: number;
        maxYear: number;
        format: string;
        monthLabels: Array<string>;
        onChange?: (value: Date) => void;
        dayProps?: FormSelectProps;
        monthProps?: FormSelectProps;
        yearProps?: FormSelectProps;
        value?: Date;
    }
    /**
     * A simple date picker using 3 FormSelect's.
     */
    const FormDatePicker: {
        ({ onChange, monthLabels, minYear, maxYear, format, className, dayProps, monthProps, yearProps, value, defaultDate, ...rest }: FormDatePickerProps): JSX.Element;
        defaultProps: {
            monthLabels: string[];
            minYear: number;
            maxYear: number;
            format: string;
            defaultDate: Date;
        };
    };
    export default FormDatePicker;
}
declare module "components/Form/index" {
    import Form from "components/Form/Form";
    import FormGroup from "components/Form/FormGroup";
    import FormLabel from "components/Form/FormLabel";
    import FormInput from "components/Form/FormInput";
    import FormStaticText from "components/Form/FormStaticText";
    import FormTextarea from "components/Form/FormTextarea";
    import FormImageCheck from "components/Form/FormImageCheck";
    import FormImageCheckItem from "components/Form/FormImageCheckItem";
    import FormColorCheck from "components/Form/FormColorCheck";
    import FormColorCheckItem from "components/Form/FormColorCheckItem";
    import FormInputGroup from "components/Form/FormInputGroup";
    import FormHelp from "components/Form/FormHelp";
    import FormSelect from "components/Form/FormSelect";
    import FormFooter from "components/Form/FormFooter";
    import FormRatio from "components/Form/FormRatio";
    import FormFieldSet from "components/Form/FormFieldSet";
    import FormRadio from "components/Form/FormRadio";
    import FormCheckbox from "components/Form/FormCheckbox";
    import FormSelectGroup from "components/Form/FormSelectGroup";
    import FormSelectGroupItem from "components/Form/FormSelectGroupItem";
    import FormFileInput from "components/Form/FormFileInput";
    import FormSwitchStack from "components/Form/FormSwitchStack";
    import FormSwitch from "components/Form/FormSwitch";
    import FormInputGroupAppend from "components/Form/FormInputGroupAppend";
    import FormInputGroupPrepend from "components/Form/FormInputGroupPrepend";
    import FormInputGroupText from "components/Form/FormInputGroupText";
    import FormMaskedInput from "components/Form/FormMaskedInput";
    import FormDatePicker from "components/Form/FormDatePicker";
    const CompoundForm: typeof Form & {
        Group: typeof FormGroup;
        Label: typeof FormLabel;
        Input: typeof FormInput;
        StaticText: typeof FormStaticText;
        Textarea: typeof FormTextarea;
        ImageCheck: typeof FormImageCheck;
        ImageCheckItem: typeof FormImageCheckItem;
        ColorCheck: typeof FormColorCheck;
        ColorCheckItem: typeof FormColorCheckItem;
        InputGroup: typeof FormInputGroup;
        Help: typeof FormHelp;
        Select: typeof FormSelect;
        Footer: typeof FormFooter;
        Ratio: typeof FormRatio;
        FieldSet: typeof FormFieldSet;
        SelectGroup: typeof FormSelectGroup;
        SelectGroupItem: typeof FormSelectGroupItem;
        Radio: typeof FormRadio;
        Checkbox: typeof FormCheckbox;
        FileInput: typeof FormFileInput;
        SwitchStack: typeof FormSwitchStack;
        Switch: typeof FormSwitch;
        InputGroupAppend: typeof FormInputGroupAppend;
        InputGroupPrepend: typeof FormInputGroupPrepend;
        InputGroupText: typeof FormInputGroupText;
        MaskedInput: typeof FormMaskedInput;
        DatePicker: typeof FormDatePicker;
    };
    export { CompoundForm as default, Form, FormGroup, FormLabel, FormInput, FormStaticText, FormTextarea, FormImageCheck, FormImageCheckItem, FormColorCheck, FormColorCheckItem, FormInputGroup, FormHelp, FormSelect, FormFooter, FormRatio, FormFieldSet, FormSelectGroup, FormSelectGroupItem, FormRadio, FormCheckbox, FormFileInput, FormSwitchStack, FormSwitch, FormInputGroupAppend, FormInputGroupPrepend, FormInputGroupText, FormMaskedInput, FormDatePicker, };
}
declare module "forms/FormWithSingleInputAndButton" {
    import { FormProps } from "components/Form/Form";
    import { FormInputProps } from "components/Form/FormInput";
    import { ButtonProps } from "components/Button/Button";
    interface Props {
        formProps?: FormProps;
        inputProps?: FormInputProps;
        buttonProps?: ButtonProps;
    }
    /**
     * A form containing a single input field with an appended Button
     */
    function FormWithSingleInputAndButton({ formProps, inputProps, buttonProps, }: Props): JSX.Element;
    export default FormWithSingleInputAndButton;
}
declare module "components/CommentsCard/CommentsCard" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function CommentsCard({ className, children }: Props): JSX.Element;
    export default CommentsCard;
}
declare module "components/CommentsCard/index" {
    import CommentsCard from "components/CommentsCard/CommentsCard";
    export { CommentsCard as default };
}
declare module "components/Header/H1" {
    import { HeaderProps } from "components/Header/Header";
    export interface H1Props extends HeaderProps<HTMLHeadingElement> {
    }
    /**
     * A Header component rendered as a h1 HTML element with a margin below
     */
    function H1({ children, as, mt, mb, size, ...props }: H1Props): JSX.Element;
    export default H1;
}
declare module "components/Header/H2" {
    import { HeaderProps } from "components/Header/Header";
    export interface H2Props extends HeaderProps<HTMLHeadingElement> {
    }
    /**
     * A Header component rendered as a h2 HTML element with a margin below
     */
    function H2({ children, as, mt, mb, size, ...props }: H2Props): JSX.Element;
    export default H2;
}
declare module "components/Header/H3" {
    import { HeaderProps } from "components/Header/Header";
    export interface H3Props extends HeaderProps<HTMLHeadingElement> {
    }
    /**
     * A Header component rendered as a h3 HTML element with a margin below
     */
    function H3({ children, as, mt, mb, size, ...props }: H3Props): JSX.Element;
    export default H3;
}
declare module "components/Header/H4" {
    import { HeaderProps } from "components/Header/Header";
    export interface H4Props extends HeaderProps<HTMLHeadingElement> {
    }
    /**
     * A Header component rendered as a h4 HTML element with a margin below
     */
    function H4({ children, as, mt, mb, size, ...props }: H4Props): JSX.Element;
    export default H4;
}
declare module "components/Header/H5" {
    import { HeaderProps } from "components/Header/Header";
    export interface H5Props extends HeaderProps<HTMLHeadingElement> {
    }
    /**
     * A Header component rendered as a h5 HTML element with a margin below
     */
    function H5({ children, as, mt, mb, size, ...props }: H5Props): JSX.Element;
    export default H5;
}
declare module "components/Header/index" {
    import Header from "components/Header/Header";
    import H1 from "components/Header/H1";
    import H2 from "components/Header/H2";
    import H3 from "components/Header/H3";
    import H4 from "components/Header/H4";
    import H5 from "components/Header/H5";
    import H6 from "components/Header/H6";
    const CompoundHeader: typeof Header & {
        H1: typeof H1;
        H2: typeof H2;
        H3: typeof H3;
        H4: typeof H4;
        H5: typeof H5;
        H6: typeof H6;
    };
    export { CompoundHeader as default, Header, H1, H2, H3, H4, H5, H6 };
}
declare module "components/ContactCard/ContactCard" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        /**
         * The Card title
         */
        cardTitle?: string;
        /**
         * Render a map at the top of the Card
         */
        map?: React.ReactNode;
        /**
         * Render a map placeholder at the top of the Card
         */
        mapPlaceholder?: string;
        /**
         * Add rounded corners to the Media.Object rendered by objectURL
         */
        rounded?: boolean;
        /**
         * Display an Avatar in place of the Media.Object rendered by objectURL
         */
        avatar?: boolean;
        /**
         * The URL of a contact image to displayed alongside thier name
         */
        objectURL?: string;
        /**
         * The alt value for the objectURL image
         */
        alt?: string;
        /**
         * The contacts name
         */
        name?: string;
        /**
         * The contacts address
         */
        address?: {
            line1?: string;
            line2?: string;
        };
        /**
         * An array of contacts details displayed in a 2 column Grid
         */
        details?: Array<{
            title: string;
            content?: React.ReactNode;
        }>;
        /**
         * An additional block of text below the details
         */
        description?: string | {
            title: string;
            content?: string;
        };
    }
    /**
     * Renders a Card designed for displaying details of a person or business
     */
    function ContactCard({ children, className, cardTitle, map, mapPlaceholder, rounded, avatar, objectURL, alt, name, address, details, description, }: Props): JSX.Element;
    export default ContactCard;
}
declare module "components/ContactCard/index" {
    import ContactCard from "components/ContactCard/ContactCard";
    export { ContactCard as default };
}
declare module "components/Container" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface ContainerProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function Container({ children, ...rest }: ContainerProps): JSX.Element;
    export default Container;
}
declare module "components/Loader/Loader" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface LoaderProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
    }
    function Loader({ className, children, ...rest }: LoaderProps): JSX.Element;
    export default Loader;
}
declare module "components/Loader/index" {
    import Loader from "components/Loader/Loader";
    export { Loader as default };
}
declare module "components/Dimmer/DimmerContent" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function DimmerContent({ className, children }: Props): JSX.Element;
    export default DimmerContent;
}
declare module "components/Dimmer/Dimmer" {
    import * as React from "react";
    import DimmerContent from "components/Dimmer/DimmerContent";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        active?: boolean;
        loader?: boolean;
    };
    function Dimmer({ className, children, active, loader }: Props): JSX.Element;
    namespace Dimmer {
        var Content: typeof DimmerContent;
    }
    export default Dimmer;
}
declare module "components/Dimmer/index" {
    import Dimmer from "components/Dimmer/Dimmer";
    export { Dimmer as default };
}
declare module "components/GalleryCard/GalleryCardDetails" {
    import * as React from "react";
    interface Props {
        className?: string;
        children?: React.ReactNode;
        avatarURL?: string;
        fullName?: string;
        dateString?: string;
    }
    function GalleryCardDetails({ className, children, avatarURL, fullName, dateString, }: Props): JSX.Element;
    export default GalleryCardDetails;
}
declare module "components/GalleryCard/GalleryCardFooter" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
    }
    function GalleryCardFooter({ children }: Props): JSX.Element;
    export default GalleryCardFooter;
}
declare module "components/GalleryCard/GalleryCardIconGroup" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function GalleryCardIconGroup({ children, className }: Props): JSX.Element;
    export default GalleryCardIconGroup;
}
declare module "components/GalleryCard/GalleryCardIconItem" {
    import * as React from "react";
    interface Props {
        className?: string;
        label?: string;
        name: string;
        href?: string;
        right?: boolean;
        to?: string;
        RootComponent?: React.ElementType;
    }
    function GalleryCardIconItem({ className, label, name, href, right, to, RootComponent, }: Props): JSX.Element;
    /** @component */
    export default GalleryCardIconItem;
}
declare module "components/GalleryCard/GalleryCardImage" {
    import * as React from "react";
    interface Props {
        src: string;
        alt?: string;
        href?: string;
        rounded?: boolean;
        className?: string;
        to?: string;
        RootComponent?: React.ElementType;
    }
    function GalleryCardImage({ src, alt, href, rounded, className, to, RootComponent, }: Props): JSX.Element;
    /** @component */
    export default GalleryCardImage;
}
declare module "components/GalleryCard/GalleryCard" {
    import * as React from "react";
    import GalleryCardDetails from "components/GalleryCard/GalleryCardDetails";
    import GalleryCardFooter from "components/GalleryCard/GalleryCardFooter";
    import GalleryCardIconGroup from "components/GalleryCard/GalleryCardIconGroup";
    import GalleryCardIconItem from "components/GalleryCard/GalleryCardIconItem";
    import GalleryCardImage from "components/GalleryCard/GalleryCardImage";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function GalleryCard({ children, className }: Props): JSX.Element;
    namespace GalleryCard {
        var Details: typeof GalleryCardDetails;
        var Footer: typeof GalleryCardFooter;
        var IconGroup: typeof GalleryCardIconGroup;
        var IconItem: typeof GalleryCardIconItem;
        var Image: typeof GalleryCardImage;
    }
    export default GalleryCard;
}
declare module "components/GalleryCard/index" {
    import GalleryCard from "components/GalleryCard/GalleryCard";
    export { GalleryCard as default };
}
declare module "components/Page/Page" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface PageProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLDivElement>, "as"> {
    }
    function Page({ className, children, ...rest }: PageProps): JSX.Element;
    export default Page;
}
declare module "components/Page/PageMain" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageMain({ children }: Props): JSX.Element;
    export default PageMain;
}
declare module "components/Page/PageTitle" {
    import { ELProps } from "helpers/makeHtmlElement";
    interface PageTitleProps extends ELProps {
    }
    function PageTitle({ className, children, ...rest }: PageTitleProps): JSX.Element;
    export default PageTitle;
}
declare module "components/Page/PageSubTitle" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageSubTitle({ children }: Props): JSX.Element;
    export default PageSubTitle;
}
declare module "components/Page/PageOptions" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageOptions({ children }: Props): JSX.Element;
    export default PageOptions;
}
declare module "components/Page/PageHeader" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        title?: string;
        subTitle?: string;
        options?: React.ReactNode;
    };
    function PageHeader({ children, title, subTitle, options }: Props): JSX.Element;
    export default PageHeader;
}
declare module "components/Page/PageContent" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        title?: string;
        subTitle?: string;
        options?: React.ReactNode;
    };
    function PageContent({ className, children, title, subTitle, options }: Props): JSX.Element;
    export default PageContent;
}
declare module "components/Page/PageContentWithSidebar" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        header?: React.ReactNode;
        sidebar?: React.ReactNode;
    };
    function PageContentWithSidebar({ children, header, sidebar }: Props): JSX.Element;
    export default PageContentWithSidebar;
}
declare module "components/Page/PageCard" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        title?: string;
        header?: React.ReactNode;
        footer?: React.ReactNode;
        RootComponent?: React.ElementType;
    };
    function PageCard({ children, title, header, footer, RootComponent }: Props): JSX.Element;
    export default PageCard;
}
declare module "components/Page/PageMapHeader" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageMapHeader({ children }: Props): JSX.Element;
    export default PageMapHeader;
}
declare module "components/Page/index" {
    import Page from "components/Page/Page";
    import PageMain from "components/Page/PageMain";
    import PageContent from "components/Page/PageContent";
    import PageHeader from "components/Page/PageHeader";
    import PageContentWithSidebar from "components/Page/PageContentWithSidebar";
    import PageCard from "components/Page/PageCard";
    import PageTitle from "components/Page/PageTitle";
    import PageMapHeader from "components/Page/PageMapHeader";
    const CompoundPage: typeof Page & {
        Main: typeof PageMain;
        Content: typeof PageContent;
        Header: typeof PageHeader;
        ContentWithSidebar: typeof PageContentWithSidebar;
        Card: typeof PageCard;
        Title: typeof PageTitle;
        MapHeader: typeof PageMapHeader;
    };
    export { CompoundPage as default, Page, PageMain, PageContent, PageHeader, PageContentWithSidebar, PageCard, PageTitle, PageMapHeader, };
}
declare module "components/PricingCard/PricingCardCategory" {
    import { TablerComponent } from "types/index";
    interface Props extends TablerComponent {
    }
    function PricingCardCategory({ className, children }: Props): JSX.Element;
    export default PricingCardCategory;
}
declare module "components/PricingCard/PricingCardPrice" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function PricingCardPrice({ className, children }: Props): JSX.Element;
    export default PricingCardPrice;
}
declare module "components/PricingCard/PricingCardAttributeList" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function PricingCardAttributeList({ className, children }: Props): JSX.Element;
    export default PricingCardAttributeList;
}
declare module "components/PricingCard/PricingCardAttributeItem" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        available?: boolean;
        hasIcon?: boolean;
    };
    function PricingCardAttributeItem({ children, available, hasIcon }: Props): JSX.Element;
    /** @component */
    export default PricingCardAttributeItem;
}
declare module "components/PricingCard/PricingCardButton" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        RootComponent?: React.ElementType;
        active?: boolean;
        href?: string;
        to?: string;
        onClick?: (event: React.MouseEvent) => any;
    };
    function PricingCardButton({ className, children, RootComponent, active, href, to, onClick, }: Props): JSX.Element;
    export default PricingCardButton;
}
declare module "components/PricingCard/PricingCard" {
    import * as React from "react";
    import PricingCardCategory from "components/PricingCard/PricingCardCategory";
    import PricingCardPrice from "components/PricingCard/PricingCardPrice";
    import PricingCardAttributeList from "components/PricingCard/PricingCardAttributeList";
    import PricingCardAttributeItem from "components/PricingCard/PricingCardAttributeItem";
    import PricingCardButton from "components/PricingCard/PricingCardButton";
    import { TablerComponent } from "types/index";
    interface Props extends TablerComponent {
        active?: boolean;
        category?: React.ReactNode;
    }
    function PricingCard({ className, children, active, category }: Props): JSX.Element;
    namespace PricingCard {
        var Category: typeof PricingCardCategory;
        var Price: typeof PricingCardPrice;
        var AttributeList: typeof PricingCardAttributeList;
        var AttributeItem: typeof PricingCardAttributeItem;
        var Button: typeof PricingCardButton;
    }
    export default PricingCard;
}
declare module "components/PricingCard/index" {
    import PricingCard from "components/PricingCard/PricingCard";
    export { PricingCard as default };
}
declare module "components/Profile/ProfileImage" {
    type Props = {
        avatarURL: string;
    };
    function ProfileImage({ avatarURL }: Props): JSX.Element;
    export default ProfileImage;
}
declare module "components/Profile/Profile" {
    import * as React from "react";
    import ProfileImage from "components/Profile/ProfileImage";
    export interface Props {
        children?: React.ReactNode;
        className?: string;
        name: string;
        avatarURL?: string;
        twitterURL?: string;
        backgroundURL?: string;
        bio?: string;
    }
    function Profile({ className, children, name, avatarURL, twitterURL, backgroundURL, bio, }: Props): JSX.Element;
    namespace Profile {
        var Image: typeof ProfileImage;
    }
    export default Profile;
}
declare module "components/Profile/index" {
    import Profile from "components/Profile/Profile";
    export { Profile as default };
}
declare module "components/Progress/ProgressBar" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface ProgressBarProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        color?: colors;
        width?: number;
    }
    function ProgressBar({ className, color, width, style, ...rest }: ProgressBarProps): JSX.Element;
    export default ProgressBar;
}
declare module "components/Progress/Progress" {
    import ProgressBar from "components/Progress/ProgressBar";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface ProgressProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLDivElement>, "size"> {
        size?: string;
    }
    function Progress({ className, children, size, ...rest }: ProgressProps): JSX.Element;
    namespace Progress {
        var Bar: typeof ProgressBar;
    }
    export default Progress;
}
declare module "components/Progress/index" {
    import Progress from "components/Progress/Progress";
    export { Progress as default };
}
declare module "components/ProgressCard/ProgressCard" {
    import * as React from "react";
    import { colors } from "colors";
    type Props = {
        className?: string;
        header?: React.ReactNode;
        content?: React.ReactNode;
        progressColor?: colors;
        progressWidth?: number;
    };
    function ProgressCard({ className, header, content, progressColor, progressWidth, }: Props): JSX.Element;
    export default ProgressCard;
}
declare module "components/ProgressCard/index" {
    import ProgressCard from "components/ProgressCard/ProgressCard";
    export { ProgressCard as default };
}
declare module "components/Ribbon/Ribbon" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    interface Props extends ELProps {
        color?: colors;
        bookmark?: boolean;
        icon?: string;
        position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    }
    function Ribbon({ children, className, color, icon, bookmark, position, ...rest }: Props): JSX.Element;
    /** @component */
    export default Ribbon;
}
declare module "components/Ribbon/index" {
    import Ribbon from "components/Ribbon/Ribbon";
    export { Ribbon as default };
}
declare module "components/Site/Site" {
    import * as React from "react";
    export interface SiteProps {
        children: React.ReactNode;
    }
    /**
     * Components for building the base of your website, such as a header, footer and nav bar
     */
    function Site(props: SiteProps): React.ReactNode;
    /** @component */
    export default Site;
}
declare module "components/Site/SiteLogo" {
    import { TablerComponent } from "types/index";
    export interface SiteLogoProps extends TablerComponent {
        href?: string;
        src?: string;
        srcSmall?: string;
        alt?: string;
    }
    const SiteLogo: ({ className, ...props }: SiteLogoProps) => JSX.Element;
    export default SiteLogo;
}
declare module "components/Site/SiteHeader" {
    import React from "react";
    import { Props as NotificationTrayProps } from "components/Notification/NotificationTray";
    import { Props as AccountDropdownProps } from "components/AccountDropdown/AccountDropdown";
    export interface SiteHeaderProps {
        children?: React.ReactNode;
        /**
         * header alignment
         */
        align?: string;
        /**
         * href attribute for the logo
         */
        href?: string;
        /**
         * Logo image URL
         */
        imageURL?: string;
        /**
         * The logo alt attribute
         */
        alt?: string;
        /**
         * Include a notifications tray
         */
        notificationsTray?: NotificationTrayProps;
        accountDropdown?: AccountDropdownProps;
        navItems?: React.ReactNode;
        /**
         * Handle toggling/collapsing of the mobile menu when the collapse icon is clicked
         */
        onMenuToggleClick?: () => void;
        searchBar?: React.ReactNode;
    }
    /**
     * The very top header bar of your website, containing the logo and some optional
     * action components, such as a NotificationTray or an AccountDropdown on the right hand side
     */
    const SiteHeader: ({ children, href, align, imageURL, alt, notificationsTray: notificationsTrayFromProps, accountDropdown: accountDropdownFromProps, navItems, onMenuToggleClick, searchBar, }: SiteHeaderProps) => JSX.Element;
    export default SiteHeader;
}
declare module "components/Site/SiteFooter" {
    import * as React from "react";
    export interface SiteFooterProps {
        /**
         * An array of the 8 links displayed in the first footer bar
         */
        links?: Array<React.ReactNode>;
        /**
         * The text block displayed next to the links
         */
        note?: string;
        /**
         * The content of the very bottom copyright notice space
         */
        copyright?: React.ReactNode;
        /**
         * The content of the very bottom nav space
         */
        nav?: React.ReactNode;
    }
    /**
     * The footer of your website
     */
    const SiteFooter: ({ links, note, copyright, nav }: SiteFooterProps) => JSX.Element;
    export default SiteFooter;
}
declare module "components/Site/SiteNav" {
    import * as React from "react";
    import { NavItemProps } from "components/Nav/NavItem";
    import { NavBarProps } from "components/Nav/NavBar";
    export interface SiteNavProps extends NavBarProps {
        children?: React.ReactNode;
        items?: React.ReactNode;
        itemsObjects?: NavItemProps[];
        /**
         * Display a search form to the right of the nav items
         */
        withSearchForm?: boolean;
        /**
         * Provide your own component to replace the search form
         */
        rightColumnComponent?: React.ReactNode;
        /**
         * Toggle the collapsed state of the nav
         */
        collapse?: boolean;
        routerContextComponentType?: React.ElementType;
        logoURL?: string;
    }
    const SiteNav: ({ children, items, itemsObjects, withSearchForm, rightColumnComponent, collapse, routerContextComponentType, logoURL, ...rest }: SiteNavProps) => JSX.Element;
    export default SiteNav;
}
declare module "components/Site/SiteWrapper" {
    import React from "react";
    import { SiteHeaderProps } from "components/Site/SiteHeader";
    import { SiteNavProps } from "components/Site/SiteNav";
    import { SiteFooterProps } from "components/Site/SiteFooter";
    export interface SiteWrapperProps {
        header?: React.ElementType;
        headerProps?: SiteHeaderProps;
        nav?: React.ElementType;
        navProps?: SiteNavProps;
        footer?: React.ElementType;
        footerProps?: SiteFooterProps;
        children: React.ReactNode;
        navIsSide?: boolean;
    }
    const SiteWrapper: ({ header: Header, headerProps, nav: Nav, navProps, footer: Footer, footerProps, children, navIsSide, }: SiteWrapperProps) => JSX.Element;
    export default SiteWrapper;
}
declare module "components/Site/index" {
    import Site from "components/Site/Site";
    import SiteHeader from "components/Site/SiteHeader";
    import SiteFooter from "components/Site/SiteFooter";
    import SiteNav from "components/Site/SiteNav";
    import SiteLogo from "components/Site/SiteLogo";
    import SiteWrapper from "components/Site/SiteWrapper";
    const CompoundSite: typeof Site & {
        Header: typeof SiteHeader;
        Footer: typeof SiteFooter;
        Nav: typeof SiteNav;
        Logo: typeof SiteLogo;
        Wrapper: typeof SiteWrapper;
    };
    export { CompoundSite as default, Site, SiteHeader, SiteFooter, SiteNav, SiteLogo, SiteWrapper, };
}
declare module "components/Stamp/Stamp" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    import { HTMLPropsWithoutRef } from "types/index";
    interface StampProps extends ELProps, Omit<HTMLPropsWithoutRef<HTMLSpanElement>, "size"> {
        size?: "sm" | "md";
        icon?: string;
        color?: colors;
    }
    function Stamp({ children, className, size, icon, color, ...rest }: StampProps): JSX.Element;
    export default Stamp;
}
declare module "components/Stamp/index" {
    import Stamp from "components/Stamp/Stamp";
    export { Stamp as default };
}
declare module "components/StampCard/StampCard" {
    import * as React from "react";
    import { colors } from "colors";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        icon?: string;
        color?: colors;
        header?: React.ReactNode;
        footer?: React.ReactNode;
    };
    function StampCard({ children, className, icon, color, header, footer, }: Props): JSX.Element;
    export default StampCard;
}
declare module "components/StampCard/index" {
    import StampCard from "components/StampCard/StampCard";
    export { StampCard as default };
}
declare module "components/StatsCard/StatsCard" {
    import * as React from "react";
    import { colors } from "colors";
    export interface StatsCardProps {
        children?: React.ReactNode;
        className?: string;
        /**
         * The % amount by which your total has increased
         */
        movement: number;
        movementLabel?: string;
        /**
         * The main number displayed within the Card
         */
        total: string;
        /**
         * The text label displayed within the Card
         */
        label: string;
        /**
         * The layout to render
         */
        layout?: 1 | 2 | 3 | 4;
        /**
         * A Chart to be included at the bottom of layout 2
         */
        chart?: React.ReactNode;
        progressColor?: colors;
        progressWidth?: number;
        chartWrapperRef?: React.Ref<any>;
        actions?: React.ReactNode;
    }
    /**
     * Used for dispaying an individual statistic/number with different potential layouts
     */
    function StatsCard({ children, className, movement, movementLabel, total, label, layout, chart, progressWidth, progressColor, actions, }: StatsCardProps): JSX.Element;
    export default StatsCard;
}
declare module "components/StatsCard/index" {
    import StatsCard from "components/StatsCard/StatsCard";
    export { StatsCard as default };
}
declare module "components/Steps/Steps" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    export interface Props extends ELProps {
        color?: colors;
        counter?: boolean;
    }
    export const Steps: ({ children, className, color, counter, ...rest }: Props) => JSX.Element;
    /** @component */
    export default Steps;
}
declare module "components/Steps/Step" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    export interface Props extends ELProps {
        color?: colors;
        active?: boolean;
        tooltip?: string;
    }
    export const Step: ({ children, className, active, tooltip, ...rest }: Props) => JSX.Element;
    /** @component */
    export default Step;
}
declare module "components/Steps/index" {
    import Steps from "components/Steps/Steps";
    import Step from "components/Steps/Step";
    const CompoundSteps: (({ children, className, color, counter, ...rest }: import("components/Steps/Steps").Props) => JSX.Element) & {
        Step: typeof Step;
    };
    export { CompoundSteps as default, Steps, Step };
}
declare module "components/StoreCard/StoreCard" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        title?: string;
        price?: string;
        subtitle?: string;
        imgUrl?: string;
        imgAlt?: string;
    };
    function StoreCard({ children, title, subtitle, price, imgUrl, imgAlt, }: Props): JSX.Element;
    export default StoreCard;
}
declare module "components/StoreCard/index" {
    import StoreCard from "components/StoreCard/StoreCard";
    export { StoreCard as default };
}
declare module "components/Tabs/Tab" {
    import * as React from "react";
    export interface TabProps {
        title: string;
        children: React.ReactNode;
    }
    interface State {
    }
    class Tab extends React.PureComponent<TabProps, State> {
        render(): React.ReactNode;
    }
    export default Tab;
}
declare module "components/Tabs/TabbedContainer" {
    import * as React from "react";
    import { TabProps } from "components/Tabs/Tab";
    interface Props {
        children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
        selectedTitle: string;
    }
    function TabbedContainer(props: Props): JSX.Element;
    /** @component */
    export default TabbedContainer;
}
declare module "components/Tabs/TabbedHeader" {
    import * as React from "react";
    import { TabProps } from "components/Tabs/Tab";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TabbedHeaderProps extends ELProps, HTMLPropsWithoutRef<HTMLUListElement> {
        children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
        selectedTitle: string;
        stateCallback: (selectedTitle: string) => void;
    }
    function TabbedHeader({ children, stateCallback, selectedTitle, ...rest }: TabbedHeaderProps): JSX.Element;
    export default TabbedHeader;
}
declare module "components/Tabs/Tabs" {
    import React from "react";
    import { TabProps } from "components/Tabs/Tab";
    export interface TabsProps {
        initialTab: string;
        children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
    }
    const Tabs: ({ children, initialTab }: TabsProps) => JSX.Element;
    export default Tabs;
}
declare module "components/Tabs/index" {
    import Tab from "components/Tabs/Tab";
    import TabbedContainer from "components/Tabs/TabbedContainer";
    import TabbedHeader from "components/Tabs/TabbedHeader";
    import Tabs from "components/Tabs/Tabs";
    export { Tab, Tabs, TabbedContainer, TabbedHeader };
}
declare module "components/TabbedCard/TabbedCard" {
    import * as React from "react";
    import { TabProps } from "components/Tabs/Tab";
    type Props = {
        initialTab: string;
        children: React.ReactElement<TabProps>[];
    };
    type State = {
        selectedTitle: string;
    };
    class TabbedCard extends React.PureComponent<Props, State> {
        state: {
            selectedTitle: string;
        };
        render(): JSX.Element;
    }
    export default TabbedCard;
}
declare module "components/TabbedCard/index" {
    import TabbedCard from "components/TabbedCard/TabbedCard";
    export { TabbedCard as default };
}
declare module "components/Table/TableHeader" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TableHeaderProps extends ELProps, HTMLPropsWithoutRef<HTMLTableSectionElement> {
    }
    function TableHeader({ className, children, ...props }: TableHeaderProps): JSX.Element;
    export default TableHeader;
}
declare module "components/Table/TableBody" {
    import * as React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TableBodyProps extends ELProps, HTMLPropsWithoutRef<HTMLTableSectionElement> {
        children?: React.ReactNode;
        className?: string;
    }
    function TableBody({ className, children, ...props }: TableBodyProps): JSX.Element;
    export default TableBody;
}
declare module "components/Table/TableRow" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TableRowProps extends ELProps, HTMLPropsWithoutRef<HTMLTableRowElement> {
    }
    function TableRow({ className, children, ...props }: TableRowProps): JSX.Element;
    export default TableRow;
}
declare module "components/Table/TableCol" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TableColProps extends ELProps, HTMLPropsWithoutRef<HTMLTableCellElement> {
        alignContent?: "left" | "center" | "right";
    }
    function TableCol({ className, children, alignContent, ...rest }: TableColProps): JSX.Element;
    export default TableCol;
}
declare module "components/Table/TableColHeader" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TableColHeaderProps extends ELProps, HTMLPropsWithoutRef<HTMLTableHeaderCellElement> {
        alignContent?: "left" | "center" | "right";
    }
    function TableColHeader({ className, children, alignContent, ...rest }: TableColHeaderProps): JSX.Element;
    export default TableColHeader;
}
declare module "components/Table/Table" {
    import React from "react";
    import TableHeader from "components/Table/TableHeader";
    import TableBody from "components/Table/TableBody";
    import TableRow, { TableRowProps } from "components/Table/TableRow";
    import TableCol, { TableColProps } from "components/Table/TableCol";
    import TableColHeader, { TableColHeaderProps } from "components/Table/TableColHeader";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    interface RowItem extends TableRowProps {
        key: string | number;
        item: BodyItem[];
    }
    interface BodyItem extends Omit<TableColProps, "content"> {
        content?: React.ReactNode;
        className?: string;
        alignContent?: "left" | "center" | "right";
    }
    interface HeaderItem extends Omit<TableColHeaderProps, "content"> {
        content?: React.ReactNode;
    }
    export interface TableProps extends ELProps, HTMLPropsWithoutRef<HTMLTableElement> {
        /**
         * Should this Table be optimized to contain Cards
         */
        cards?: boolean;
        /**
         * Give the table striped rows
         */
        striped?: boolean;
        /**
         * Make the table responsive
         */
        responsive?: boolean;
        highlightRowOnHover?: boolean;
        hasOutline?: boolean;
        verticalAlign?: "center";
        headerItems?: HeaderItem[];
        bodyItems?: Array<RowItem>;
    }
    function Table({ className, children, cards, striped, responsive, highlightRowOnHover, hasOutline, verticalAlign, headerItems, bodyItems, ...props }: TableProps): JSX.Element;
    namespace Table {
        var defaultProps: {
            cards: boolean;
            striped: boolean;
            responsive: boolean;
        };
        var Header: typeof TableHeader;
        var Body: typeof TableBody;
        var Row: typeof TableRow;
        var Col: typeof TableCol;
        var ColHeader: typeof TableColHeader;
    }
    /** @component */
    export default Table;
}
declare module "components/Table/index" {
    import Table from "components/Table/Table";
    export { Table as default };
}
declare module "components/Tag/index" {
    import Tag from "components/Badge/Badge";
    import TagAddOn from "components/Badge/BadgeAddOn";
    import TagList from "components/Badge/BadgeList";
    const CompoundTag: import("react").ForwardRefExoticComponent<Pick<import("components/Badge/Badge").BadgeProps, string | number> & import("react").RefAttributes<unknown>> & {
        AddOn: typeof TagAddOn;
        List: typeof TagList;
    };
    export { CompoundTag as default, Tag, TagAddOn, TagList };
}
declare module "components/Timeline/Timeline" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TimelineProps extends ELProps, HTMLPropsWithoutRef<HTMLUListElement> {
        simple?: boolean;
    }
    function Timeline({ className, children, simple, ...rest }: TimelineProps): JSX.Element;
    export default Timeline;
}
declare module "components/Timeline/TimelineItemBadge" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TimelineItemBadgeProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        color?: colors;
    }
    function TimelineItemBadge({ className, children, color, ...rest }: TimelineItemBadgeProps): JSX.Element;
    export default TimelineItemBadge;
}
declare module "components/Timeline/TimelineItemTime" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TimelineItemTimeProps extends ELProps, HTMLPropsWithoutRef<HTMLDivElement> {
        active?: boolean;
    }
    const TimelineItemTime: ({ className, children, active, ...rest }: TimelineItemTimeProps) => JSX.Element;
    export default TimelineItemTime;
}
declare module "components/Timeline/TimelineItemTitle" {
    import React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface TimelineItemTitleProps extends ELProps {
        children?: React.ReactNode;
        active?: boolean;
    }
    function TimelineItemTitle({ children, className, active, ...rest }: TimelineItemTitleProps): JSX.Element;
    export default TimelineItemTitle;
}
declare module "components/Timeline/TimelineItemDescription" {
    import * as React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TimelineItemDescriptionProps extends ELProps, HTMLPropsWithoutRef<HTMLParagraphElement> {
    }
    const TimelineItemDescription: React.ForwardRefExoticComponent<Pick<any, string | number | symbol> & React.RefAttributes<any>>;
    export default TimelineItemDescription;
}
declare module "components/Timeline/TimelineItem" {
    import { ELProps } from "helpers/makeHtmlElement";
    import { colors } from "colors";
    import { HTMLPropsWithoutRef } from "types/index";
    export interface TimelineItemProps extends ELProps, HTMLPropsWithoutRef<HTMLLIElement> {
        title?: string;
        description?: string;
        badge?: boolean;
        badgeColor?: colors;
        time?: string;
        active?: boolean;
    }
    function TimelineItem({ className, children, title: titleFromProps, description, badge, badgeColor, time, active, ...rest }: TimelineItemProps): JSX.Element;
    export default TimelineItem;
}
declare module "components/Timeline/TimelineItemContent" {
    import React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    export interface TimelineItemContentProps extends ELProps {
        children?: React.ReactNode;
    }
    function TimelineItemContent({ children, className, ...rest }: TimelineItemContentProps): JSX.Element;
    export default TimelineItemContent;
}
declare module "components/Timeline/TimelineItemIcon" {
    import React from "react";
    import { IconProps } from "components/Icon/Icon";
    import { colors } from "colors";
    export interface TimelineItemIconProps extends IconProps {
        children?: React.ReactNode;
        active?: boolean;
        bg?: colors;
    }
    function TimelineItemIcon({ children, className, active, bg, ...rest }: TimelineItemIconProps): JSX.Element;
    export default TimelineItemIcon;
}
declare module "components/Timeline/index" {
    import Timeline from "components/Timeline/Timeline";
    import TimelineItemBadge from "components/Timeline/TimelineItemBadge";
    import TimelineItem from "components/Timeline/TimelineItem";
    import TimelineItemDescription from "components/Timeline/TimelineItemDescription";
    import TimelineItemTime from "components/Timeline/TimelineItemTime";
    import TimelineItemTitle from "components/Timeline/TimelineItemTitle";
    import TimelineItemContent from "components/Timeline/TimelineItemContent";
    import TimelineItemIcon from "components/Timeline/TimelineItemIcon";
    const CompoundTimeline: typeof Timeline & {
        Item: typeof TimelineItem;
        ItemBadge: typeof TimelineItemBadge;
        ItemDescription: typeof TimelineItemDescription;
        ItemTime: typeof TimelineItemTime;
        ItemTitle: typeof TimelineItemTitle;
        ItemContent: typeof TimelineItemContent;
        ItemIcon: typeof TimelineItemIcon;
    };
    export { CompoundTimeline as default };
}
declare module "components/Toast/ToastHeader" {
    import { ELProps } from "helpers/makeHtmlElement";
    export interface ToastHeaderProps extends ELProps {
        avatar?: string;
        title?: string;
        timestamp?: string;
    }
    export const ToastHeader: ({ children, className, avatar, title, timestamp, ...rest }: ToastHeaderProps) => JSX.Element;
    /** @component */
    export default ToastHeader;
}
declare module "components/Toast/ToastBody" {
    import { ELProps } from "helpers/makeHtmlElement";
    export interface ToastBodyProps extends ELProps {
    }
    export const ToastBody: ({ children, className, ...rest }: ToastBodyProps) => JSX.Element;
    /** @component */
    export default ToastBody;
}
declare module "components/Toast/Toast" {
    import React from "react";
    import { ELProps } from "helpers/makeHtmlElement";
    import { ToastHeaderProps } from "components/Toast/ToastHeader";
    export interface ToastProps extends ELProps {
        show?: boolean;
        header?: ToastHeaderProps;
        body?: React.ReactNode;
    }
    export const Toast: ({ children, className, show, header, body, ...rest }: ToastProps) => JSX.Element;
    /** @component */
    export default Toast;
}
declare module "components/Toast/index" {
    import Toast from "components/Toast/Toast";
    import ToastHeader from "components/Toast/ToastHeader";
    import ToastBody from "components/Toast/ToastBody";
    const CompoundToast: (({ children, className, show, header, body, ...rest }: import("components/Toast/Toast").ToastProps) => JSX.Element) & {
        Header: typeof ToastHeader;
        Body: typeof ToastBody;
    };
    export { CompoundToast as default, Toast, ToastHeader, ToastBody };
}
declare module "components/index" {
    import NotificationProps from "components/Notification/index";
    export { NotificationProps };
    export { default as AccountDropdown } from "components/AccountDropdown/index";
    export { default as Alert } from "components/Alert/index";
    export { default as Avatar } from "components/Avatar/index";
    export { default as Badge } from "components/Badge/index";
    export { default as BlogCard } from "components/BlogCard/index";
    export * from "components/Breadcrumb/index";
    export { default as Button } from "components/Button/index";
    export { default as Card } from "components/Card/index";
    export { default as Comment } from "components/Comment/index";
    export { default as CommentsCard } from "components/CommentsCard/index";
    export { default as ContactCard } from "components/ContactCard/index";
    export { default as Container } from "components/Container";
    export { default as Dimmer } from "components/Dimmer/index";
    export { default as Dropdown } from "components/Dropdown/index";
    export { El } from "components/El/index";
    export { default as Form } from "components/Form/index";
    export { default as GalleryCard } from "components/GalleryCard/index";
    export { default as Grid } from "components/Grid/index";
    export { default as Header } from "components/Header/index";
    export { default as Icon } from "components/Icon/index";
    export { default as List } from "components/List/index";
    export { default as Loader } from "components/Loader/index";
    export { default as Media } from "components/Media/index";
    export * from "components/Nav/index";
    export { default as Notification } from "components/Notification/index";
    export { default as Page } from "components/Page/index";
    export { default as PricingCard } from "components/PricingCard/index";
    export { default as Profile } from "components/Profile/index";
    export { default as Progress } from "components/Progress/index";
    export { default as ProgressCard } from "components/ProgressCard/index";
    export { default as Ribbon } from "components/Ribbon/index";
    export { default as Site } from "components/Site/index";
    export { default as SocialNetworksList } from "components/SocialNetworksList/index";
    export { default as Stamp } from "components/Stamp/index";
    export { default as StampCard } from "components/StampCard/index";
    export { default as StatsCard } from "components/StatsCard/index";
    export { default as Steps } from "components/Steps/index";
    export { default as StoreCard } from "components/StoreCard/index";
    export { default as TabbedCard } from "components/TabbedCard/index";
    export { default as Table } from "components/Table/index";
    export { default as Tag } from "components/Tag/index";
    export { default as Text } from "components/Text/index";
    export { default as Timeline } from "components/Timeline/index";
    export { default as Toast } from "components/Toast/index";
    export { default as Tooltip } from "components/Tooltip/index";
    export { Tab, Tabs, TabbedContainer, TabbedHeader } from "components/Tabs/index";
}
declare module "helpers/RouterContextProvider" {
    import * as React from "react";
    type Props = {
        location: Location;
        callback: (location: {
            pathname: string;
        }) => void;
    };
    type State = {};
    class RouterContextProvider extends React.Component<Props, State> {
        componentDidMount(): void;
        render(): null;
    }
    export default RouterContextProvider;
}
declare module "page_templates/StandaloneFormPage" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        imageURL?: string;
    };
    function StandaloneFormPage(props: Props): JSX.Element;
    export default StandaloneFormPage;
}
declare module "page_templates/errors/DefaultErrorPage" {
    export type Props = {
        title?: string;
        subtitle?: string;
        details?: string;
        action?: string;
    };
    function DefaultErrorPage(props: Props): JSX.Element;
    export default DefaultErrorPage;
}
declare module "page_templates/errors/Error400Page" {
    import { Props as DefaultErrorProps } from "page_templates/errors/DefaultErrorPage";
    function Error400Page({ title, subtitle, details, action, }: DefaultErrorProps): JSX.Element;
    export default Error400Page;
}
declare module "page_templates/errors/Error401Page" {
    import { Props as DefaultErrorProps } from "page_templates/errors/DefaultErrorPage";
    function Error401Page({ title, subtitle, details, action, }: DefaultErrorProps): JSX.Element;
    export default Error401Page;
}
declare module "page_templates/errors/Error403Page" {
    import { Props as DefaultErrorProps } from "page_templates/errors/DefaultErrorPage";
    function Error403Page({ title, subtitle, details, action, }: DefaultErrorProps): JSX.Element;
    export default Error403Page;
}
declare module "page_templates/errors/Error404Page" {
    import { Props as DefaultErrorProps } from "page_templates/errors/DefaultErrorPage";
    function Error404Page({ title, subtitle, details, action, }: DefaultErrorProps): JSX.Element;
    export default Error404Page;
}
declare module "page_templates/errors/Error500Page" {
    import { Props as DefaultErrorProps } from "page_templates/errors/DefaultErrorPage";
    function Error500Page({ title, subtitle, details, action, }: DefaultErrorProps): JSX.Element;
    export default Error500Page;
}
declare module "page_templates/errors/Error503Page" {
    import { Props as DefaultErrorProps } from "page_templates/errors/DefaultErrorPage";
    function Error503Page({ title, subtitle, details, action, }: DefaultErrorProps): JSX.Element;
    export default Error503Page;
}
declare module "forms/FormCard" {
    import * as React from "react";
    import { HTMLElementProps } from "types/index";
    interface Props extends HTMLElementProps<HTMLFormElement> {
        action?: string;
        children?: React.ReactNode;
        method?: string;
        title: string;
        buttonText: string;
    }
    function FormCard({ children, action, method, onSubmit, title, buttonText, }: Props): JSX.Element;
    export default FormCard;
}
declare module "forms/FormTextInput" {
    import { FormInputProps } from "components/Form/FormInput";
    interface Props extends FormInputProps {
        label?: string;
    }
    function FormTextInput(props: Props): JSX.Element;
    export default FormTextInput;
}
declare module "forms/FormCheckboxInput" {
    import { Props as FormCheckboxProps } from "components/Form/FormCheckbox";
    function FormCheckboxInput(props: FormCheckboxProps): JSX.Element;
    export default FormCheckboxInput;
}
declare module "helpers/withTouchedErrors" {
    import * as React from "react";
    /**
     * A HOC that modifies the errors propso that it only returns errors if the the field
     * has also been touched
     * First takes an array of the field names, followed by the component
     */
    function withTouchedErrors(fields?: Array<string>): <A extends {
        touched?: any;
        errors?: any;
    }>(Component: React.ComponentType<A>) => React.ComponentType<A>;
    export default withTouchedErrors;
}
declare module "page_templates/account/LoginPage/LoginPage.strings" {
    const strings: {
        title: string;
        buttonText: string;
        emailLabel: string;
        emailPlaceholder: string;
        passwordLabel: string;
        passwordPlaceholder: string;
    };
    export default strings;
    type strings = keyof typeof strings;
    export type stringTypes = {
        [key in strings]: string;
    };
}
declare module "page_templates/account/LoginPage/LoginPage" {
    import * as React from "react";
    import { stringTypes } from "page_templates/account/LoginPage/LoginPage.strings";
    import { HTMLElementProps } from "types/index";
    type fieldTypes = {
        email?: string;
        password?: string;
    };
    type touchedTypes = {
        email?: boolean;
        password?: boolean;
    };
    interface Props extends Omit<HTMLElementProps<HTMLFormElement>, "onChange" | "onBlur">, Pick<HTMLElementProps<HTMLInputElement>, "onChange" | "onBlur"> {
        strings?: stringTypes;
        action?: string;
        method?: string;
        values?: fieldTypes;
        errors?: fieldTypes;
        touched?: touchedTypes;
        logoUrl?: string;
    }
    const LoginPageWithTouchedErrors: React.ComponentType<Props>;
    export default LoginPageWithTouchedErrors;
}
declare module "page_templates/account/LoginPage/index" {
    import LoginPage from "page_templates/account/LoginPage/LoginPage";
    export default LoginPage;
}
declare module "page_templates/account/RegisterPage/RegisterPage.strings" {
    const strings: {
        title: string;
        buttonText: string;
        nameLabel: string;
        namePlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        passwordLabel: string;
        passwordPlaceholder: string;
        termsLabel: string;
    };
    export default strings;
    type strings = keyof typeof strings;
    export type stringTypes = {
        [key in strings]: string;
    };
}
declare module "page_templates/account/RegisterPage/RegisterPage" {
    import * as React from "react";
    import { stringTypes } from "page_templates/account/RegisterPage/RegisterPage.strings";
    import { HTMLElementProps } from "types/index";
    type fieldTypes = {
        name?: string;
        email?: string;
        password?: string;
        terms?: string;
    };
    type touchedTypes = {
        name?: boolean;
        email?: boolean;
        password?: boolean;
        terms?: boolean;
    };
    interface Props extends Omit<HTMLElementProps<HTMLFormElement>, "onChange" | "onBlur">, Pick<HTMLElementProps<HTMLInputElement>, "onChange" | "onBlur"> {
        strings?: stringTypes;
        action?: string;
        method?: string;
        values?: fieldTypes;
        errors?: fieldTypes;
        touched?: touchedTypes;
        logoUrl?: string;
    }
    const RegisterPageWithTouchedErrors: React.ComponentType<Props>;
    export default RegisterPageWithTouchedErrors;
}
declare module "page_templates/account/RegisterPage/index" {
    import RegisterPage from "page_templates/account/RegisterPage/RegisterPage";
    export default RegisterPage;
}
declare module "page_templates/account/ForgotPasswordPage/ForgotPasswordPage.strings" {
    const strings: {
        title: string;
        buttonText: string;
        emailLabel: string;
        emailPlaceholder: string;
        instructions: string;
    };
    export default strings;
    type strings = keyof typeof strings;
    export type stringTypes = {
        [key in strings]: string;
    };
}
declare module "page_templates/account/ForgotPasswordPage/ForgotPasswordPage" {
    import * as React from "react";
    import { stringTypes } from "page_templates/account/ForgotPasswordPage/ForgotPasswordPage.strings";
    import { HTMLElementProps } from "types/index";
    type fieldTypes = {
        email?: string;
    };
    type touchedTypes = {
        email?: boolean;
    };
    interface Props extends Omit<HTMLElementProps<HTMLFormElement>, "onChange" | "onBlur">, Pick<HTMLElementProps<HTMLInputElement>, "onChange" | "onBlur"> {
        strings?: stringTypes;
        action?: string;
        method?: string;
        values?: fieldTypes;
        errors?: fieldTypes;
        touched?: touchedTypes;
        logoUrl?: string;
    }
    const ForgotPasswordPageWithTouchedErrors: React.ComponentType<Props>;
    export default ForgotPasswordPageWithTouchedErrors;
}
declare module "page_templates/account/ForgotPasswordPage/index" {
    import ForgotPasswordPage from "page_templates/account/ForgotPasswordPage/ForgotPasswordPage";
    export default ForgotPasswordPage;
}
declare module "index" {
    import "./tabler.scss";
    export * from "types/index";
    export * from "components/index";
    export * from "colors";
    export { NotificationProps } from "components/index";
    export { default as RouterContextProvider } from "helpers/RouterContextProvider";
    export { default as StandaloneFormPage } from "page_templates/StandaloneFormPage";
    export { default as DefaultErrorPage } from "page_templates/errors/DefaultErrorPage";
    export { default as Error400Page } from "page_templates/errors/Error400Page";
    export { default as Error401Page } from "page_templates/errors/Error401Page";
    export { default as Error403Page } from "page_templates/errors/Error403Page";
    export { default as Error404Page } from "page_templates/errors/Error404Page";
    export { default as Error500Page } from "page_templates/errors/Error500Page";
    export { default as Error503Page } from "page_templates/errors/Error503Page";
    export { default as FormCard } from "forms/FormCard";
    export { default as FormTextInput } from "forms/FormTextInput";
    export { default as FormCheckboxInput } from "forms/FormCheckboxInput";
    export { default as colors } from "colors";
    export { default as LoginPage } from "page_templates/account/LoginPage/index";
    export { default as RegisterPage } from "page_templates/account/RegisterPage/index";
    export { default as ForgotPasswordPage } from "page_templates/account/ForgotPasswordPage/index";
}
declare module "tabler-react" {
    export * from "index";
}
//# sourceMappingURL=tabler-react.d.ts.map