import React from "react";
import { FlipUiProvider } from "./module/provider/index";
import { useFonts } from "expo-font";

import Navigations from "./lib/Navigations/index";
import { Platform } from "react-native";
const isIOS = Platform.OS === "ios";

const FlipUIKitApp = () => {
  const [isLoaded] = useFonts({
    "ProximaNova-Bold": require("./assets/fonts/ProximaNova-Bold.otf"),
    [isIOS
      ? "ProximaNova-BoldIt"
      : "ProximaNova-Bold-It"]: require("./assets/fonts/ProximaNova-Bold-It.otf"),
    "ProximaNova-Medium": require("./assets/fonts/ProximaNova-Medium.otf"),
    [isIOS
      ? "ProximaNova-MediumIt"
      : "ProximaNova-Medium-It"]: require("./assets/fonts/ProximaNova-Medium-It.otf"),
  });

  if (!isLoaded) {
    return <></>;
  }

  return (
    <FlipUiProvider>
      <Navigations></Navigations>
    </FlipUiProvider>
  );
}

export default FlipUIKitApp;