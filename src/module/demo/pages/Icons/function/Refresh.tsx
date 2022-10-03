import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Refresh = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M15.639 9.665h3.75v-3.75"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M16.736 16.736a6.875 6.875 0 1 1 0-9.722l2.652 2.651"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default Refresh;
