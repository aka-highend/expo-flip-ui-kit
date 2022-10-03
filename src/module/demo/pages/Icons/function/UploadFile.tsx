import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const UploadFile = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M11.9989 15.5853V7.68896M11.9989 7.68896L15.9535 11.6312M11.9989 7.68896L8.04568 11.6313M15.9535 17.689H8.4405"
      stroke={"currentColor"}
      fill="transparent"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.35572 7.00072C1.81009 10.829 1.89265 14.7206 2.60015 18.5223C2.78372 19.2129 3.14654 19.8428 3.65187 20.3482C4.1572 20.8535 4.78709 21.2163 5.47776 21.3999C9.78885 22.2 14.2104 22.2 18.5215 21.3999C19.2121 21.2163 19.842 20.8535 20.3473 20.3482C20.8527 19.8428 21.2155 19.2129 21.3991 18.5223C22.1991 14.2112 22.1991 9.78968 21.3991 5.47859C21.2155 4.78792 20.8527 4.15802 20.3474 3.65269C19.842 3.14736 19.2121 2.78454 18.5215 2.60098C14.7162 1.89226 10.8207 1.80969 6.98879 2.35654L2.35572 7.00072Z"
      stroke={"currentColor"}
      fill="transparent"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M2.3558 7.00079L6.98886 6.96746L6.98886 2.41217L2.3558 7.00079Z"
      fill={"currentColor"}
      stroke={"currentColor"}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default UploadFile;
