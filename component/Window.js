import React from 'react';
import {Button, Image, Text, View} from "react-native";
import {row} from "./Detail";
import {ph, pw} from "../utils";
import {useNavigation} from "@react-navigation/native";

export const Window = ({data, event, myStyle}) => {
    const nav = useNavigation();
    return <View style={myStyle}>
        <Image source={{uri: data?.cover}} style={{height: ph(10), width: pw(50)}}/>
        <View>
            <Text onPress={() => nav.navigate('video',data)}>{data?.title}</Text>
            <View style={row}>
                <Text>{data?.comment}</Text>
                <Button
                    title=">"
                    type="outline"
                />
            </View>
        </View>

    </View>
}
