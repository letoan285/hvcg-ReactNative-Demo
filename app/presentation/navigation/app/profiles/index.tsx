import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import ProfileScreen from "./ProfileScreen";

const ProfileStack = createStackNavigator();

function ProfileStackScreen() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Carts" component={ProfileScreen} />
            <ProfileStack.Screen name="Details" component={DetailScreen} />
        </ProfileStack.Navigator>
    );
}


export default ProfileStackScreen;