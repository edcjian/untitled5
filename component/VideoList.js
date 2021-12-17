import React from 'react';
import {ph, pw} from "../utils";
import {row} from "./Detail";
import {Window} from "./Window";
import {useRequest} from "ahooks";
import request from "../request";
import {View} from "react-native";
export const VideoList =({id})=>{
    const {data, error, loading} = useRequest(() => request.get(`getVideoList?id=${id}`));
    return <View>
        {data?.data?.map(it=><Window data={it} myStyle={{
        borderWidth: 2,
        width: pw(100),
        height: ph(15),
        ...row
    }}/>)}
    </View>
}
