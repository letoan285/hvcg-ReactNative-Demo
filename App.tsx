import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

declare const global: {HermesInternal: null | {}};

const HomeScreen = ({navigation}: any) => {
  const goToDetail = () => {
    navigation.navigate('Detail');
  }
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Go To Detail" onPress={goToDetail}/>
    </View>
  );
}

const DetailScreen = ({navigation}: any) => {
  return (
    <View>
      <Text>Detail Screen</Text>
      <Button title="Go Home" onPress={() => navigation.navigate('Home')}/>
      <Button title="Go Back" onPress={() => navigation.goBack()}/>
    </View>
  );
}



const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
