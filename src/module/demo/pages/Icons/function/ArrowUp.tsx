import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const ArrowUp = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path d="M12.8 9.067a1 1 0 0 0-1.6 0l-4 5.333A1 1 0 0 0 8 16h8a1 1 0 0 0 .8-1.6l-4-5.333Z" />
  </Icon>
);

export default ArrowUp;
