import * as React from "react";
import { Circle, Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const DeleteNumpad = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M16.4944 3.42296C13.8074 3.22534 10.6299 3.08231 9.4172 3.43505C7.96805 3.61619 1.40613 9.35518 1.40613 11.9735C1.40613 14.5919 8.01689 20.0757 9.4172 20.5532C10.8764 21.5499 17.3631 20.6273 19.83 20.2074C20.359 20.0434 20.8368 19.7432 21.2164 19.3361C21.5961 18.929 21.8646 18.4291 21.9956 17.8855C22.729 14.2975 22.7881 10.6048 22.173 6.99997"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="transparent"
    />
    <Circle cx="20.1" cy="4.1" r="1.1" fill="currentColor" />
    <Path
      fill="transparent"
      d="M16.5194 9.11011L10.9085 14.8886"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fill="transparent"
      d="M10.8764 9.11011L16.4873 14.8886"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default React.memo(DeleteNumpad);
