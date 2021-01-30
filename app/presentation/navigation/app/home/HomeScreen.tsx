import React, { useEffect } from "react";
import { Button, Text, View, FlatList, Image, Platform, Dimensions, Alert  } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getProducts } from '../../../redux/actions/products';

const width = Dimensions.get('window').width;

const HomeScreen = ({ navigation, propsData }: any) => {
    const goToDetail = () => {
        navigation.navigate('Detail');
    }

    const productItems = [
        {id: 1, title: 'VELVET CHAIR 1', icon: '', src: 'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg'},
        {id: 2, title: 'VELVET CHAIR 2', icon: '', src: 'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg'},
        {id: 3, title: 'VELVET CHAIR 3', icon: '', src: 'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg'},
        {id: 4, title: 'VELVET CHAIR 4', icon: '', src: 'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg'},
        {id: 5, title: 'VELVET CHAIR 4', icon: '', src: 'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg'},
    ];
    useEffect(() => {
        console.log('propData', propsData);
    }, []);

    function renderProducts({item}: any){
        return (
            <View >
                <View style={{backgroundColor: 'white', marginRight: 25}}>
                    <View>
                        <Text>{item.title}</Text>
                    </View>
                    <View>
                        <Image source={{uri: `${item.src}`}} style={{width: width/1.5, height: 250}}/>
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
                    {/* {
                        renderProducts
                    } */}
                    <FlatList
                        renderItem={renderProducts}
                        data={productItems}
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
    propsData: state
})
const mapDispatchToProps = (dispatch: any) => bindActionCreators({
    getProducts
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);