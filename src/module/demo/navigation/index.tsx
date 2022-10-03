import React from "react";
import { StackNavigation } from "../../../lib/Navigations";
import PagesButton from "../pages/Button";
import PagesIconButton from "../pages/IconButton";
import PagesIcon from "../pages/Icons";
// import PagesKeyboard from "../pages/Keyboard";
import { DemoRoutingName } from "./type";

const DemoNavigation = () => (
  <>
    <StackNavigation.Screen
      name={DemoRoutingName.DEMO_BUTTON}
      component={PagesButton}
      options={{
        title: "Button Lists",
      }}
    />
    <StackNavigation.Screen
      name={DemoRoutingName.DEMO_ICON_BUTTON}
      component={PagesIconButton}
      options={{
        title: "Icon Button",
      }}
    />
    <StackNavigation.Screen
      name={DemoRoutingName.DEMO_ICON}
      component={PagesIcon}
      options={{
        title: "Icon Lists",
      }}
    />
  </>
);

export default DemoNavigation;
