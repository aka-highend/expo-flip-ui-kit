import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const LogOut = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="m16.565 8.313 3.938 3.937-3.938 3.938M10 12.25h10.5m-9 8.25H4.75a.75.75 0 0 1-.75-.75v-15A.75.75 0 0 1 4.75 4h6.75"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </Icon>
);

export default LogOut;
