import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const SendMoney = (props: IIconProps) => (
  <Icon viewBox="0 0 28 28" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.07 3.013C12.456 5.765 5.66 11.304 2 17.003c-.936 1.461.094 3.38 1.843 3.446 1.776.05 4.004-.009 6.033-.367 1.24-.235 2.282-1.075 2.733-2.238l2.255-5.883c.268-.69 1.328-.385 1.141.329l-1.27 6.298a3.579 3.579 0 0 0 1.128 3.394c1.46 1.276 3.185 2.409 4.602 3.233 1.512.874 3.433-.173 3.417-1.931.004-6.73-2.729-15.058-4.32-19.287-.585-1.55-2.134-1.996-3.492-.984Z"
    />
  </Icon>
);

export default SendMoney;
