import { CommonRootStackParamList } from "../../module/common/navigation/type";
import { DemoRootStackParamList } from "../../module/demo/navigation/type";

/**
 * Define every screen parameters
 * Example: `DETAIL_TRANSACTION` screen need `data` props that contains transaction data
 */
export type RootStackParamList = CommonRootStackParamList &
  DemoRootStackParamList;
