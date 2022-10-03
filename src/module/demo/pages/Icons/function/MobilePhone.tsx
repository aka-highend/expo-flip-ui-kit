import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const MobilePhone = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M19.4016 3.89243C20.1995 9.07923 20.1995 14.3576 19.4016 19.5444C19.2856 20.0498 19.0422 20.5172 18.6946 20.902C18.3469 21.2868 17.9065 21.5763 17.4154 21.7428C13.8644 22.6681 10.1356 22.6681 6.58463 21.7428C6.09348 21.5763 5.65311 21.2868 5.30545 20.902C4.95778 20.5172 4.71439 20.0498 4.59843 19.5444C3.80052 14.3576 3.80052 9.07923 4.59843 3.89243C4.71439 3.38695 4.95778 2.91957 5.30545 2.53476C5.65311 2.14995 6.09348 1.86052 6.58463 1.69402C10.1356 0.768659 13.8644 0.768659 17.4154 1.69402C17.9065 1.86052 18.3469 2.14995 18.6946 2.53476C19.0422 2.91957 19.2856 3.38695 19.4016 3.89243Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fill="transparent"
      d="M10 19H14"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 5C12.5514 5 13 4.5514 13 4C13 3.4486 12.5514 3 12 3C11.4486 3 11 3.43925 11 4C11 4.5514 11.4486 5 12 5Z"
      fill="#222223"
    />
  </Icon>
);

export default MobilePhone;
