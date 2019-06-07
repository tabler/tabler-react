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
declare module "types/index" {
    export * from "types/events/index";
}
declare module "components/Icon/Icon" {
    import { MouseEvents, PointerEvents, FocusEvents } from "index";
    interface Props extends MouseEvents, PointerEvents, FocusEvents {
        className?: string;
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
    }
    /**
     * Display an icon.
     * Uses the included feathers icon set by default but you can add your own
     */
    function Icon({ prefix: prefixFromProps, name, className, link, isAriaHidden, payment, flag, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, onFocus, onBlur, }: Props): JSX.Element;
    namespace Icon {
        var displayName: string;
    }
    /** @component */
    export default Icon;
}
declare module "components/Icon/index" {
    import Icon from "components/Icon/Icon";
    export { Icon as default };
}
declare module "components/Avatar/AvatarList" {
    import * as React from "react";
    interface Props {
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
    function AvatarList({ className, children, stacked }: Props): JSX.Element;
    namespace AvatarList {
        var displayName: string;
    }
    export default AvatarList;
}
declare module "components/Avatar/Avatar" {
    import * as React from "react";
    import AvatarList from "components/Avatar/AvatarList";
    import { MouseEvents, PointerEvents } from "types/index";
    export interface Props extends MouseEvents, PointerEvents {
        children?: React.ReactNode;
        className?: string;
        /**
         * The URL of the image to be displayed
         */
        imageURL?: string;
        style?: Object;
        size?: "sm" | "md" | "lg" | "xl" | "xxl";
        /**
         * Display a colored status dot with the avatar
         */
        status?: "grey" | "red" | "yellow" | "green";
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
        color?: string;
    }
    /**
     * Renders a single circular avatar
     */
    function Avatar({ className, children, imageURL, style, size, status, placeholder, icon, color, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: Props): JSX.Element;
    namespace Avatar {
        var List: typeof AvatarList;
    }
    export default Avatar;
}
declare module "components/Avatar/index" {
    import Avatar from "components/Avatar/Avatar";
    export { Avatar as default };
}
declare module "components/Text/Text" {
    import * as React from "react";
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
    export interface TextProps extends AlignProps, TransformProps, TrackingProps, LeadingProps {
        children?: React.ReactNode;
        className?: string;
        RootComponent?: React.ElementType;
        color?: string;
        size?: string;
        wrap?: boolean;
        muted?: boolean;
    }
    const Text: {
        ({ className, children, RootComponent, color, size, wrap, muted, ...props }: TextProps): JSX.Element;
        displayName: string;
    };
    /** @component */
    export default Text;
}
declare module "components/Text/TextSmall" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        color?: string;
        wrap?: boolean;
        muted?: boolean;
    };
    const TextSmall: {
        ({ className, children, color, wrap, muted }: Props): JSX.Element;
        displayName: string;
    };
    export default TextSmall;
}
declare module "components/Text/index" {
    import Text from "components/Text/Text";
    import TextSmall from "components/Text/TextSmall";
    const CompoundText: {
        ({ className, children, RootComponent, color, size, wrap, muted, ...props }: import("components/Text/Text").TextProps): JSX.Element;
        displayName: string;
    } & {
        Small: {
            ({ className, children, color, wrap, muted }: {
                children?: import("react").ReactNode;
                className?: string | undefined;
                color?: string | undefined;
                wrap?: boolean | undefined;
                muted?: boolean | undefined;
            }): JSX.Element;
            displayName: string;
        };
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
    function Notification({ avatarURL, message, time, unread }: Props): JSX.Element;
    export default Notification;
}
declare module "components/Button/Button" {
    import * as React from "react";
    import { MouseEvents, PointerEvents } from "types/index";
    import { RefHandler } from "react-popper";
    interface PropsForAll extends MouseEvents, PointerEvents {
        size?: "sm" | "lg";
        outline?: boolean;
        link?: boolean;
        block?: boolean;
        className?: string;
        children?: React.ReactNode;
        disabled?: boolean;
        color?: string;
        square?: boolean;
        pill?: boolean;
        icon?: string;
        social?: string;
        loading?: boolean;
        tabIndex?: number;
        isDropdownToggle?: boolean;
        to?: string;
        isOption?: boolean;
        rootRef?: RefHandler;
    }
    export interface DefaultButtonComponent extends PropsForAll {
        RootComponent?: "button";
        type?: "button" | "submit" | "reset";
        value?: string;
    }
    interface BtnAComponent extends PropsForAll {
        RootComponent: "a";
        href?: string;
        target?: string;
    }
    interface BtnInputComponent extends PropsForAll {
        RootComponent: "input";
        type?: "button" | "submit" | "reset";
        value?: string;
    }
    export type Props = DefaultButtonComponent | BtnAComponent | BtnInputComponent;
    const Button: {
        (props: Props): JSX.Element;
        displayName: string;
    };
    export default Button;
}
declare module "components/Button/ButtonList" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        align?: "" | "left" | "center" | "right";
    }
    function ButtonList({ className, children, align, ...props }: Props): JSX.Element;
    namespace ButtonList {
        var displayName: string;
    }
    export default ButtonList;
}
declare module "components/Dropdown/DropdownMenu" {
    import * as React from "react";
    export interface Props {
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
         */
        show?: boolean;
    }
    /**
     * The wrapper element for a Dropdowns Items
     */
    function DropdownMenu({ className, children, position, arrow, arrowPosition, rootRef, show, }: Props): JSX.Element | null;
    namespace DropdownMenu {
        var displayName: string;
    }
    export default DropdownMenu;
}
declare module "components/Button/ButtonDropdown" {
    import * as React from "react";
    import { DefaultButtonComponent } from "components/Button/Button";
    import { Props as DropdownMenuProps } from "components/Dropdown/DropdownMenu";
    interface Props extends DefaultButtonComponent {
        value?: string;
        children?: React.ReactNode;
        dropdownProps?: DropdownMenuProps;
    }
    type State = {
        isOpen: boolean;
    };
    class ButtonDropdown extends React.Component<Props, State> {
        state: {
            isOpen: boolean;
        };
        _handleButtonOnClick: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        render(): JSX.Element;
    }
    export default ButtonDropdown;
}
declare module "components/Button/index" {
    import Button from "components/Button/Button";
    import ButtonList from "components/Button/ButtonList";
    import ButtonDropdown from "components/Button/ButtonDropdown";
    const CompoundButton: any;
    export { CompoundButton as default, Button, ButtonList, ButtonDropdown };
}
declare module "components/Dropdown/DropdownTrigger" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        /**
         * Display an arrow alongside the trigger content
         */
        toggle?: boolean;
        /**
         * The value to be displayed within the trigger if children is not included
         */
        value?: string;
        /**
         * Render the trigger as an <a> tag or a Button
         */
        type?: "link" | "button";
        /**
         * The background color for a Button trigger
         */
        color?: string;
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
        /**
         * Handle the onClick of this trigger
         */
        onClick?: (e: React.MouseEvent) => void;
        rootRef?: (el: HTMLElement) => void;
    }
    /**
     * Provides the trigger element for a Dropdown
     */
    function DropdownTrigger({ className, toggle, value, children, type, icon, color, isNavLink, isOption, onClick, rootRef, }: Props): JSX.Element;
    namespace DropdownTrigger {
        var displayName: string;
    }
    /** @component */
    export default DropdownTrigger;
}
declare module "components/Badge/Badge" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        color?: string;
    }
    /**
     * A small colored rectangle with rounded corners.
     */
    function Badge({ className, children, color }: Props): JSX.Element;
    export default Badge;
}
declare module "components/Badge/index" {
    import Badge from "components/Badge/Badge";
    export { Badge as default };
}
declare module "components/Dropdown/DropdownItem" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
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
        badgeType?: string;
        /**
         * Where the user should be taken on click.
         * By default this will be passed as the 'href' prop to the <a> tag,
         * but to the RootComponent it will be a 'to' prop instead
         */
        to?: string;
        /**
         * A component to be used instead of an <a> tag
         */
        RootComponent?: React.ElementType;
        /**
         * onClick handler
         */
        onClick?: (event: React.MouseEvent<any>) => any;
        /**
         * Whether or not to pass "exact" property to underlying NavLink component
         */
        useExact?: boolean;
    }
    /**
     * An individual item that should be contained within a Dropdown.Menu
     */
    function DropdownItem({ className, icon, value, children, badge, badgeType, to, RootComponent, onClick, useExact, }: Props): JSX.Element;
    namespace DropdownItem {
        var displayName: string;
    }
    /** @component */
    export default DropdownItem;
}
declare module "components/Dropdown/DropdownItemDivider" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
    }
    /**
     * Used to seperate items within a Dropdown with a horizontal line
     */
    function DropdownItemDivider(props: Props): JSX.Element;
    namespace DropdownItemDivider {
        var displayName: string;
    }
    export default DropdownItemDivider;
}
declare module "helpers/ClickOutside" {
    import * as React from "react";
    interface Props {
        children: (v: {
            setElementRef: (el: HTMLElement) => any;
        }) => React.ReactNode;
        onOutsideClick: () => void;
    }
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
declare module "components/Dropdown/Dropdown" {
    import React from "react";
    interface DefaultProps {
        children?: React.ReactNode;
        className?: string;
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
         * Should the trigger render a link or a buttton
         */
        type?: "link" | "button";
        /**
         * An Icon to be displayed within the trigger
         */
        icon?: string;
        /**
         * The trigger content
         */
        triggerContent?: React.ReactNode;
        /**
         * The triggers background color
         */
        color?: string;
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
    }
    export type itemObject = {
        icon?: string;
        badge?: string;
        badgeType?: string;
        value?: string;
        isDivider?: boolean;
        to?: string;
        RootComponent?: React.ElementType;
        onClick?: (event: React.MouseEvent) => any;
    };
    const Dropdown: ({ className, children, desktopOnly, isOption, flex, ...props }: DefaultProps) => JSX.Element;
    export default Dropdown;
}
declare module "components/Dropdown/index" {
    import Dropdown from "components/Dropdown/Dropdown";
    import DropdownTrigger from "components/Dropdown/DropdownTrigger";
    import DropdownMenu from "components/Dropdown/DropdownMenu";
    import DropdownItem from "components/Dropdown/DropdownItem";
    import DropdownItemDivider from "components/Dropdown/DropdownItemDivider";
    const CompoundDropdown: any;
    export { CompoundDropdown as default, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownItemDivider, };
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
    import * as React from "react";
    import { itemObject } from "components/Dropdown/Dropdown";
    type defaultOptionType = "profile" | "settings" | "mail" | "message" | "divider" | "help" | "logout";
    type optionsType = Array<defaultOptionType | itemObject>;
    export interface Props {
        avatarURL?: string;
        name?: string;
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
    function AccountDropdown({ avatarURL, name, description, options, optionsRootComponent, }: Props): JSX.Element;
    export default AccountDropdown;
}
declare module "components/AccountDropdown/index" {
    import AccountDropdown from "components/AccountDropdown/AccountDropdown";
    export { AccountDropdown as default };
}
declare module "components/Alert/AlertLink" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        href?: string;
    }
    /**
     * Renders a link that stands out more within Alerts
     */
    function AlertLink({ children, className, href }: Props): JSX.Element;
    namespace AlertLink {
        var displayName: string;
    }
    export default AlertLink;
}
declare module "components/Alert/Alert" {
    import * as React from "react";
    import AlertLink from "components/Alert/AlertLink";
    import { MouseEvents, PointerEvents } from "index";
    type AlertType = "primary" | "secondary" | "success" | "info" | "warning" | "danger";
    interface Props extends MouseEvents, PointerEvents {
        children?: React.ReactNode;
        className?: string;
        /**
         * The type of this Alert, changes it's color
         */
        type: AlertType;
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
    type State = {
        isDismissed: boolean;
    };
    class Alert extends React.Component<Props, State> {
        state: {
            isDismissed: boolean;
        };
        _handleOnDismissClick: () => void;
        static Link: typeof AlertLink;
        render(): false | JSX.Element;
    }
    export default Alert;
}
declare module "components/Alert/index" {
    import Alert from "components/Alert/Alert";
    export { Alert as default };
}
declare module "components/Card/CardHeader" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        backgroundURL?: string;
    }
    function CardHeader({ className, children, backgroundURL }: Props): JSX.Element;
    namespace CardHeader {
        var displayName: string;
    }
    export default CardHeader;
}
declare module "components/Card/CardTitle" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        RootComponent?: React.ElementType;
    }
    function CardTitle({ className, children, RootComponent }: Props): JSX.Element;
    namespace CardTitle {
        var displayName: string;
    }
    export default CardTitle;
}
declare module "components/Card/CardBody" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function CardBody({ className, children }: Props): JSX.Element;
    namespace CardBody {
        var displayName: string;
    }
    export default CardBody;
}
declare module "components/Card/CardOptions" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function CardOptions({ className, children }: Props): JSX.Element;
    namespace CardOptions {
        var displayName: string;
    }
    export default CardOptions;
}
declare module "components/Card/CardOptionsItem" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        icon?: string;
        type?: "collapse" | "close" | "fullscreen";
        onClick?: () => any;
    }
    function CardOptionsItem({ className, children, icon, type, onClick }: Props): JSX.Element;
    namespace CardOptionsItem {
        var displayName: string;
    }
    export default CardOptionsItem;
}
declare module "components/Card/CardStatus" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        color: string;
        side?: boolean;
    }
    function CardStatus({ className, children, color, side }: Props): JSX.Element;
    namespace CardStatus {
        var displayName: string;
    }
    export default CardStatus;
}
declare module "components/Card/CardAlert" {
    interface Props {
        children?: any;
        className?: string;
        color: string;
    }
    function CardAlert({ className, children, color }: Props): JSX.Element;
    namespace CardAlert {
        var displayName: string;
    }
    export default CardAlert;
}
declare module "components/Card/CardFooter" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function CardFooter({ className, children }: Props): JSX.Element;
    namespace CardFooter {
        var displayName: string;
    }
    export default CardFooter;
}
declare module "components/Card/CardMap" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        placeholder?: string;
    }
    function CardMap({ className, children, placeholder }: Props): JSX.Element;
    namespace CardMap {
        var displayName: string;
    }
    export default CardMap;
}
declare module "components/Card/Card" {
    import * as React from "react";
    import CardHeader from "components/Card/CardHeader";
    import CardTitle from "components/Card/CardTitle";
    import CardBody from "components/Card/CardBody";
    import CardOptions from "components/Card/CardOptions";
    import CardOptionsItem from "components/Card/CardOptionsItem";
    import CardStatus from "components/Card/CardStatus";
    import CardAlert from "components/Card/CardAlert";
    import CardFooter from "components/Card/CardFooter";
    import CardMap from "components/Card/CardMap";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        title?: string;
        body?: React.ReactNode;
        RootComponent?: React.ElementType;
        options?: React.ReactNode;
        isCollapsible?: boolean;
        isCollapsed?: boolean;
        isClosable?: boolean;
        isClosed?: boolean;
        isFullscreenable?: boolean;
        statusColor?: string;
        statusSide?: boolean;
        alert?: React.ReactNode;
        alertColor?: string;
        footer?: string;
        aside?: boolean;
    }
    interface State {
        isClosed: boolean;
        isCollapsed: boolean;
        isFullscreen: boolean;
    }
    class Card extends React.PureComponent<Props, State> {
        state: {
            isClosed: boolean;
            isCollapsed: boolean;
            isFullscreen: boolean;
        };
        static Header: typeof CardHeader;
        static Body: typeof CardBody;
        static Title: typeof CardTitle;
        static Options: typeof CardOptions;
        static OptionsItem: typeof CardOptionsItem;
        static Status: typeof CardStatus;
        static Alert: typeof CardAlert;
        static Footer: typeof CardFooter;
        static Map: typeof CardMap;
        handleCloseOnClick: () => void;
        handleCollapseOnClick: () => void;
        handleFullscreenOnClick: () => void;
        render(): JSX.Element | null;
    }
    /** @component */
    export default Card;
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
    function BlogCard({ children, title, description, avatarUrl, imgUrl, imgAlt, aside, authorName, date, imgSrc, avatarImgSrc, iconName, iconHref, postHref, profileHref, }: Props): JSX.Element;
    /** @component */
    export default BlogCard;
}
declare module "components/BlogCard/index" {
    import BlogCard from "components/BlogCard/BlogCard";
    export { BlogCard as default };
}
declare module "components/Card/index" {
    import Card from "components/Card/Card";
    export { Card as default };
}
declare module "components/List/ListItem" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        inline?: boolean;
    }
    function ListItem({ className, children, inline }: Props): JSX.Element;
    namespace ListItem {
        var displayName: string;
    }
    export default ListItem;
}
declare module "components/List/ListGroup" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        transparent?: boolean;
        isCardBody?: boolean;
    }
    function ListGroup({ className, children, transparent, isCardBody }: Props): JSX.Element;
    namespace ListGroup {
        var displayName: string;
    }
    export default ListGroup;
}
declare module "components/List/ListGroupItem" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        RootComponent?: React.ElementType;
        active?: boolean;
        action?: boolean;
        icon?: string;
        to?: string;
    }
    function ListGroupItem({ className, children, RootComponent, active, action, icon, to, }: Props): JSX.Element;
    namespace ListGroupItem {
        var displayName: string;
    }
    /** @component */
    export default ListGroupItem;
}
declare module "components/List/List" {
    import * as React from "react";
    import ListItem from "components/List/ListItem";
    import ListGroup from "components/List/ListGroup";
    import ListGroupItem from "components/List/ListGroupItem";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        unstyled?: boolean;
        seperated?: boolean;
        inline?: boolean;
    }
    function List({ className, children, unstyled, seperated, inline }: Props): JSX.Element;
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
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function Media({ className, children }: Props): JSX.Element;
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
    type itemObject = {
        name: string;
        label?: string;
        to?: string;
        tooltip?: string;
        color?: string;
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
    namespace SocialNetworksList {
        var displayName: string;
    }
    export default SocialNetworksList;
}
declare module "components/SocialNetworksList/index" {
    import SocialNetworksList from "components/SocialNetworksList/SocialNetworksList";
    export { SocialNetworksList as default };
}
declare module "components/Tooltip/Tooltip" {
    import * as React from "react";
    import "./Tooltip.css";
    type Props = {
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
    };
    type State = {
        isShown: boolean;
    };
    class Tooltip extends React.Component<Props, State> {
        state: {
            isShown: boolean;
        };
        _handleTriggerOnMouseEnter: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        _handleTriggerOnMouseLeave: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
        render(): JSX.Element;
    }
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
declare module "components/Media/index" {
    import Media from "components/Media/Media";
    import MediaBody from "components/Media/MediaBody";
    import MediaHeading from "components/Media/MediaHeading";
    import MediaList from "components/Media/MediaList";
    import MediaObject from "components/Media/MediaObject";
    import MediaBodySocial from "components/Media/MediaBodySocial";
    import MediaListItem from "components/Media/MediaListItem";
    const CompoundMedia: typeof Media & {
        Body: typeof MediaBody;
        BodySocial: typeof MediaBodySocial;
        Heading: typeof MediaHeading;
        List: typeof MediaList;
        ListItem: typeof MediaListItem;
        Object: typeof MediaObject;
    };
    export { CompoundMedia as default, Media, MediaBody, MediaBodySocial, MediaHeading, MediaList, MediaListItem, MediaObject, };
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
    function Comment({ className, children, avatarURL, name, date, text, replies, }: Props): JSX.Element;
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
    import * as React from "react";
    import { FormEvents } from "index";
    export interface Props extends FormEvents {
        children?: React.ReactNode;
        className?: string;
        action?: string;
        method?: string;
        autoComplete: "on" | "off";
    }
    function Form({ className, children, action, method, onSubmit, autoComplete, }: Props): JSX.Element;
    namespace Form {
        var defaultProps: {
            autoComplete: string;
        };
    }
    export default Form;
}
declare module "components/Form/FormLabel" {
    import * as React from "react";
    import { MouseEvents, PointerEvents } from "index";
    interface Props extends MouseEvents, PointerEvents {
        children?: React.ReactNode;
        className?: string;
        aside?: string;
    }
    function FormLabel({ className, aside, children, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: Props): JSX.Element;
    namespace FormLabel {
        var displayName: string;
    }
    export default FormLabel;
}
declare module "components/Form/FormGroup" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        label?: React.ReactNode;
        isRequired?: boolean;
        /**
         * @deprecated
         */
        inputProps?: any;
    }
    function FormGroup({ className, children, label, isRequired }: Props): JSX.Element;
    namespace FormGroup {
        var displayName: string;
    }
    export default FormGroup;
}
declare module "components/Form/FormInput" {
    import { FormEvents, MouseEvents, PointerEvents, FocusEvents, KeyboardEvents, ClipboardEvents } from "index";
    interface FormStyle {
        className?: string;
        icon?: string;
        position?: "append" | "prepend";
        valid?: boolean;
        tick?: boolean;
        invalid?: boolean;
        cross?: boolean;
        feedback?: string;
        error?: string;
        type?: string;
        placeholder?: string;
        name?: string;
        value?: string | number;
        min?: string | number;
        max?: string | number;
        minLength?: number;
        maxLength?: number;
        disabled?: boolean;
        readOnly?: boolean;
        autoFocus?: boolean;
        required?: boolean;
        checked?: boolean;
    }
    export interface Props extends FormStyle, FormEvents, MouseEvents, PointerEvents, FocusEvents, KeyboardEvents, ClipboardEvents {
        placeholder?: string;
        type?: "checkbox" | "radio" | "text" | "email" | "password" | "number";
        value?: string | number;
        /**
         * Wraps the input in Form.Group and adds a label
         */
        label?: string;
        autoComplete?: "on" | "off";
    }
    /**
     * A an input field
     */
    function FormInput(props: Props): JSX.Element;
    namespace FormInput {
        var displayName: string;
    }
    /** @component */
    export default FormInput;
}
declare module "components/Form/FormStaticText" {
    import * as React from "react";
    import { MouseEvents, FocusEvents, FormEvents, PointerEvents } from "index";
    interface Props extends MouseEvents, FocusEvents, FormEvents, PointerEvents {
        children?: React.ReactNode;
        className?: string;
    }
    function FormStaticText({ className, children, onChange, onBlur, onFocus, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: Props): JSX.Element;
    namespace FormStaticText {
        var displayName: string;
    }
    export default FormStaticText;
}
declare module "components/Form/FormTextarea" {
    import { FocusEvents, FormEvents, MouseEvents, PointerEvents } from "index";
    interface Props extends FocusEvents, FormEvents, MouseEvents, PointerEvents {
        className?: string;
        valid?: boolean;
        tick?: boolean;
        invalid?: boolean;
        cross?: boolean;
        feedback?: string;
        error?: string;
        placeholder?: string;
        name?: string;
        value?: string | number;
        defaultValue?: string;
        disabled?: boolean;
        rows?: number;
        children?: string;
        label?: string;
    }
    function FormTextarea(props: Props): JSX.Element;
    namespace FormTextarea {
        var displayName: string;
    }
    /** @component */
    export default FormTextarea;
}
declare module "components/Grid/GridRow" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        cards?: boolean;
        deck?: boolean;
        gutters?: "xs" | "sm" | "md" | "lg";
        alignItems?: string;
        justifyContent?: string;
    }
    function GridRow({ className, children, cards, deck, gutters, alignItems, justifyContent, }: Props): JSX.Element;
    namespace GridRow {
        var displayName: string;
    }
    /** @component */
    export default GridRow;
}
declare module "components/Grid/GridCol" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
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
        ignoreCol?: boolean;
    }
    function GridCol({ className, children, width, xs, sm, md, lg, xl, xsAuto, smAuto, mdAuto, lgAuto, xlAuto, auto, offset, offsetXs, offsetSm, offsetMd, offsetLg, offsetXl, ignoreCol, }: Props): JSX.Element;
    namespace GridCol {
        var displayName: string;
    }
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
        var displayName: string;
    }
    /** @component */
    export default Grid;
}
declare module "components/Grid/index" {
    import Grid from "components/Grid/Grid";
    export { Grid as default };
}
declare module "components/Form/FormImageCheck" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormImageCheck({ className, children }: Props): JSX.Element;
    namespace FormImageCheck {
        var displayName: string;
    }
    export default FormImageCheck;
}
declare module "components/Form/FormImageCheckItem" {
    import { MouseEvents, PointerEvents, FocusEvents } from "index";
    interface Props extends MouseEvents, PointerEvents, FocusEvents {
        className?: string;
        value: string | number;
        imageURL: string;
        col?: {
            width?: number;
            sm?: number;
            md?: number;
            lg?: number;
        };
    }
    function FormImageCheckItem({ className, col: { width, sm, md, lg }, imageURL, value, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, onFocus, onBlur, }: Props): JSX.Element;
    namespace FormImageCheckItem {
        var displayName: string;
    }
    export default FormImageCheckItem;
}
declare module "components/Form/FormColorCheck" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormColorCheck({ className, children }: Props): JSX.Element;
    namespace FormColorCheck {
        var displayName: string;
    }
    export default FormColorCheck;
}
declare module "components/Form/FormColorCheckItem" {
    import { MouseEvents, PointerEvents, FocusEvents } from "index";
    interface Props extends MouseEvents, PointerEvents, FocusEvents {
        className?: string;
        color: string;
    }
    function FormColorCheckItem({ className, color, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, onFocus, onBlur, }: Props): JSX.Element;
    namespace FormColorCheckItem {
        var displayName: string;
    }
    export default FormColorCheckItem;
}
declare module "components/Form/FormInputGroupAppend" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormInputGroupAppend({ className, children }: Props): JSX.Element;
    namespace FormInputGroupAppend {
        var displayName: string;
    }
    export default FormInputGroupAppend;
}
declare module "components/Form/FormInputGroupPrepend" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormInputGroupPrepend({ className, children }: Props): JSX.Element;
    namespace FormInputGroupPrepend {
        var displayName: string;
    }
    export default FormInputGroupPrepend;
}
declare module "components/Form/FormInputGroup" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        append?: React.ReactNode;
        prepend?: React.ReactNode;
        RootComponent?: React.ElementType;
        inputProps?: any;
    };
    function FormInputGroup(props: Props): JSX.Element;
    namespace FormInputGroup {
        var displayName: string;
    }
    export default FormInputGroup;
}
declare module "components/Form/FormHelp" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        position?: "top" | "bottom";
        message?: React.ReactNode;
    }
    function FormHelp({ className, children, position, message }: Props): JSX.Element;
    namespace FormHelp {
        var displayName: string;
    }
    export default FormHelp;
}
declare module "components/Form/FormSelect" {
    import * as React from "react";
    import { FocusEvents, FormEvents, MouseEvents, PointerEvents } from "index";
    interface Props extends FocusEvents, FormEvents, MouseEvents, PointerEvents {
        children?: React.ReactNode;
        className?: string;
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
        name?: string;
        value?: string | number;
        disabled?: boolean;
        readOnly?: boolean;
        multiple?: boolean;
    }
    function FormSelect(props: Props): JSX.Element;
    namespace FormSelect {
        var displayName: string;
    }
    /** @component */
    export default FormSelect;
}
declare module "components/Form/FormFooter" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormFooter(props: Props): JSX.Element;
    namespace FormFooter {
        var displayName: string;
    }
    export default FormFooter;
}
declare module "components/Form/FormRatio" {
    import * as React from "react";
    import { MouseEvents, FocusEvents, PointerEvents } from "types/index";
    interface PropsForAll extends MouseEvents, FocusEvents, PointerEvents {
        className?: string;
        step?: number;
        min?: number;
        max?: number;
        value?: number;
        onChange?: (event: React.ChangeEvent<EventTarget>) => any;
        defaultValue?: number;
    }
    interface ControlledProps extends PropsForAll {
        value: number;
        onChange: (event: React.ChangeEvent<EventTarget>) => any;
    }
    interface UnControlledProps extends PropsForAll {
        defaultValue: number;
    }
    type Props = ControlledProps | UnControlledProps;
    type State = {
        internalValue: number | undefined;
    };
    class FormRatio extends React.PureComponent<Props, State> {
        state: {
            internalValue: number | undefined;
        };
        handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
        render(): JSX.Element;
    }
    export default FormRatio;
}
declare module "components/Form/FormFieldSet" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormFieldSet({ className, children }: Props): JSX.Element;
    namespace FormFieldSet {
        var displayName: string;
    }
    export default FormFieldSet;
}
declare module "components/Form/FormRadio" {
    import { MouseEvents, PointerEvents, FormEvents, FocusEvents } from "types/index";
    interface Props extends MouseEvents, PointerEvents, FormEvents, FocusEvents {
        className?: string;
        /**
         * Wrap the checkbox with a label
         */
        label?: string;
        value?: string | number;
        name?: string;
        checked?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        isInline?: boolean;
    }
    function FormRadio({ className, label, value, name, checked, disabled, readOnly, onChange, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, onBlur, onFocus, onClick, isInline, }: Props): JSX.Element;
    namespace FormRadio {
        var displayName: string;
    }
    export default FormRadio;
}
declare module "components/Form/FormCheckbox" {
    import { FormEvents, FocusEvents } from "types/index";
    export interface Props extends FormEvents, FocusEvents {
        className?: string;
        /**
         * Wrap the checkbox with a label
         */
        label?: string;
        value?: string | number;
        name?: string;
        checked?: boolean;
        disabled?: boolean;
        readOnly?: boolean;
        isInline?: boolean;
    }
    function FormCheckbox({ className, label, value, name, checked, disabled, readOnly, onChange, onFocus, onBlur, isInline, }: Props): JSX.Element;
    namespace FormCheckbox {
        var displayName: string;
    }
    /** @component */
    export default FormCheckbox;
}
declare module "components/Form/FormSelectGroup" {
    import * as React from "react";
    import { FormEvents, FocusEvents, MouseEvents, PointerEvents } from "index";
    interface Props extends FormEvents, FocusEvents, MouseEvents, PointerEvents {
        children: React.ReactElement[];
        className?: string;
        pills?: boolean;
        canSelectMultiple?: boolean;
    }
    function FormSelectGroup({ className, children, pills, canSelectMultiple, onChange, onFocus, onBlur, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: Props): JSX.Element;
    namespace FormSelectGroup {
        var displayName: string;
    }
    export default FormSelectGroup;
}
declare module "components/Form/FormSelectGroupItem" {
    import { FormEvents, FocusEvents, MouseEvents, PointerEvents } from "index";
    interface Props extends FormEvents, FocusEvents, MouseEvents, PointerEvents {
        className?: string;
        label?: string;
        value?: string | number;
        name: string;
        checked?: boolean;
        icon?: string;
        type?: "radio" | "checkbox";
    }
    function FormSelectGroupItem({ className, label, name, value, checked, icon, type, onChange, onFocus, onBlur, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: Props): JSX.Element;
    namespace FormSelectGroupItem {
        var displayName: string;
    }
    export default FormSelectGroupItem;
}
declare module "components/Form/FormFileInput" {
    import * as React from "react";
    import { FormEvents, FocusEvents, MouseEvents, PointerEvents } from "index";
    interface Props extends FormEvents, FocusEvents, MouseEvents, PointerEvents {
        className?: string;
        value?: string | number;
        name?: string;
        label?: string;
        disabled?: boolean;
        readOnly?: boolean;
        accept?: string;
    }
    type State = {
        fileName: string;
    };
    class FormFileInput extends React.Component<Props, State> {
        state: {
            fileName: string;
        };
        _handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
        render(): JSX.Element;
    }
    export default FormFileInput;
}
declare module "components/Form/FormSwitchStack" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormToggleStack({ className, children }: Props): JSX.Element;
    namespace FormToggleStack {
        var displayName: string;
    }
    export default FormToggleStack;
}
declare module "components/Form/FormSwitch" {
    import { FocusEvents, FormEvents, MouseEvents, PointerEvents } from "index";
    interface Props extends FocusEvents, FormEvents, MouseEvents, PointerEvents {
        className?: string;
        name?: string;
        label?: string | number;
        value?: string | number;
        checked?: boolean;
        type?: "checkbox" | "radio";
    }
    function FormToggle({ className, type, name, value, label, checked, onChange, onBlur, onFocus, onClick, onMouseEnter, onMouseLeave, onPointerEnter, onPointerLeave, }: Props): JSX.Element;
    namespace FormToggle {
        var displayName: string;
    }
    export default FormToggle;
}
declare module "components/Form/FormInputGroupText" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function FormInputGroupText({ className, children }: Props): JSX.Element;
    namespace FormInputGroupText {
        var displayName: string;
    }
    export default FormInputGroupText;
}
declare module "components/Form/FormMaskedInput" {
    import { FormEvents, FocusEvents, MouseEvents, PointerEvents } from "index";
    interface Props extends FormEvents, FocusEvents, MouseEvents, PointerEvents {
        mask: Array<string | RegExp>;
        className?: string;
        placeholder?: string;
        guide?: boolean;
        id?: string;
        value?: string;
        valid?: boolean;
        tick?: boolean;
        invalid?: boolean;
        cross?: boolean;
        feedback?: string;
        placeholderChar?: string;
    }
    /**
     * A masked input field using react-text-mask
     */
    function FormMaskedInput(props: Props): JSX.Element;
    namespace FormMaskedInput {
        var displayName: string;
    }
    export default FormMaskedInput;
}
declare module "components/Form/FormDatePicker" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        defaultDate: Date;
        minYear: number;
        maxYear: number;
        format: string;
        monthLabels: Array<string>;
        onChange?: (date: Date) => void;
    }
    interface State {
        currentDate: Date;
    }
    type ChangeTypes = "mm" | "yyyy" | "dd";
    class FormDatePicker extends React.PureComponent<Props, State> {
        static defaultProps: {
            monthLabels: string[];
            minYear: number;
            maxYear: number;
            format: string;
            defaultDate: Date;
        };
        state: {
            currentDate: Date;
        };
        _handleOnChange: (type: ChangeTypes, value: number) => void;
        _range: (start: number, end: number) => number[];
        _renderMonths: () => JSX.Element;
        _renderDays: () => JSX.Element;
        _renderYears: () => JSX.Element;
        render(): JSX.Element;
    }
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
    import { Props as FormProps } from "components/Form/Form";
    import { Props as FormInputProps } from "components/Form/FormInput";
    import { Props as ButtonProps } from "components/Button/Button";
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
declare module "components/Header/Header" {
    import * as React from "react";
    interface Props {
        /**
         * A component to use instead of a <div> as the root component
         */
        RootComponent?: React.ElementType;
        children?: React.ReactNode;
        className?: string;
        /**
         * The size of the header
         */
        size?: 1 | 2 | 3 | 4 | 5 | 6;
    }
    /**
     * A header
     * By default renders a div not a <hX> tag and has no additional spacing classes applied
     */
    function Header({ RootComponent, className, children, size }: Props): JSX.Element;
    export default Header;
}
declare module "components/Header/H1" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    /**
     * A Header component rendered as a h1 HTML element with a margin below
     */
    function H1({ className, children }: Props): JSX.Element;
    namespace H1 {
        var displayName: string;
    }
    export default H1;
}
declare module "components/Header/H2" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    /**
     * A Header component rendered as a h2 HTML element with a margin below
     */
    function H2({ className, children }: Props): JSX.Element;
    namespace H2 {
        var displayName: string;
    }
    export default H2;
}
declare module "components/Header/H3" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    /**
     * A Header component rendered as a h3 HTML element with a margin below
     */
    function H3({ className, children }: Props): JSX.Element;
    namespace H3 {
        var displayName: string;
    }
    export default H3;
}
declare module "components/Header/H4" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    /**
     * A Header component rendered as a h4 HTML element with a margin below
     */
    function H4({ className, children }: Props): JSX.Element;
    namespace H4 {
        var displayName: string;
    }
    export default H4;
}
declare module "components/Header/H5" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    /**
     * A Header component rendered as a h5 HTML element with a margin below
     */
    function H5({ className, children }: Props): JSX.Element;
    namespace H5 {
        var displayName: string;
    }
    export default H5;
}
declare module "components/Header/H6" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    /**
     * A Header component rendered as a h6 HTML element with a margin below
     */
    function H6({ className, children }: Props): JSX.Element;
    namespace H6 {
        var displayName: string;
    }
    export default H6;
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
    import * as React from "react";
    import "./Container.css";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function Container({ className, children }: Props): JSX.Element;
    export default Container;
}
declare module "components/Loader/Loader" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function Loader({ className, children }: Props): JSX.Element;
    namespace Loader {
        var displayName: string;
    }
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
    namespace DimmerContent {
        var displayName: string;
    }
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
        var displayName: string;
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
    namespace GalleryCardDetails {
        var displayName: string;
    }
    export default GalleryCardDetails;
}
declare module "components/GalleryCard/GalleryCardFooter" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
    }
    function GalleryCardFooter({ children }: Props): JSX.Element;
    namespace GalleryCardFooter {
        var displayName: string;
    }
    export default GalleryCardFooter;
}
declare module "components/GalleryCard/GalleryCardIconGroup" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function GalleryCardIconGroup({ children, className }: Props): JSX.Element;
    namespace GalleryCardIconGroup {
        var displayName: string;
    }
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
    namespace GalleryCardIconItem {
        var displayName: string;
    }
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
    namespace GalleryCardImage {
        var displayName: string;
    }
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
declare module "components/Nav/NavSubItem" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        LinkComponent?: React.ElementType;
        to?: string;
        icon?: string;
        value?: string;
        useExact?: boolean;
    };
    function NavSubItem({ children, LinkComponent, className, to, icon, value, useExact, }: Props): JSX.Element;
    namespace NavSubItem {
        var displayName: string;
    }
    export default NavSubItem;
}
declare module "components/Nav/NavLink" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        RootComponent?: React.ElementType;
        active?: boolean;
        icon?: string;
        to?: string;
        hasSubNav?: boolean;
        rootRef?: any;
        useExact?: boolean;
    }
    function NavLink({ children, className, RootComponent, icon, active, to, hasSubNav, rootRef, useExact, }: Props): JSX.Element;
    namespace NavLink {
        var displayName: string;
    }
    /** @component */
    export default NavLink;
}
declare module "components/Nav/NavItem" {
    import * as React from "react";
    import NavSubItem from "components/Nav/NavSubItem";
    import { subNavItem } from "components/Nav/Nav";
    interface Props {
        children?: React.ReactNode;
        className?: string;
        value?: string;
        LinkComponent?: React.ElementType;
        href?: string;
        to?: string;
        icon?: string;
        type?: "li" | "div";
        /**
         * Make this item behave like it has a subNav even if you dont use subItems or subItemsObjects
         */
        hasSubNav?: boolean;
        onClick?: () => void;
        /**
         * Display this item in an active, or currently viewing, state
         */
        active?: boolean;
        subItems?: React.ReactElement<typeof NavSubItem>[];
        subItemsObjects?: Array<subNavItem>;
        /**
         * Position of the subnav Dropdown
         */
        position?: any;
        /**
         * Whether or not to pass "exact" property to underlying NavLink component
         */
        useExact?: boolean;
    }
    type State = {
        isOpen: boolean;
    };
    /**
     * A NavItem with react-popper powered subIems Dropdowns
     */
    class NavItem extends React.Component<Props, State> {
        displayName: string;
        state: {
            isOpen: boolean;
        };
        _handleOnClick: () => void;
        render(): JSX.Element;
    }
    /** @component */
    export default NavItem;
}
declare module "components/Nav/Nav" {
    import * as React from "react";
    import NavItem from "components/Nav/NavItem";
    export type subNavItem = {
        value: string;
        to?: string;
        icon?: string;
        LinkComponent?: React.ElementType;
        useExact?: boolean;
    };
    type navItem = {
        value: string;
        to?: string;
        icon?: string;
        active?: boolean;
        LinkComponent?: React.ElementType;
        subItems?: Array<subNavItem>;
        useExact?: boolean;
    };
    interface Props {
        children?: React.ReactNode;
        className?: string;
        tabbed?: boolean;
        /**
         * @deprecated use children instead
         */
        items?: React.ReactElement<typeof NavItem> | React.ReactElement<typeof NavItem>[];
        itemsObjects?: Array<navItem>;
        routerContextComponentType?: any;
    }
    type State = {
        pathName?: string | null;
    };
    class Nav extends React.Component<Props, State> {
        state: {
            pathName: null;
        };
        routerCallback: (location: {
            pathname: string;
        }) => any;
        computeActive(initialValue?: boolean, to?: string, subItems?: Array<subNavItem>): boolean;
        render(): JSX.Element;
    }
    export default Nav;
}
declare module "components/Nav/NavSubmenu" {
    import * as React from "react";
    interface Props {
        children?: React.ReactNode;
        className?: string;
    }
    function NavSubmenu({ className, children }: Props): JSX.Element;
    namespace NavSubmenu {
        var displayName: string;
    }
    export default NavSubmenu;
}
declare module "components/Nav/NavSubmenuItem" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        RootComponent?: React.ElementType;
        active?: boolean;
        icon?: string;
        to?: string;
    };
    function NavSubmenuItem({ className, RootComponent, icon, children, active, to, }: Props): JSX.Element;
    namespace NavSubmenuItem {
        var displayName: string;
    }
    export default NavSubmenuItem;
}
declare module "components/Nav/index" {
    import Nav from "components/Nav/Nav";
    import NavItem from "components/Nav/NavItem";
    import NavLink from "components/Nav/NavLink";
    import NavSubItem from "components/Nav/NavSubItem";
    import NavSubmenu from "components/Nav/NavSubmenu";
    import NavSubmenuItem from "components/Nav/NavSubmenuItem";
    const CompoundNav: typeof Nav & {
        Item: typeof NavItem;
        SubItem: typeof NavSubItem;
        Link: typeof NavLink;
        Submenu: typeof NavSubmenu;
        SubmenuItem: typeof NavSubmenuItem;
    };
    export { CompoundNav as default, Nav, NavSubItem, NavLink, NavSubmenu, NavSubmenuItem, };
}
declare module "components/Page/Page" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function Page({ className, children }: Props): JSX.Element;
    export default Page;
}
declare module "components/Page/PageMain" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageMain({ children }: Props): JSX.Element;
    namespace PageMain {
        var displayName: string;
    }
    export default PageMain;
}
declare module "components/Page/PageTitle" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function PageTitle({ className, children }: Props): JSX.Element;
    namespace PageTitle {
        var displayName: string;
    }
    export default PageTitle;
}
declare module "components/Page/PageSubTitle" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageSubTitle({ children }: Props): JSX.Element;
    namespace PageSubTitle {
        var displayName: string;
    }
    export default PageSubTitle;
}
declare module "components/Page/PageOptions" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageOptions({ children }: Props): JSX.Element;
    namespace PageOptions {
        var displayName: string;
    }
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
    namespace PageHeader {
        var displayName: string;
    }
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
    namespace PageContent {
        var displayName: string;
    }
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
    namespace PageContentWithSidebar {
        var displayName: string;
    }
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
    namespace PageCard {
        var displayName: string;
    }
    export default PageCard;
}
declare module "components/Page/PageMapHeader" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function PageMapHeader({ children }: Props): JSX.Element;
    namespace PageMapHeader {
        var displayName: string;
    }
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
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function PricingCardCategory({ className, children }: Props): JSX.Element;
    namespace PricingCardCategory {
        var displayName: string;
    }
    export default PricingCardCategory;
}
declare module "components/PricingCard/PricingCardPrice" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function PricingCardPrice({ className, children }: Props): JSX.Element;
    namespace PricingCardPrice {
        var displayName: string;
    }
    export default PricingCardPrice;
}
declare module "components/PricingCard/PricingCardAttributeList" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function PricingCardAttributeList({ className, children }: Props): JSX.Element;
    namespace PricingCardAttributeList {
        var displayName: string;
    }
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
    namespace PricingCardAttributeItem {
        var displayName: string;
    }
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
    namespace PricingCardButton {
        var displayName: string;
    }
    export default PricingCardButton;
}
declare module "components/PricingCard/PricingCard" {
    import * as React from "react";
    import PricingCardCategory from "components/PricingCard/PricingCardCategory";
    import PricingCardPrice from "components/PricingCard/PricingCardPrice";
    import PricingCardAttributeList from "components/PricingCard/PricingCardAttributeList";
    import PricingCardAttributeItem from "components/PricingCard/PricingCardAttributeItem";
    import PricingCardButton from "components/PricingCard/PricingCardButton";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        active?: boolean;
        category?: React.ReactNode;
    };
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
    type Props = {
        className?: string;
        color?: string;
        width?: number;
    };
    function ProgressBar({ className, color, width }: Props): JSX.Element;
    namespace ProgressBar {
        var displayName: string;
    }
    export default ProgressBar;
}
declare module "components/Progress/Progress" {
    import * as React from "react";
    import ProgressBar from "components/Progress/ProgressBar";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        size?: string;
    };
    function Progress({ className, children, size }: Props): JSX.Element;
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
    type Props = {
        className?: string;
        header?: React.ReactNode;
        content?: React.ReactNode;
        progressColor?: string;
        progressWidth?: number;
    };
    function ProgressCard({ className, header, content, progressColor, progressWidth, }: Props): JSX.Element;
    namespace ProgressCard {
        var displayName: string;
    }
    export default ProgressCard;
}
declare module "components/ProgressCard/index" {
    import ProgressCard from "components/ProgressCard/ProgressCard";
    export { ProgressCard as default };
}
declare module "components/Site/Site" {
    import * as React from "react";
    type Props = {
        children: React.ReactNode;
    };
    /**
     * Components for building the base of your website, such as a header, footer and nav bar
     */
    function Site(props: Props): React.ReactNode;
    namespace Site {
        var displayName: string;
    }
    /** @component */
    export default Site;
}
declare module "components/Site/SiteLogo" {
    type Props = {
        href?: string;
        src?: string;
        alt?: string;
    };
    const SiteLogo: {
        (props: Props): JSX.Element;
        displayName: string;
    };
    export default SiteLogo;
}
declare module "components/Site/SiteHeader" {
    import * as React from "react";
    import { Props as NotificationTrayProps } from "components/Notification/NotificationTray";
    import { Props as AccountDropdownProps } from "components/AccountDropdown/AccountDropdown";
    export type Props = {
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
    };
    /**
     * The very top header bar of your website, containing the logo and some optional
     * action components, such as a NotificationTray or an AccountDropdown on the right hand side
     */
    const SiteHeader: {
        ({ children, href, align, imageURL, alt, notificationsTray: notificationsTrayFromProps, accountDropdown: accountDropdownFromProps, navItems, onMenuToggleClick, }: Props): JSX.Element;
        displayName: string;
    };
    export default SiteHeader;
}
declare module "components/Site/SiteFooter" {
    import * as React from "react";
    export type Props = {
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
    };
    /**
     * The footer of your website
     */
    const SiteFooter: {
        ({ links, note, copyright, nav }: Props): JSX.Element;
        displayName: string;
    };
    export default SiteFooter;
}
declare module "components/Site/SiteNav" {
    import * as React from "react";
    import Nav from "components/Nav/index";
    type subNavItem = {
        value: string;
        to?: string;
        icon?: string;
        LinkComponent?: React.ElementType;
        useExact?: boolean;
    };
    type navItem = {
        value: string;
        to?: string;
        icon?: string;
        active?: boolean;
        LinkComponent?: React.ElementType;
        subItems?: Array<subNavItem>;
        useExact?: boolean;
    };
    type navItems = Array<navItem>;
    export type Props = {
        children?: React.ReactNode;
        items?: React.ReactElement<typeof Nav.Item>[];
        itemsObjects?: navItems;
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
    };
    const SiteNav: {
        ({ children, items, itemsObjects, withSearchForm, rightColumnComponent, collapse, routerContextComponentType, }: Props): JSX.Element;
        displayName: string;
    };
    export default SiteNav;
}
declare module "components/Site/SiteWrapper" {
    import * as React from "react";
    import { Props as SiteHeaderProps } from "components/Site/SiteHeader";
    import { Props as SiteNavProps } from "components/Site/SiteNav";
    import { Props as SiteFooterProps } from "components/Site/SiteFooter";
    type Props = {
        headerProps: SiteHeaderProps;
        navProps: SiteNavProps;
        footerProps: SiteFooterProps;
        children: React.ReactNode;
        routerContextComponentType?: React.ElementType;
    };
    type State = {
        collapseMobileMenu: boolean;
    };
    class SiteWrapper extends React.PureComponent<Props, State> {
        static displayName: string;
        state: {
            collapseMobileMenu: boolean;
        };
        handleCollapseMobileMenu: () => void;
        render(): JSX.Element;
    }
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
        Header: {
            ({ children, href, align, imageURL, alt, notificationsTray: notificationsTrayFromProps, accountDropdown: accountDropdownFromProps, navItems, onMenuToggleClick, }: import("components/Site/SiteHeader").Props): JSX.Element;
            displayName: string;
        };
        Footer: {
            ({ links, note, copyright, nav }: import("components/Site/SiteFooter").Props): JSX.Element;
            displayName: string;
        };
        Nav: {
            ({ children, items, itemsObjects, withSearchForm, rightColumnComponent, collapse, routerContextComponentType, }: import("components/Site/SiteNav").Props): JSX.Element;
            displayName: string;
        };
        Logo: {
            (props: {
                href?: string | undefined;
                src?: string | undefined;
                alt?: string | undefined;
            }): JSX.Element;
            displayName: string;
        };
        Wrapper: typeof SiteWrapper;
    };
    export { CompoundSite as default, Site, SiteHeader, SiteFooter, SiteNav, SiteLogo, SiteWrapper, };
}
declare module "components/Stamp/Stamp" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        size?: "sm" | "md";
        icon?: string;
        color?: string;
    };
    function Stamp({ children, className, size, icon, color }: Props): JSX.Element;
    namespace Stamp {
        var displayName: string;
    }
    export default Stamp;
}
declare module "components/Stamp/index" {
    import Stamp from "components/Stamp/Stamp";
    export { Stamp as default };
}
declare module "components/StampCard/StampCard" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        icon?: string;
        color?: string;
        header?: React.ReactNode;
        footer?: React.ReactNode;
    };
    function StampCard({ children, className, icon, color, header, footer, }: Props): JSX.Element;
    namespace StampCard {
        var displayName: string;
    }
    export default StampCard;
}
declare module "components/StampCard/index" {
    import StampCard from "components/StampCard/StampCard";
    export { StampCard as default };
}
declare module "components/StatsCard/StatsCard" {
    import * as React from "react";
    type Props = {
        className?: string;
        /**
         * The % amount by which your total has increased
         */
        movement: number;
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
        layout?: 1 | 2;
        /**
         * A Chart to be included at the bottom of layout 2
         */
        chart?: React.ReactNode;
    };
    /**
     * Used for dispaying an individual statistic/number with 2 potential layouts
     */
    function StatsCard({ className, movement, total, label, layout, chart, }: Props): JSX.Element;
    namespace StatsCard {
        var displayName: string;
    }
    export default StatsCard;
}
declare module "components/StatsCard/index" {
    import StatsCard from "components/StatsCard/StatsCard";
    export { StatsCard as default };
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
    export interface Props {
        title: string;
        children: React.ReactNode;
    }
    interface State {
    }
    class Tab extends React.PureComponent<Props, State> {
        render(): React.ReactNode;
    }
    export default Tab;
}
declare module "components/Tabs/TabbedContainer" {
    import * as React from "react";
    import { Props as TabProps } from "components/Tabs/Tab";
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
    import { Props as TabProps } from "components/Tabs/Tab";
    interface Props {
        children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
        selectedTitle: string;
        stateCallback: (selectedTitle: string) => void;
    }
    function TabbedHeader(props: Props): JSX.Element;
    export default TabbedHeader;
}
declare module "components/Tabs/Tabs" {
    import * as React from "react";
    import { Props as TabProps } from "components/Tabs/Tab";
    import "./Tabs.css";
    interface Props {
        initialTab: string;
        children: React.ReactElement<TabProps>[] | React.ReactElement<TabProps>;
    }
    interface State {
        selectedTitle: string;
    }
    class Tabs extends React.PureComponent<Props, State> {
        state: {
            selectedTitle: string;
        };
        render(): JSX.Element;
    }
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
    import { Props as TabProps } from "components/Tabs/Tab";
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
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function TableHeader({ className, children, ...props }: Props): JSX.Element;
    namespace TableHeader {
        var displayName: string;
    }
    export default TableHeader;
}
declare module "components/Table/TableBody" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function TableBody({ className, children, ...props }: Props): JSX.Element;
    namespace TableBody {
        var displayName: string;
    }
    export default TableBody;
}
declare module "components/Table/TableRow" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function TableRow({ className, children, ...props }: Props): JSX.Element;
    namespace TableRow {
        var displayName: string;
    }
    export default TableRow;
}
declare module "components/Table/TableCol" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        colSpan?: number;
        alignContent?: "left" | "center" | "right";
    };
    function TableCol({ className, children, alignContent, colSpan }: Props): JSX.Element;
    namespace TableCol {
        var displayName: string;
    }
    export default TableCol;
}
declare module "components/Table/TableColHeader" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        colSpan?: number;
        alignContent?: "left" | "center" | "right";
    };
    function TableColHeader({ className, children, colSpan, alignContent }: Props): JSX.Element;
    namespace TableColHeader {
        var displayName: string;
    }
    export default TableColHeader;
}
declare module "components/Table/Table" {
    import * as React from "react";
    import TableHeader from "components/Table/TableHeader";
    import TableBody from "components/Table/TableBody";
    import TableRow from "components/Table/TableRow";
    import TableCol from "components/Table/TableCol";
    import TableColHeader from "components/Table/TableColHeader";
    type BodyItem = {
        key: string | number;
        item: Array<{
            content?: React.ReactNode;
            className?: string;
            alignContent?: "left" | "center" | "right";
        }>;
    };
    type Props = {
        children?: React.ReactNode;
        className?: string;
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
        headerItems?: Array<{
            content?: React.ReactNode;
            className?: string;
        }>;
        bodyItems?: Array<BodyItem>;
    };
    function Table({ className, children, cards, striped, responsive, highlightRowOnHover, hasOutline, verticalAlign, ...props }: Props): JSX.Element;
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
declare module "components/Tag/TagList" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    /**
     * Adds a space between its child Tags
     */
    function TagList(props: Props): JSX.Element;
    namespace TagList {
        var displayName: string;
    }
    export default TagList;
}
declare module "components/Tag/TagAddOn" {
    import * as React from "react";
    import { MouseEvents, PointerEvents, FocusEvents } from "types/index";
    interface PropsForAll extends MouseEvents, PointerEvents, FocusEvents {
        children?: React.ReactNode;
        className?: string;
        icon?: string;
        color?: string;
        link?: true;
        href?: string;
        RootComponent?: React.ElementType;
        to?: string;
    }
    interface DefaultProps extends PropsForAll {
    }
    interface PropsForLink extends PropsForAll {
        link: true;
        href?: string;
    }
    interface PropsForReactRouter extends PropsForAll {
        RootComponent: React.ElementType;
        to: string;
    }
    type Props = DefaultProps | PropsForLink | PropsForReactRouter;
    function TagAddOn(props: Props): JSX.Element;
    namespace TagAddOn {
        var displayName: string;
    }
    export default TagAddOn;
}
declare module "components/Tag/Tag" {
    import * as React from "react";
    import TagList from "components/Tag/TagList";
    import TagAddOn from "components/Tag/TagAddOn";
    import { MouseEvents, PointerEvents, FocusEvents } from "types/index";
    interface PropsForAll extends MouseEvents, PointerEvents, FocusEvents {
        children?: React.ReactNode;
        className?: string;
        rounded?: boolean;
        color?: string;
        avatar?: string;
        remove?: boolean;
        onRemoveClick?: React.MouseEventHandler;
        addOn?: React.ReactNode;
        addOnIcon?: string;
        addOnColor?: string;
        onAddOnClick?: React.MouseEventHandler;
        link?: true;
        href?: string;
        RootComponent?: React.ElementType;
        to?: string;
    }
    interface DefaultProps extends PropsForAll {
    }
    interface LinkComponentProps extends PropsForAll {
        link: true;
        href: string;
    }
    interface ReactRouterProps extends PropsForAll {
        RootComponent: React.ElementType;
        to: string;
    }
    type Props = DefaultProps | LinkComponentProps | ReactRouterProps;
    type State = {
        isDeleted: boolean;
    };
    class Tag extends React.Component<Props, State> {
        state: {
            isDeleted: boolean;
        };
        static List: typeof TagList;
        static AddOn: typeof TagAddOn;
        handleOnRemoveClick: () => void;
        render(): JSX.Element | null;
    }
    export default Tag;
}
declare module "components/Tag/index" {
    import Tag from "components/Tag/Tag";
    export { Tag as default };
}
declare module "components/Timeline/TimelineItemBadge" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        color?: string;
    };
    function TimelineItemBadge({ className, children, color }: Props): JSX.Element;
    namespace TimelineItemBadge {
        var displayName: string;
    }
    export default TimelineItemBadge;
}
declare module "components/Timeline/TimelineItemTime" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        active?: boolean;
    };
    function TimelineItemTime({ className, children, active }: Props): JSX.Element;
    namespace TimelineItemTime {
        var displayName: string;
    }
    export default TimelineItemTime;
}
declare module "components/Timeline/TimelineItemTitle" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        active?: boolean;
    };
    function TimelineItemTitle({ children, active }: Props): any;
    namespace TimelineItemTitle {
        var displayName: string;
    }
    export default TimelineItemTitle;
}
declare module "components/Timeline/TimelineItemDescription" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
    };
    function TimelineItemDescription({ children }: Props): JSX.Element;
    namespace TimelineItemDescription {
        var displayName: string;
    }
    export default TimelineItemDescription;
}
declare module "components/Timeline/TimelineItem" {
    import * as React from "react";
    type Props = {
        children?: React.ReactNode;
        className?: string;
        title?: string;
        description?: string;
        badge?: boolean;
        badgeColor?: string;
        time?: string;
        active?: boolean;
    };
    function TimelineItem({ className, children, title: titleFromProps, description, badge, badgeColor, time, active, }: Props): JSX.Element;
    namespace TimelineItem {
        var displayName: string;
    }
    export default TimelineItem;
}
declare module "components/Timeline/Timeline" {
    import * as React from "react";
    import TimelineItem from "components/Timeline/TimelineItem";
    import TimelineItemTime from "components/Timeline/TimelineItemTime";
    import TimelineItemBadge from "components/Timeline/TimelineItemBadge";
    import TimelineItemTitle from "components/Timeline/TimelineItemTitle";
    import TimelineItemDescription from "components/Timeline/TimelineItemDescription";
    type Props = {
        children?: React.ReactNode;
        className?: string;
    };
    function Timeline({ className, children }: Props): JSX.Element;
    namespace Timeline {
        var Item: typeof TimelineItem;
        var ItemTime: typeof TimelineItemTime;
        var ItemBadge: typeof TimelineItemBadge;
        var ItemTitle: typeof TimelineItemTitle;
        var ItemDescription: typeof TimelineItemDescription;
    }
    export default Timeline;
}
declare module "components/Timeline/index" {
    import Timeline from "components/Timeline/Timeline";
    export { Timeline as default };
}
declare module "components/index" {
    import NotificationProps from "components/Notification/index";
    export { NotificationProps };
    export { default as AccountDropdown } from "components/AccountDropdown/index";
    export { default as Alert } from "components/Alert/index";
    export { default as Avatar } from "components/Avatar/index";
    export { default as Badge } from "components/Badge/index";
    export { default as BlogCard } from "components/BlogCard/index";
    export { default as Button } from "components/Button/index";
    export { default as Card } from "components/Card/index";
    export { default as Comment } from "components/Comment/index";
    export { default as CommentsCard } from "components/CommentsCard/index";
    export { default as ContactCard } from "components/ContactCard/index";
    export { default as Container } from "components/Container";
    export { default as Dimmer } from "components/Dimmer/index";
    export { default as Dropdown } from "components/Dropdown/index";
    export { default as Form } from "components/Form/index";
    export { default as GalleryCard } from "components/GalleryCard/index";
    export { default as Grid } from "components/Grid/index";
    export { default as Header } from "components/Header/index";
    export { default as Icon } from "components/Icon/index";
    export { default as List } from "components/List/index";
    export { default as Loader } from "components/Loader/index";
    export { default as Media } from "components/Media/index";
    export { default as Nav } from "components/Nav/index";
    export { default as Notification } from "components/Notification/index";
    export { default as Page } from "components/Page/index";
    export { default as PricingCard } from "components/PricingCard/index";
    export { default as Profile } from "components/Profile/index";
    export { default as Progress } from "components/Progress/index";
    export { default as ProgressCard } from "components/ProgressCard/index";
    export { default as Site } from "components/Site/index";
    export { default as SocialNetworksList } from "components/SocialNetworksList/index";
    export { default as Stamp } from "components/Stamp/index";
    export { default as StampCard } from "components/StampCard/index";
    export { default as StatsCard } from "components/StatsCard/index";
    export { default as StoreCard } from "components/StoreCard/index";
    export { default as TabbedCard } from "components/TabbedCard/index";
    export { default as Table } from "components/Table/index";
    export { default as Tag } from "components/Tag/index";
    export { default as Text } from "components/Text/index";
    export { default as Timeline } from "components/Timeline/index";
    export { default as Tooltip } from "components/Tooltip/index";
    export { Tab, Tabs, TabbedContainer, TabbedHeader } from "components/Tabs/index";
}
declare module "helpers/RouterContextProvider" {
    import * as React from "react";
    type Props = {
        location: Location;
        callback?: (location: {
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
    interface Props {
        action?: string;
        children?: React.ReactNode;
        method?: string;
        title: string;
        buttonText: string;
        onSubmit?: (e?: React.FormEvent) => any;
    }
    function FormCard({ children, action, method, onSubmit, title, buttonText, }: Props): JSX.Element;
    export default FormCard;
}
declare module "forms/FormTextInput" {
    import { Props as FormInputProps } from "components/Form/FormInput";
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
declare module "colors" {
    const colors: {
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
    export default colors;
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
    import { FormEvents, FocusEvents } from "types/index";
    type fieldTypes = {
        email?: string;
        password?: string;
    };
    type touchedTypes = {
        email?: boolean;
        password?: boolean;
    };
    interface Props extends FormEvents, FocusEvents {
        strings?: stringTypes;
        action?: string;
        method?: string;
        values?: fieldTypes;
        errors?: fieldTypes;
        touched?: touchedTypes;
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
    import { FormEvents, FocusEvents } from "types/index";
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
    interface Props extends FormEvents, FocusEvents {
        strings?: stringTypes;
        action?: string;
        method?: string;
        values?: fieldTypes;
        errors?: fieldTypes;
        touched?: touchedTypes;
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
    import { FormEvents, FocusEvents } from "types/index";
    type fieldTypes = {
        email?: string;
    };
    type touchedTypes = {
        email?: boolean;
    };
    interface Props extends FormEvents, FocusEvents {
        strings?: stringTypes;
        action?: string;
        method?: string;
        values?: fieldTypes;
        errors?: fieldTypes;
        touched?: touchedTypes;
    }
    const ForgotPasswordPageWithTouchedErrors: React.ComponentType<Props>;
    export default ForgotPasswordPageWithTouchedErrors;
}
declare module "page_templates/account/ForgotPasswordPage/index" {
    import ForgotPasswordPage from "page_templates/account/ForgotPasswordPage/ForgotPasswordPage";
    export default ForgotPasswordPage;
}
declare module "index" {
    export * from "types/index";
    export * from "components/index";
    export { NotificationProps } from "components/index";
    export { default as RouterContextProvider, } from "helpers/RouterContextProvider";
    export { default as StandaloneFormPage, } from "page_templates/StandaloneFormPage";
    export { default as DefaultErrorPage, } from "page_templates/errors/DefaultErrorPage";
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
    export { default as ForgotPasswordPage, } from "page_templates/account/ForgotPasswordPage/index";
}
declare module "tabler-react" {
    export * from "index";
}
//# sourceMappingURL=tabler-react.d.ts.map