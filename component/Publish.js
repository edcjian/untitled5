import React from 'react';
import {View} from "react-native";
import {MyForm} from "./MyForm";

export const Publish = ({route: {params}}) => {
    return <View>
        <MyForm data={params?.name} click={[{
            name: '发布', event: params?.event
        }]}/>
    </View>
}
