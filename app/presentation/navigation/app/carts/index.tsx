import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailScreen from "./DetailScreen";
import CartScreen from "./CartScreen";

const CartStack = createStackNavigator();
function CartStackScreen() {
    return (
      <CartStack.Navigator>
        <CartStack.Screen name="Carts" component={CartScreen} />
        <CartStack.Screen name="Details" component={DetailScreen} />
      </CartStack.Navigator>
    );
  }

  export default CartStackScreen;