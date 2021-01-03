import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import SettingsScreen from "./SettingsScreen";

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
    return (
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="Carts" component={SettingsScreen} />
            <SettingsStack.Screen name="Details" component={DetailScreen} />
        </SettingsStack.Navigator>
    );
}

export default SettingsStackScreen;