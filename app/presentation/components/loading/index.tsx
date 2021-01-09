import React from "react"
import { ActivityIndicator, View } from "react-native"
import { color } from "react-native-reanimated";

const Loading = ({size = 'large', color = '#00ff00'}: any) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size={size} color={color} />
        </View>
    );
}

export default Loading;