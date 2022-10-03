import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Filter = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M2.941 2.594c7.243-.792 10.875-.792 18.118 0 .158.021.327.084.475.19.148.106.274.243.348.401a.902.902 0 0 1 .116.475.654.654 0 0 1-.168.412c-2.513 2.766-4.002 4.371-6.926 7.58a.893.893 0 0 0-.233.602c0 2.513-.01 3.77-.063 6.282a.847.847 0 0 1-.116.423 1.064 1.064 0 0 1-.285.327c-1.405.971-2.09 1.457-3.432 2.386a.773.773 0 0 1-.422.137.846.846 0 0 1-.443-.116.942.942 0 0 1-.338-.338.994.994 0 0 1-.137-.464 262.39 262.39 0 0 1-.117-8.647.913.913 0 0 0-.232-.602c-2.914-3.199-4.403-4.804-6.915-7.57A.655.655 0 0 1 2 3.66a.859.859 0 0 1 .117-.475c.084-.158.211-.295.348-.401.138-.106.317-.169.475-.19Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default Filter;