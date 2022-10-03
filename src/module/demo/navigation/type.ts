/**
 * Define every routing name
 * It's easy for you to navigate between page without remembering the page name
 */
export const DemoRoutingName = {
  DEMO_KEYBOARD: "DEMO_KEYBOARD",
  DEMO_BUTTON: "DEMO_BUTTON",
  DEMO_ICON: "DEMO_ICON",
  DEMO_ICON_BUTTON: "DEMO_ICON_BUTTON",
} as const;

/**
 * Define every screen parameters
 * Example: `DETAIL_TRANSACTION` screen need `data` props that contains transaction data
 */
export type DemoRootStackParamList = {
  [DemoRoutingName.DEMO_BUTTON]: undefined;
  [DemoRoutingName.DEMO_ICON]: undefined;
  [DemoRoutingName.DEMO_ICON_BUTTON]: undefined;
  [DemoRoutingName.DEMO_KEYBOARD]: undefined;
};
