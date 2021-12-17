import React, {useState} from 'react';
import {Alert, Button, Image, Text, View} from "react-native";
import {row} from "./Detail";
import {Divider} from "react-native-elements";
import {ph, phs, pw, pws} from "../utils";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {MyForm} from "./MyForm";
import request from "../request";
import {useNavigation} from "@react-navigation/native";
import {isDisabled} from "react-native/Libraries/LogBox/Data/LogBoxData";
import DeviceStorage from "./DeviceStorage";

export const Login = ({children, event}) => {
    const [isDisabled, setIsDisabled] = useState(false);
    const info = [
        {
            name: '注册', event: async (e) => {
                const res = await request.post('register', e);
                if (res.data.statusCode === '200') {
                    setIsDisabled(!isDisabled)
                }
                Alert.alert(res.data.data)
            }, disable: isDisabled
        },
        {
            name: '登录', event: async (e) => {

                const res = await request.post('login', e);
                if (res.data.statusCode === '200') {
                    const d = res?.data?.data;
                    await  DeviceStorage.save("tel",d);
                    event(d)
                    // nav.navigate('home',res?.data)
                }

            }
        }
    ]
    return <View>
        <View style={{...row, height: ph(8)}}>
            <Text>密码登录</Text>
            <Text>短信登录</Text>
        </View>
        <Divider/>
        <Image source={sb} style={{height: ph(10), width: pw(100)}}/>
        <MyForm data={['name', 'password']} click={info}/>

    </View>
}


