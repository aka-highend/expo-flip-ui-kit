import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Download = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M12 3v13.485m0 0 5-4.985m-5 4.985L7 11.5M17 20H7"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default Download;
