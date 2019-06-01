/**
 * interface definitions for Wheel EventHandling
 */

export interface Wheel {
  /**
   * Handle Wheel Event
   */
  onWheel?: (event: React.WheelEvent) => any;
}
