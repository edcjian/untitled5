import React, {useState} from 'react';
import {Button, Image, Text, View} from "react-native";
import {Avatar} from "react-native-elements"
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {pws, pw, phs, ph} from "../utils";
import {row} from "./Detail";
import {MyTabs} from "./MyTabs";
import {VideoList} from "./VideoList";
import request from "../request";
import {useRequest} from "ahooks";
import {Major} from "./Major";
import {Dynamic} from "./Dynamic";

export const UserDetail = ({route: {params}}) => {
    console.warn(params)
    const [state, setState] = useState('哈哈');
    const info = [
        {title: '主页', component: <Major/>},
        {title: '动态', component: <Dynamic/>},
        {title: '投稿', component: <VideoList id={params.id}/>}
    ]
    return <View>
        <Image source={sb} style={{height: phs(6), width: pws(1)}}/>
        <View style={{height: phs(6)}}>
            <View style={row}>
                <Avatar size='medium' source={sb}/>
                <View style={{width: pw(80)}}>
                    <View style={row}>
                        <Text>{params?.fans}{state}</Text><Text>{params?.collect}关注</Text><Text>{params?.recommend}获赞</Text>
                    </View>
                    <Button title='已关注'/>
                </View>
            </View>
        </View>
        <Text>是水良不是奶良{params?.grade}</Text>
        <Text>{params?.intro ?? '个人势力科学虚拟主播'}</Text>
        <MyTabs data={info} position={{width:pw(100),height:ph(40)}}/>
    </View>
}
