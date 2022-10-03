import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Location = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M12.22 2C7.93 2 4.07 5.93 4 10.3c-.05 3.27 2.55 6.97 7 11.05.13.11.18.17.3.28.27.24.59.37.92.37.33 0 .65-.13.91-.36 4.62-4.19 7.36-8 7.31-11.34-.07-4.37-3.92-8.3-8.22-8.3Zm0 15.96a1.071 1.071 0 0 1 0-2.14 1.071 1.071 0 0 1 0 2.14Zm2.24-5.48c-.6.6-1.41.93-2.24.93-.84 0-1.65-.34-2.24-.93-.59-.6-.93-1.4-.92-2.23.01-.84.35-1.64.94-2.24.6-.6 1.4-.94 2.22-.94.82 0 1.62.34 2.22.94.59.6.93 1.41.94 2.24.01.84-.33 1.64-.92 2.23Z"
      fill="currentColor"
    />
  </Icon>
);

export default Location;
