import * as React from "react";
import { Circle, Ellipse } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Language = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Circle
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Ellipse
      cx="12"
      cy="12"
      rx="5.45455"
      ry="10"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Ellipse
      cx="12"
      cy="12"
      rx="5.55556"
      ry="10"
      transform="rotate(-90 12 12)"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx="11.8801" cy="11.8801" r="0.991161" fill="#222223" />
  </Icon>
);

export default Language;
