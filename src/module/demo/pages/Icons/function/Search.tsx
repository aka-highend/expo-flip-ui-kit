import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Search = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      fill="none"
      d="M16.443 16.443 21 21m-2.25-10.125a7.875 7.875 0 1 1-15.75 0 7.875 7.875 0 0 1 15.75 0Z"
      stroke={"currentColor"}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default Search;
