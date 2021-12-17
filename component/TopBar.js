import React, {useState} from 'react';
import {View} from "react-native";
import {Avatar} from "react-native-elements";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-android";
import {useNavigation} from "@react-navigation/native";

export const TopBar = () => {
    let {navigate} = useNavigation();
    const [text, setText] = useState("hello");
    return <View class='header' style={{display: 'flex', flexDirection: 'row'}}>
        <Avatar rounded onPress={()=>navigate('detail')} source={{uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}/>
        <SearchBar
            placeholder="Type Here..."
            onChangeText={setText}
            value={text}
        />

    </View>
}
