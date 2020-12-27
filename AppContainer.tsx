import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, FlatList, Image, Dimensions } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FIcon from 'react-native-vector-icons/Feather';
import {categories as mockCategories, products } from './app/data/mock';


const AppContainer = () => {

    const [categories, setCategories] = useState(mockCategories);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    function renderHeader() {

        return (
            <View style={styles.container}>
                <View>
                <TouchableOpacity>
                    <FontAwesome name="chevron-left" size={20} color="#000"/>
                </TouchableOpacity>
                </View>
                <View style={styles.shoppingIcon}>
                    <TouchableOpacity>
                    <FontAwesome name="shopping-bag" size={20} color="#000" style={{marginRight: 15}}/>

                    </TouchableOpacity>
                    <TouchableOpacity>

                    <FIcon name="menu" size={20} color="#000"/>
                    </TouchableOpacity>
  
                </View>
            </View>
        );
    }
    function renderCategories(){
        return (
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginLeft: 15}}>
                {
                    categories.map((item, idx) => {
                        return <Text key={item.id} style={[styles.categoryItem, {opacity: item == selectedCategory ? 1 : .3}]}>{item.name}</Text>
                    })
                }
    

            </ScrollView>
        );
    }
    

    function renderProducts(){
        function renderItem({item}: any){
            console.log(item)
            return (
                <View style={{ backgroundColor: '#f6f6f6', marginBottom: 15}}>
                    <View style={{ flex: 1, backgroundColor: '#fff', borderColor: '#000', borderWidth: 1, borderBottomColor: 'red'}}>

                        <View>
                            <Image source={{uri: item.image}} style={{width: 100, height: 100}}/>
                        </View>
                        <View>                        
                            <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
                        </View>
                        <View>                        
                            <Text style={{opacity: .5}}>{item.description}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 22}}>$ {item.price}</Text>
                        </View>
                        <View style={{ position: 'relative', backgroundColor: 'grey', height: 20}}>
                            <TouchableOpacity style={styles.cart}>
                                <FontAwesome name="shopping-bag" size={20} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
        return (
            <View style={{marginTop: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 15, marginRight: 15}}>
                    <View>
                        <Text>120 Products</Text>
                    </View>


                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{marginRight: 15, fontWeight: 'bold', fontSize: 18}}>Popular</Text>
                        <FontAwesome name="chevron-down" size={20} color="#000"/>
                    </View>

                </View>
                <FlatList
                    data={products}
    
                    renderItem={renderItem}
                    keyExtractor={(item) => `${item.id}` }
           
                
                />
            </View>
        );
    }


    return (
        <View style={{ backgroundColor: 'light-grey' }}>
            {
                renderHeader()
            }
            {
                renderCategories()
            }
            {
                renderProducts()
            }

            {/* renderBottom() */}

        </View>
    );
}

export default AppContainer;

const styles = StyleSheet.create({
    container: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15
    },
    shoppingIcon: {
        flexDirection: 'row'
    },
    categoryItem: {
        marginRight: 25,
        fontSize: 25,
        color: '#000',
        fontWeight: 'bold'
    },
    cart: {
        position: 'absolute',
        backgroundColor: '#e4a130',
        right: 5, 
        bottom: -10,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',

        borderRadius: 5
    }
});