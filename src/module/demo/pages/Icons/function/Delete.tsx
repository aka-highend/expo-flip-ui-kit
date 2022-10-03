import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Delete = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M20.78 6.013c-7.11-1.01-10.67-1.01-17.78 0m16.16-.21c.61 6.01.55 9.02-.28 15.03-.03.21-.14.42-.31.6-.16.17-.37.29-.57.32-4.89.8-7.33.8-12.22 0-.2-.03-.41-.15-.57-.32a1.09 1.09 0 0 1-.31-.6c-.83-6.01-.89-9.02-.28-15.03m11.31-.36c-.04-.66-.05-.92-.1-1.58a2.03 2.03 0 0 0-.54-1.21c-.31-.34-.71-.54-1.11-.57-1.83-.11-2.75-.11-4.58 0-.41.02-.8.23-1.12.56-.31.34-.5.78-.53 1.21-.05.67-.07.92-.1 1.59m1.52 5.01c-.02 2.68-.01 4.02.05 6.7l-.05-6.7Zm5.05 0c.02 2.68.01 4.02-.05 6.7l.05-6.7Z"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default Delete;
