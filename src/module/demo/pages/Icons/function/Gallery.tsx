import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Gallery = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M4.671 6.856c5.855-.325 8.793-.325 14.648 0 1.35.08 2.533 1.252 2.593 2.593.147 3.41.118 5.116-.148 8.526-.109 1.34-1.302 2.553-2.613 2.662-5.717.473-8.575.473-14.302 0-1.321-.109-2.514-1.321-2.613-2.662-.266-3.41-.295-5.116-.147-8.526.049-1.34 1.232-2.514 2.582-2.593Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
    />
    <Path
      d="M2.897 18.852c2.12-1.29 3.243-2.04 5.52-3.558.562.65.848.976 1.4 1.626 1.912-1.488 2.908-2.257 4.87-3.775 2.877 2.06 4.327 3.095 6.998 4.84"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.618 9.517c.602-.01 1.085.493 1.085 1.124-.01.621-.503 1.134-1.114 1.134-.611 0-1.094-.503-1.094-1.124a1.158 1.158 0 0 1 1.123-1.134Z"
      fill="currentColor"
    />
    <Path
      d="M5.105 4.333c5.51-.444 8.26-.444 13.77 0"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Icon>
);

export default Gallery;
