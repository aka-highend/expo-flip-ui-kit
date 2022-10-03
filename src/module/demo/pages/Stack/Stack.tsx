import React from "react";
import { Stack as NStack, IStackProps } from "native-base";

export const Stack: React.FC<IStackProps> = (props) => {
  return <NStack {...props} />;
};

export default Stack;
