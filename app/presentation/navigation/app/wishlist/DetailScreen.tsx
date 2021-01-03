import React from "react";
import { Button, Text, View } from "react-native";

const DetailScreen = ({ navigation }: any) => {
    return (
      <View>
        <Text>Wishlist Detail Screen</Text>
        <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  }

  export default DetailScreen;