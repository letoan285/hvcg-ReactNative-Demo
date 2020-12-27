import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

interface IHeader {
    name: string;
    changeParentName: (name: string) => void;
}

const Header:React.FC<IHeader> = ({name, changeParentName}) => {
    const newName = 'Toan Le 99';
    return (
        <View style={{height: 100, backgroundColor: 'yellow'}}>
            <Text>Header Component {name}</Text>
            <Button title="Change Name 1" onPress={() => changeParentName(newName)}/>
        </View>
    );
}

function renderHeader(text: string, callback: any){
    const newName = 'Loi Le 111';
    return (
        <View style={{height: 80, backgroundColor: 'grey'}}>
            <Text>Render Header {text}</Text>
            <Button title="Change Name 2" onPress={() => callback(newName)}/>
        </View>
    );
}

const RootContainer = () => {


    const [name, setName] = useState('Tuong Le');
    const changeName = (name: string) => {
        setName(name);
    }

    const callBack = (name: string) => {
        setName(name);
    }


    return (
        <View style={{backgroundColor: 'blue'}}>
            {
                renderHeader(name, callBack)
            }
            <Header name={name} changeParentName={changeName}/>
            {/* <Button title="Change Name From Parent" onPress={() => changeName()}/> */}

            {/* <View style={{backgroundColor: 'coral', width: '20%', height: 80}}>
                <Text>Box 1</Text>
            </View>
            <View style={{backgroundColor: 'yellow', width: '20%', height: 80}}>
                <Text>Box 2</Text>
            </View>
            <View style={{backgroundColor: 'red', width: '20%', height: 80}}>
                <Text>Box 3</Text>
            </View> */}
        </View>
    );
}

export default RootContainer;