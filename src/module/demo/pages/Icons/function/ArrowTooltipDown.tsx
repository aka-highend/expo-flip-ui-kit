import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const ArrowTooltipDown = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path d="M9 8C11.5 8 18 0 18 0H0C0 0 6.5 8 9 8Z" />
  </Icon>
);

export default ArrowTooltipDown;
