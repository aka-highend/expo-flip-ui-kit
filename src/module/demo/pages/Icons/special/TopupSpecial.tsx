import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

const TopupSpecial = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M18.037 2.463c-4.824-.617-7.25-.617-12.074 0-1.676.206-3.294 1.824-3.5 3.5-.617 4.824-.617 7.25 0 12.074.22 1.662 1.838 3.294 3.5 3.5 4.824.617 7.25.617 12.074 0 1.662-.22 3.294-1.838 3.5-3.5.617-4.824.617-7.25 0-12.074-.22-1.676-1.838-3.294-3.5-3.5Z"
      fill="currentColor"
    />
    <Path
      d="M7 12h10m-5-5v10"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default TopupSpecial;
