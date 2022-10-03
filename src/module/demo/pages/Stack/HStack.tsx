import React from "react";
import { HStack as NHStack, IStackProps } from "native-base";

export const HStack: React.FC<IStackProps> = (props) => {
  return <NHStack {...props} />;
};

export default HStack;
