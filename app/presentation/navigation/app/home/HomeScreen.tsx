import React from "react";
import { Button, Text, View } from "react-native";

const HomeScreen = ({ navigation }: any) => {
    const goToDetail = () => {
        navigation.navigate('Detail');
    }
    return (
        <View>
            <Text>Home Screen !!</Text>
            <Button title="Go To Detail" onPress={goToDetail} />
        </View>
    );
}

export default HomeScreen;