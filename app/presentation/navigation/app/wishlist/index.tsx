import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import WishlistScreen from "./WishlistScreen";

const WishlistStack = createStackNavigator();

function WishlistStackScreen() {
    return (
        <WishlistStack.Navigator>
            <WishlistStack.Screen name="Carts" component={WishlistScreen} />
            <WishlistStack.Screen name="Details" component={DetailScreen} />
        </WishlistStack.Navigator>
    );
}


export default WishlistStackScreen;