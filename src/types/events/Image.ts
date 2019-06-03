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
