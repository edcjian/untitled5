import React, {useEffect} from 'react';
import {useRequest} from "ahooks";
import {fetch} from "./utils";
import {Text, View} from "react-native";
import request from "../request";

export const Search = ({navigation, route}) => {
    const {data, error} = useRequest(() => request.get(`search?word=${route.params}`))
    return error ? <View>
        <Text>error</Text>
    </View> : <View>
        <Text>{data?.data?.name}</Text>
        <Text>{data?.data?.avatarUrl}</Text>
        <Text>{data?.data?.subtitle}</Text>
    </View>
}
