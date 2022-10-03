import * as React from "react";
import { Path } from "react-native-svg";
import { Icon, IIconProps } from "native-base";

export const PrivacyPolicy = (props: IIconProps) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <Path
      d="M18.539 4.66578L12.6986 3.09286C12.2414 2.96905 11.7586 2.96905 11.3014 3.09286L5.46104 4.66578C5.04165 4.77974 4.67173 5.02577 4.40788 5.36623C4.14402 5.7067 4.00076 6.12285 4 6.55103V10.9762C3.99966 12.8568 4.51336 14.7029 5.48725 16.3209C6.46115 17.9389 7.85938 19.2693 9.53538 20.1727L10.2473 20.5563C10.7841 20.8474 11.3871 21 12 21C12.6129 21 13.2159 20.8474 13.7527 20.5563L14.4646 20.1727C16.1399 19.2697 17.5377 17.94 18.5115 16.3229C19.4854 14.7058 19.9995 12.8607 20 10.9809V6.55103C19.9992 6.12285 19.856 5.7067 19.5921 5.36623C19.3283 5.02577 18.9584 4.77974 18.539 4.66578Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="transparent"
      strokeLinejoin="round"
    />
    <Path
      d="M11.9867 10.4912C12.6735 10.4912 13.2323 9.93241 13.2323 9.24559C13.2323 8.55877 12.6735 8 11.9867 8C11.2999 8 10.7411 8.54713 10.7411 9.24559C10.7411 9.93241 11.2999 10.4912 11.9867 10.4912Z"
      fill="transparent"
      stroke="currentColor"
    />
    <Path
      d="M9 15.0468C9 13.388 10.3412 12.0468 12 12.0468C13.6588 12.0468 15 13.388 15 15.0468"
      fill="transparent"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default PrivacyPolicy;
