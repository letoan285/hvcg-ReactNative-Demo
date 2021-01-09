import { Image, View, Text, StyleSheet } from "react-native";
import React from 'react';
import {
    Avatar,
    Title,
    Drawer,
    Caption,

} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";

const DrawerContent = (props: any) => {
    console.log(props);
    
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={{paddingLeft: 10, paddingTop: 10}}>
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarImage}>
                            <Avatar.Image size={50} source={{
                                uri: 'https://www.seekpng.com/png/detail/73-730482_existing-user-default-avatar.png'
                            }} />
                        </View>
                        <View>

                            <Text style={styles.avatarText}>Le Toan</Text>
                            <Text>letoan285@gmail.com</Text>

                        </View>


                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                            <Text style={styles.textSidebar}>Home</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
                            <Text style={styles.textSidebar}>Profile</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={() => console.log('go')}>
                            <Text style={styles.textSidebar}>Users</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{marginTop: 20}}>
                        <TouchableOpacity onPress={() => console.log('go')}>
                            <Text style={styles.textSidebar}>Wishlist</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section>
                <DrawerItem label="Logout" onPress={() => console.log('Logout')} icon={() => (<Ionicon name="exit-outline" size={20}/>)}/>
            </Drawer.Section>

        </View>
    );
}

export default DrawerContent;

const styles = StyleSheet.create({
    avatarContainer: {
        flexDirection: 'row',
        alignItems: 'center'
        
    },
    avatarImage: {
        marginRight: 10
    },
    avatarText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    textSidebar: {
        fontSize: 18
    }
});