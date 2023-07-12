import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TransactionScreen from "../screens/Inico";
import SearchScreen from "../screens/Createpost";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={TransactionScreen} />
          <Tab.Screen name="Crea una publicación" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
