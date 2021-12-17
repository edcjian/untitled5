import React, {useState} from 'react';
import {Button, Text, TextInput, View} from "react-native";
import {useRequest} from "ahooks";
import request from "../request";
import {MyForm} from "./MyForm";

export const Add = () => {
    const  data=["name","avatarUrl","subtitle"]
    const [text, setText] = useState("hello");
    return <View>
<MyForm data={data}/>
    </View>
}
