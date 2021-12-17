import React from 'react';
import {Button, Image, Text, View} from "react-native";
import {row} from "./Detail";
import {Avatar} from "react-native-elements";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {ph, phs, pw, pws} from "../utils";

export const Dynamic = () => {
    return <View style={{height: ph(40)}}>
        <View style={{height:ph(20),borderBottomWidth:2}}>
            <View>
                <Avatar source={sb} size='small' avatarStyle={{borderRadius: 25}}/>

                <Text>{'hello'}</Text>
                <Text>12-08 投稿了视频</Text>

            </View>
            {/*<Image source={sb} style={{height:ph(10),width:pw(60)}}/>*/}
            <Text>{'一个线性规划的可行域作为未知几何体'}</Text>
            <View style={row}>
                <Button title={'3'}/>
                <Button title={'107'}/>
                <Button title={'574'}/>
            </View>
        </View>
    </View>
}
