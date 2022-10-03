import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const LinkIcon = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M11.116 7.67955L13.7178 5.07772C15.1548 3.64076 17.4845 3.64076 18.9215 5.07772C20.3584 6.51467 20.3584 8.84443 18.9215 10.2814L16.3197 12.8832M12.8509 16.3543L10.249 18.955C8.80717 20.3609 6.50298 20.3465 5.07883 18.9227C3.65467 17.4988 3.63975 15.1946 5.04535 13.7525L7.64719 11.1506M14.5869 9.4133L9.38326 14.617"
      stroke="currentColor"
      fill="transparent"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </Icon>
);

export default LinkIcon;
