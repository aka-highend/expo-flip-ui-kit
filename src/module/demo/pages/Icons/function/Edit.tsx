import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Edit = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M16.58 5.489a141.25 141.25 0 0 0 0 0Zm1.142-1.667c-1.526 1.667-3.41 3.51-5.077 5.102a1.567 1.567 0 0 0-.475.9A19.758 19.758 0 0 0 11.995 12a19.49 19.49 0 0 0 2.167-.183 1.5 1.5 0 0 0 .9-.467 146.227 146.227 0 0 1 5.103-5.077 1.243 1.243 0 0 0 .392-1.067 1.745 1.745 0 0 0-.2-.609 2.144 2.144 0 0 0-.409-.55 2.442 2.442 0 0 0-.558-.417 1.668 1.668 0 0 0-.6-.192 1.259 1.259 0 0 0-1.068.384v0Z"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.5 3.5c-2 0-6.187.256-7.229.402a3.029 3.029 0 0 0-2.405 2.357 43.19 43.19 0 0 0 0 11.474c.1.601.392 1.154.833 1.575.423.437.974.729 1.572.834 3.802.5 7.653.5 11.455 0a3.029 3.029 0 0 0 2.405-2.41 45.42 45.42 0 0 0 .302-3.128c.035-.73.067-2.98.067-3.604"
      stroke="currentColor"
      fill="transparent"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.393 15.071a.321.321 0 1 1-.643 0 .321.321 0 0 1 .643 0Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.5}
    />
  </Icon>
);

export default Edit;
