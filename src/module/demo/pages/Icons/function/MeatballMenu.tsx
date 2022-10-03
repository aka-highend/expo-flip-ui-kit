import * as React from "react";
import { Circle } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const MeatballMenu = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Circle cx={12} cy={12} r={2} />
    <Circle cx={19} cy={12} r={2} />
    <Circle cx={5} cy={12} r={2} />
  </Icon>
);

export default MeatballMenu;
