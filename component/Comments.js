import React, {useState} from 'react';
import {Text, View} from "react-native";
import {row} from "./Detail";
import {Button} from "react-native-elements";
import {gen, ph, pw} from "../utils";
import {Comment} from "./Comment";
export const Comments =()=>{
    const [state, setState] = useState(true);
    return <View style={{width:pw(100),height:ph(40)}}>
        <View style={row}>
            <Text>热门评论</Text>
            <Button type='clear' title={state?'按热度':'按时间'} onPress={()=>setState(!state)}/>
        </View>
        {gen(3).map(it=><Comment/>)}
    </View>
}
