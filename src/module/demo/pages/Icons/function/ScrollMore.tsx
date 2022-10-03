import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const ScrollMore = (props: IIconProps) => (
  <Icon viewBox="0 0 18 18" {...props}>
    <Path
      d="M9.5 3.937V14.05m0 0 3.75-3.739M9.5 14.051l-3.75-3.739"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default ScrollMore;
