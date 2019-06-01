/**
 * interface definitions for Touch EventHandling
 */

export interface Touch {
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
