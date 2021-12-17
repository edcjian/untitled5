import React, {useContext} from 'react';
import {Alert, Modal, StyleSheet, Text, View} from "react-native";
import {Avatar, Button, Divider, Icon} from "react-native-elements";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {Link, useNavigation} from "@react-navigation/native";
import DeviceStorage from "./DeviceStorage";
import {MyContext} from "../App";

export const s = [
    {title: '离线缓存', location: 'storage'},
    {title: '历史记录', location: 'history'},
    {title: '我的收藏', location: 'collect'},
    {title: '稍后再看', location: 'later'}
]
export const p = [
    {title: '创作中心', location: 'creation'},
    {title: 'up推荐', location: 'recommend'},
    {title: '限时福利', location: 'limited'},
    {title: '有奖活动', location: 'activity'}
]
export const k = [
    {title: '我的课程', location: 'creation'},
    {title: '免流量服务', location: 'courses'},
    {title: '个性装扮', location: 'dress'},
    {title: '我的钱包', location: 'purse'},
    {title: '会员购服务', location: 'member'},
    {title: '直播中心', location: 'live'},
    {
        title: '退出登录', location: 'logout', event: async () => {
            console.log('del')
            const res = await DeviceStorage.delete('tel');
            console.log(res)
        }
    },
]
export const row = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
}
export const column = {
    display: 'flex',
    justifyContent: 'space-around',

}
export const Detail = () => {
    const state = useContext(MyContext);
    console.warn(state)
    let nav = useNavigation();
    const sty = StyleSheet.create({
        head: {
            backgroundColor: 'purple',
            h1: {},
            h2: row,
            h3: row
        },
        middle: {
            h1: row,
            h2: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',

            },
            h3: {
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
            },
            h4: {
                ...column
            }
        }
    })
    const icon = <Icon
        name="arrow-right"
        color="white"
    />
    const Sub = ({data, title, myStyle}) => <View>
        {title && <Text>{title}</Text>}
        <View style={myStyle}>
            {data.map(it => <Button type={"outline"} icon={icon} title={it.title}
                                    onPress={
                                        async () => {
                                            if (it.events !== undefined) {
                                                await Alert.alert('sure delete?')
                                                it.events()
                                            } else nav.navigate(it.location)
                                        }}/>)}
        </View>
    </View>

    return <View>
        <View style={sty.head}>
            <View style={sty.head.h2}>
                <Avatar size={"small"} rounded source={sb}/>
                <View style={{}}>
                    <Text>{state?.name}</Text>
                    <Text>正式会员</Text>
                    <Text>B币:0.0</Text>
                </View>
                <Button type={"clear"} title={'空间'}/>
            </View>
            <View style={sty.head.h3}>
                <Button type={"clear"} title={12 + '\n动态'}/>
                <Button type={"clear"} title={state?.focus + '\n关注'}/>
                <Button type={"clear"} title={state?.fans + '\n粉丝'}/>
            </View>
        </View>
        <View style={sty.middle}>
            <Sub data={s} myStyle={sty.middle.h1}/>
            <Sub data={p} title='创作中心' myStyle={sty.middle.h2}/>
            <Sub data={k} title='推荐服务' myStyle={sty.middle.h3}/>
            <Sub data={k} title='更多服务'/>
        </View>
    </View>
}
