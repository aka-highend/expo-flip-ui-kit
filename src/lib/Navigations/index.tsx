import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./type";
import CommonNavigation from "../../module/common/navigation";
import DemoNavigation from "../../module/demo/navigation";

export const StackNavigation = createNativeStackNavigator<RootStackParamList>();

/**
 * Screen registration should be done on this component
 */
const Navigations: React.FC = () => {
  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        {CommonNavigation()}
        {DemoNavigation()}
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;
