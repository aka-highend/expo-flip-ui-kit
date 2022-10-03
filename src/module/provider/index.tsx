import React from "react";
import { NativeBaseProvider, NativeBaseProviderProps } from "native-base";
import FlipCustomTheme from "./FlipCustomTheme";

type CustomThemeType = typeof FlipCustomTheme;

declare module "native-base" {
  interface ICustomTheme extends CustomThemeType {}
}

export const FlipUiProvider: React.FC<NativeBaseProviderProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <NativeBaseProvider theme={FlipCustomTheme} {...rest}>
      {children}
    </NativeBaseProvider>
  );
};

export default FlipUiProvider;
