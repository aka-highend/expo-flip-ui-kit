import React from "react";
import { StackNavigation } from "../../../lib/Navigations";
import HomePage from "../pages";
import Performance from "../pages/performance";
import { CommonRoutingName } from "./type";

const CommonNavigation = () => (
  <>
    <StackNavigation.Screen
      name={CommonRoutingName.HOME}
      component={HomePage}
      options={{
        title: "Demo Lists",
      }}
    />
    <StackNavigation.Screen
      name={CommonRoutingName.PERFORMANCE}
      component={Performance}
      options={{
        title: "Performance Demo",
      }}
    />
  </>
);

export default CommonNavigation;
