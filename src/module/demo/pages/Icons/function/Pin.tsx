import * as React from "react";
import { Circle, Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Pin = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M17 5.26264C13.1756 4.85938 9.28661 4.9205 5.48187 5.44599C4.79366 5.58084 4.16459 5.84928 3.65758 6.22446C3.15057 6.59964 2.78341 7.06841 2.59281 7.58386C1.8024 10.823 1.8024 14.1433 2.59281 17.3825C2.78 17.905 3.14831 18.3808 3.66009 18.7611C4.17186 19.1414 4.80873 19.4127 5.50555 19.5471C9.80992 20.151 14.2256 20.151 18.53 19.5471C19.2242 19.4087 19.8568 19.1335 20.3626 18.7499C20.8684 18.3662 21.229 17.8881 21.4072 17.3646C22.0871 14.5786 22.1821 11.7324 21.6925 8.92949"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="transparent"
    />
    <Circle cx="6.54102" cy="12.5" r="1.5" fill="currentColor" />
    <Circle cx="12" cy="12.5" r="1.5" fill="currentColor" />
    <Circle cx="17.5" cy="12.5" r="1.5" fill="currentColor" />
    <Path
      d="M20.2589 6C20.2589 6.17626 20.1221 6.29633 19.9813 6.29633C19.8404 6.29633 19.7037 6.17626 19.7037 6C19.7037 5.82374 19.8404 5.70367 19.9813 5.70367C20.1221 5.70367 20.2589 5.82374 20.2589 6Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="1.40735"
    />
  </Icon>
);

export default Pin;
