import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeStackScreen from './app/presentation/navigation/app/home';
import CartStackScreen from './app/presentation/navigation/app/carts';
import ProfileStackScreen from './app/presentation/navigation/app/profiles';
import SettingsStackScreen from './app/presentation/navigation/app/settings';
import WishlistStackScreen from './app/presentation/navigation/app/wishlist';
import DrawerContent from './app/presentation/navigation/drawer/DrawerContent';
import Loading from './app/presentation/components/loading';
// import IconFont from 'react-native-vector-icons/FontAwesome';
import { initApplication } from './app/presentation/redux/actions/general/appInitiation'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

declare const global: { HermesInternal: null | {} };


const MainTab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();


const ProfileScreen = ({ navigation }: any) => {
  return (
      <View>
          <Text>Profile Screen</Text>
          <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
          {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
      </View>
  );
}


const Login = ({navigation}: any) => {
    return (
        <View>
        <Text>Login Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        {/* <Button title="Go Back" onPress={() => navigation.goBack()} /> */}
    </View>
    );
}

const Signup = ({navigation}: any) => {
    return (
        <View>
        <Text>Signup Screen</Text>
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


const AppContainer = ({initApplication: handleInitApplication}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    handleInitApplication();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
    return () => {
    };
  }, []);
  if(isLoading){
    return <Loading />
  }
  return (
    <NavigationContainer>
        
      <Drawer.Navigator initialRouteName="Home" drawerContent={(props: any) => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      </Drawer.Navigator>
      {/* <AuthStack.Navigator initialRouteName="Signup">
          <AuthStack.Screen name="Login" component={Login}/>
          <AuthStack.Screen name="Signup" component={Signup}/>
      </AuthStack.Navigator> */}
    </NavigationContainer>
  );
}

const mapStateToProps = (state: any) => ({
  propsData: state
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
  initApplication
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);