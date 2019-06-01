/**
 * interface definitions for Mouse EventHandling
 */

export interface Mouse {
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
