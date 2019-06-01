/**
 * interface definitions for Pointer EventHandling
 */

export interface Pointer {
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
