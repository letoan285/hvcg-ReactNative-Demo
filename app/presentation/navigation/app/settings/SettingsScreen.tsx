import React from "react";
import { Button, Text, View } from "react-native";

const SettingsScreen = ({ navigation }: any) => {
    const goToDetail = () => {
        navigation.navigate('Detail');
    }
    return (
        <View>
            <Text>Setting Screen</Text>
            <Button title="Go To Detail" onPress={goToDetail} />
        </View>
    );
}

export default SettingsScreen;