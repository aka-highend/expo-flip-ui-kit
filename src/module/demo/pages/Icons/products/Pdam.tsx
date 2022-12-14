import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const Pdam = (props: IIconProps) => (
  <Icon viewBox="0 0 28 28" {...props}>
    <Path
      d="M9.464 21.197c-.19 1.355-1.463 2.292-2.831 2.1-1.368-.193-2.358-1.27-2.143-2.8.207-1.467 1.869-3.097 2.717-4.081.213-.25.623-.192.77.108.547 1.167 1.697 3.18 1.487 4.672Z"
      fill="currentColor"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m24.039 5.572 1.7.237a1.544 1.544 0 0 1 1.317 1.744l-1.3 9.314a1.546 1.546 0 0 1-.037.188l-.88 6.264a2.519 2.519 0 0 1-2.837 2.137l-2.674-.375-.001.012a2.516 2.516 0 0 1-2.151-2.648l.29-4.587a1.259 1.259 0 0 0-1.083-1.32L4.458 14.864a1.22 1.22 0 0 1-1.037-1.376 2.999 2.999 0 0 1 2.901-2.597l12.224-.317.36-2.585-3.569-.498a1.544 1.544 0 0 1-1.316-1.743l.002-.012a1.544 1.544 0 0 1 1.743-1.317l8.257 1.152.016.002Z"
      fill="currentColor"
    />
  </Icon>
);

export default Pdam;
