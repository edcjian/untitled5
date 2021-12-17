import {View} from "react-native";
import React from "react";
import {MyList} from "./MyList";
import request from "../request";
import {useRequest} from "ahooks";
import {FooterTab} from "./FooterTab";
import {TopBar} from "./TopBar";

export const Home = ({route:{params}}) => {
    const menu = ["直播", "推荐", "热门", "追番"]

    const {data, error, loading} = useRequest(() => request.get('list'));
    return  <View>
        <TopBar/>
        <FooterTab data={menu}/>
        <MyList data={data?.data}/>
    </View>;
};

