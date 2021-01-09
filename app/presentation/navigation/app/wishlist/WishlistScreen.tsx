import React from "react";
import { Button, Text, View } from "react-native";

const WishlistScreen = ({ navigation }: any) => {
    return (
        <View>
            <Text>Wishlist Screen</Text>
            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
            <Button title="Go Back" onPress={() => navigation.goBack()} />
        </View>
    );
}

export default WishlistScreen;