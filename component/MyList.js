import React from 'react';
import {Dimensions, View} from "react-native";
import {Window} from "./Window";
import {column, row} from "./Detail";
import {useNavigation} from "@react-navigation/native";
import {gen, ph, pw} from "../utils";

export const MyList = ({data, i}) => {
    const deviceWidthDp = Dimensions.get('window').width;
    return <View style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }}>
        {data?.data?.map(l => <Window data={l}  myStyle={{
            borderWidth: 2,
            width: pw(50),
            height: ph(20),
            ...column
        }}/>)}
    </View>
}
