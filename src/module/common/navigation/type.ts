/**
 * Define every routing name
 * It's easy for you to navigate between page without remembering the page name
 */
export enum CommonRoutingName {
  HOME = "HOME",
  PERFORMANCE = "PERFORMANCE",
}

/**
 * Define every screen parameters
 * Example: `DETAIL_TRANSACTION` screen need `data` props that contains transaction data
 */
export type CommonRootStackParamList = {
  [CommonRoutingName.HOME]: undefined;
  [CommonRoutingName.PERFORMANCE]: undefined;
};
