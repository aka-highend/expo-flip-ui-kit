import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const ArrowTooltip = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path d="M9.5 0C12 0 18.5 8 18.5 8H0.5C0.5 8 7 0 9.5 0Z" />
  </Icon>
);

export default ArrowTooltip;
