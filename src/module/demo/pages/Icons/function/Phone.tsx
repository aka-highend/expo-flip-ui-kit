import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Phone = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm1.07 7.86a1.071 1.071 0 0 1 0 2.14 1.071 1.071 0 0 1 0-2.14Zm3.67 4.86c-.79-.68-1.6-1.09-2.38-.41l-.47.41c-.34.3-.98 1.68-3.43-1.14-2.46-2.83-.99-3.27-.65-3.57l.47-.41c.78-.67.48-1.53-.08-2.4l-.34-.54c-.56-.87-1.17-1.45-1.96-.77l-.42.37c-.34.25-1.31 1.06-1.54 2.62-.28 1.86.61 3.99 2.64 6.33 2.03 2.34 4.02 3.52 5.9 3.49 1.57-.02 2.51-.86 2.81-1.16l.42-.37c.78-.68.29-1.37-.5-2.04l-.47-.41Z"
      fill="currentColor"
    />
  </Icon>
);

export default Phone;
