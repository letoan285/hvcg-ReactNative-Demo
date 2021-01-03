import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Button
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './app/presentation/navigation/app/home';
import CartStackScreen from './app/presentation/navigation/app/carts';
import ProfileStackScreen from './app/presentation/navigation/app/profiles';
import SettingsStackScreen from './app/presentation/navigation/app/settings';
import WishlistStackScreen from './app/presentation/navigation/app/wishlist';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import IconFont from 'react-native-vector-icons/FontAwesome';

declare const global: { HermesInternal: null | {} };


const MainTab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();


const ProfileScreen = ({ navigation }: any) => {
  return (
      <View>
          <Text>Profile Screen</Text>
          <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
          <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
  );
}

const MainTabScreen = () => {
  return (
       <MainTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName = '';

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Carts') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Whishlist') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
        }}
      >
        <MainTab.Screen name="Home" component={HomeStackScreen} />
        <MainTab.Screen name="Carts" component={CartStackScreen} />
        <MainTab.Screen name="Whishlist" component={WishlistStackScreen} />
        <MainTab.Screen name="Profile" component={ProfileStackScreen} />
        <MainTab.Screen name="Settings" component={SettingsStackScreen} />
      </MainTab.Navigator>
  );
}


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;