import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const PersonalInformation = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M8.369 4.805c-1.538.104-3.075.27-4.603.52a2.782 2.782 0 0 0-1.247.654 2.846 2.846 0 0 0-.779 1.184 22.106 22.106 0 0 0 0 11.346c.156.457.426.862.78 1.195.353.322.79.55 1.257.665 5.32.841 10.732.841 16.051 0a2.888 2.888 0 0 0 1.258-.665c.353-.322.623-.738.779-1.195.977-3.72.977-7.626 0-11.346a2.773 2.773 0 0 0-.79-1.184 2.818 2.818 0 0 0-1.257-.655 51.116 51.116 0 0 0-4.696-.53"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M14.218 6.426a23.146 23.146 0 0 1-4.945 0 1 1 0 0 1-.437-.208 1.104 1.104 0 0 1-.3-.384 3.33 3.33 0 0 1 0-2.11c.061-.155.165-.29.29-.394a.88.88 0 0 1 .436-.198 23.144 23.144 0 0 1 4.946 0 .933.933 0 0 1 .436.198c.125.104.229.239.291.395a3.481 3.481 0 0 1 0 2.109 1.08 1.08 0 0 1-.301.384.791.791 0 0 1-.416.208Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeMiterlimit={10}
    />
    <Path
      d="M13.262 10.353c1.663-.25 3.356-.25 5.029 0M13.106 13.086h5.382M13.262 15.818c1.663.25 3.356.25 5.029 0"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.744 11.982a1.101 1.101 0 1 0-.002-2.202 1.101 1.101 0 0 0 .002 2.202Z"
      stroke="currentColor"
    />
    <Path
      d="M5.107 16.005a2.647 2.647 0 0 1 2.649-2.65 2.647 2.647 0 0 1 2.65 2.65"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default PersonalInformation;
