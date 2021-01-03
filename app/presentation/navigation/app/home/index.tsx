import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import HomeScreen from "./HomeScreen";

const HomeStack = createStackNavigator();

function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Details" component={DetailScreen} />
      </HomeStack.Navigator>
    );
  }

  export default HomeStackScreen;