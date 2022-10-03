import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Maps = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M15.398 21.44c2.58-.77 3.9-1.21 6.57-2.1.57-5.7.57-8.54 0-14.24-2.54.38-3.84.65-6.47 1.25m-6.6 11.74c-2.63.6-3.92.87-6.47 1.25-.57-5.7-.57-8.54 0-14.24 2.67-.89 3.99-1.32 6.57-2.1l-.1 15.09Zm0 0c2.68 1.41 3.99 2.11 6.5 3.35l-6.5-3.35Zm0 0c-.14-6.03-.12-9.05.11-15.08l-.11 15.08Zm.11-15.08c2.51 1.24 3.83 1.95 6.5 3.35l-6.5-3.35Zm6.39 18.43c.23-6.03.25-9.05.11-15.08l-.11 15.08Z"
      fill="transparent"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.12 15A1.12 1.12 0 1 1 18 16.11 1.244 1.244 0 0 1 19.12 15Z"
      stroke="currentColor"
    />
  </Icon>
);

export default Maps;
