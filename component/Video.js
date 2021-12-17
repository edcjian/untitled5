import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";
import {Avatar, Button} from "react-native-elements";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {gen, ph, pw} from "../utils";
import {row} from "./Detail";
import {Window} from "./Window";
import {Comments} from "./Comments";
import {MyTabs} from "./MyTabs";
import {useNavigation} from "@react-navigation/native";

export const Intro = ({data}) => {
    const nav = useNavigation();
    const tags = ['游戏王', '卡牌游戏', '桌面棋牌']
    const sty = StyleSheet.create({
        h1: {},
        h2: row,
        h3: row
    })
    let user = data?.users;
console.warn(user)
    return <View style={{height:ph(40)}}>
        <View style={row}>
            <Avatar size='small' source={user?.avatar ?? sb} onPress={() => nav.navigate('userDetail',user)}/>
            <View>
                <Text>{user?.name ?? "no"}</Text>
                <Text>{user?.fans} {user?.videoNum}</Text>
            </View>
            <Button title='关注'/>
        </View>
        <Text>{data?.intro}</Text>
        <View style={row}>

        </View>
        <View style={sty.h3}>
            <Text>{data?.play} {data?.comment} {data?.time} {data?.id}</Text>
        </View>
        <View style={row}>
            <Button title={data.recommend} type='clear'/>
            <Button title='不喜欢' type='clear' onPress={() => console.log('stub')}/>
            <Button title={data.collect} type='clear'/>
            <Button title={data.share} type='clear'/>
        </View>
        <View style={row}>
            {data?.tag?.split(',')?.map(it => <Button type='outline' title={it}/>)}
        </View>
        <View>
            {gen(3).map(it => <Window myStyle={{
                borderWidth: 2,
                width: pw(100),
                height: ph(15),
                ...row
            }}/>)}
        </View>
    </View>
}
export const Video = ({route: {params}}) => {
    const info = [
        {title: '简介', component: <Intro data={params}/>},
        {title: '评论', component: <Comments/>}
    ]
    const [state, setState] = useState(false);
    const {index, setIndex} = useState(1);
    const nav = useNavigation();
    return <View>
        <Image source={{uri:params?.cover ?? sb}} style={{width: pw(100), height: ph(30)}}/>
        <MyTabs data={info} position={{width:pw(100),height:ph(40)}}/>
    </View>


}
