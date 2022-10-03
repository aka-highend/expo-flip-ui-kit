import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Share = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="m14.006 7.793-4.475 2.876m0 2.662 4.475 2.876M9.923 12A2.461 2.461 0 1 1 5 12a2.461 2.461 0 0 1 4.923 0Zm8.615 5.538a2.462 2.462 0 1 1-4.923 0 2.462 2.462 0 0 1 4.923 0Zm0-11.076a2.462 2.462 0 1 1-4.923 0 2.462 2.462 0 0 1 4.923 0Z"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default Share;
