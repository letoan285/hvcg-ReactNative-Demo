import React, { useEffect, useMemo, useState } from "react";
import { Button, Text, View, FlatList, Image, Platform, Dimensions, Alert  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Loading from "../../../components/loading";
import { getProducts } from '../../../redux/actions/products';

const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation, propsData, getProducts: handleGetProducts }: any) => {
    const goToDetail = () => {
        navigation.navigate('Detail');
    }

    useEffect(() => {
        handleGetProducts();        
    }, []);

    if(!propsData.data){
        return (
            <Loading />
        );
    }

  

    function renderProducts({item}: any){
        
        return (
            <View >
                <View style={{backgroundColor: 'white', marginRight: 25}}>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                    <View>
                        <Image source={{uri: `${item.thumbnail_image}`}} style={{width: width/1.5, height: 250}}/>
                    </View>
                    <TouchableOpacity onPress={() => Alert.alert('Add To Cart')} 
                    style={{backgroundColor: 'coral', paddingVertical: 5}}>
                        <Text style={{textAlign: 'center', color: 'white'}}>Add To Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View style={{paddingLeft: 15}}>
            <View>

                <View>
                    <Text>Explore</Text>
                </View>
                <View>
                    <Text>Render run</Text>
                    {/* {
                        renderProducts
                    } */}
                    <FlatList
                        renderItem={renderProducts}
                        data={propsData.data}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
            </View>
            {/* <Button title="Go To Detail" onPress={goToDetail} /> */}
        </View>
    );
}

const mapStateToProps = (state: any) => ({
    propsData: state.productsReducer.getProductsReducer
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getProducts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);