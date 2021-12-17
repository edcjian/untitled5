import React from 'react';
import {Image, Text, View} from "react-native";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {gen, ph, phs, pw, pws} from "../utils";
import {row} from "./Detail";

export const Major = () => {
    return <View style={{height:ph(40)}}>
        <Text>视频</Text>
        <View style={{...row, flexWrap: 'wrap'}}>
            {gen(4).map(it =>
                <View style={{height: ph(25), width: pw(45), borderBottomWidth: 2}}>
                    <Image source={sb} style={{height: ph(20), width: pw(40)}}/>
                    <Text>{'听君一席话，全是废话'}</Text>
                </View>)}
        </View>
    < /View>
}
