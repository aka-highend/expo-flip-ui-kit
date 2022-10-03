import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Calendar = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path d="M18 4V3c0-.55-.45-1-1-1s-1 .45-1 1v1H8V3c0-.55-.45-1-1-1s-1 .45-1 1v1" />
    <Path d="M18.535 4.02c-5.04-.98-7.56-.98-12.6 0-1 .19-2.01 1.21-2.2 2.2-.98 5.04-.98 7.56 0 12.6.19.99 1.2 2.01 2.2 2.2 5.04.98 7.56.98 12.6 0 .99-.19 2.01-1.21 2.2-2.2.98-5.04.98-7.56 0-12.6-.19-.99-1.21-2-2.2-2.2Zm-.84 14.31c-4.22.45-6.68.45-10.9 0a1.01 1.01 0 0 1-.89-.9c-.32-3.01-.36-4.86-.15-7.85.03-.5.44-.9.94-.94 1.83-.12 3-.16 5.07-.17 2.47-.01 3.84.02 6.06.17.5.03.9.44.94.94.2 3 .16 4.84-.15 7.85-.08.48-.45.86-.92.9Zm-9.17-5.6a1.071 1.071 0 0 1 0-2.14 1.071 1.071 0 0 1 0 2.14Zm3.73 0a1.071 1.071 0 0 1 0-2.14 1.071 1.071 0 0 1 0 2.14Zm3.72 0a1.071 1.071 0 0 1 0-2.14 1.071 1.071 0 0 1 0 2.14Zm-7.45 3.6a1.071 1.071 0 0 1 0-2.14 1.071 1.071 0 0 1 0 2.14Zm3.73 0a1.071 1.071 0 0 1 0-2.14 1.071 1.071 0 0 1 0 2.14Zm3.72 0a1.071 1.071 0 0 1 0-2.14 1.071 1.071 0 0 1 0 2.14Z" />
  </Icon>
);

export default Calendar;