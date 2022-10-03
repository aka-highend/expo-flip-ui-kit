import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Copy = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M13.905 7.815c-3.28-.42-4.93-.42-8.21 0-1.14.14-2.24 1.24-2.38 2.38-.42 3.28-.42 4.93 0 8.21.15 1.13 1.25 2.24 2.38 2.38 3.28.42 4.93.42 8.21 0 1.13-.15 2.24-1.25 2.38-2.38.42-3.28.42-4.93 0-8.21-.15-1.14-1.25-2.24-2.38-2.38Z"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.12 13A1.12 1.12 0 1 1 9 14.11 1.243 1.243 0 0 1 10.12 13Z"
      fill="currentColor"
    />
    <Path
      d="M16.605 16.485c.55-.05 1.14-.12 1.8-.2 1.13-.15 2.24-1.25 2.38-2.38.42-3.28.42-4.93 0-8.21-.15-1.13-1.25-2.24-2.38-2.38-3.28-.42-4.93-.42-8.21 0-1.14.14-2.24 1.24-2.38 2.38-.09.7-.16 1.32-.21 1.91"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default Copy;
