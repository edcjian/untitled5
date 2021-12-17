import React from 'react';
import {Image, Text, View} from "react-native";
import {Avatar, Icon} from "react-native-elements";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import s from './svg/s.svg'
import {row} from "./Detail";
import {ph, pw} from "../utils";

export const Comment = () => {
    const msg = [
        {name: '糖橙罐子', info: '我来组成小三'},
        {name: '下水道的鼠', info: '都是一家人捏'},
    ]
    return <View style={{
        display: 'flex',
        flexDirection: 'row',
        width: pw(100),
         height: ph(15),
        borderBottomWidth: 2
    }}>
        <Avatar source={sb} size='small'/>
        <View>
            <Text>下水道的鼠</Text>
            <Text>11-19</Text>
            <View style={row}>
                <Text>太惨了兄弟要不我假装女生跟你网恋吧</Text>
            </View>
            <View style={{backgroundColor: 'grey'}}>
                {msg.map(it => <Text>
                        {it.name}:{it.info}
                    </Text>
                )}
            </View>
        </View>
    </View>
}
