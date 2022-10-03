import React from "react";
import { VStack as NVStack, IStackProps } from "native-base";

export const VStack: React.FC<IStackProps> = (props) => {
  return <NVStack {...props} />;
};

export default VStack;
