// @flow

/**
 * Type definitions for Mouse EventHandling
 */

export type Mouse = {|
  /**
   * Handle Single-click Event (Left-click)
   */
  +onClick?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle ContextMenu Click Event (Right-click)
   */
  +onContextMenu?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Double-click Event (Left-click)
   */
  +onDoubleClick?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Drag Event
   */
  +onDrag?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Dragging End Event
   */
  +onDragEnd?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Drag Enter of Current Component
   */
  +onDragEnter?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Drag Exit of the Window
   */
  +onDragExit?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Drag Leave of Current Component
   */
  +onDragLeave?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Drag Over Event
   */
  +onDragOver?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Drag Start Event
   */
  +onDragStart?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Drag-Release Event (Drop)
   */
  +onDrop?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Down Event
   */
  +onMouseDown?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle the entering (hovering) of the Component.
   */
  +onMouseEnter?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle the exiting of the Component.
   */
  +onMouseLeave?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Move Event
   */
  +onMouseMove?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Out Event
   */
  +onMouseOut?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Over Event
   */
  +onMouseOver?: (event: SyntheticMouseEvent<*>) => mixed,
  /**
   * Handle Mouse Up Event
   */
  +onMouseUp?: (event: SyntheticMouseEvent<*>) => mixed,
|};
