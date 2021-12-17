import React, {useState} from 'react';
import {Image, Text, View} from "react-native";
import {Tab, TabView} from "react-native-elements";
import {ph, pw} from "../utils";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {Comment} from "./Comment";
import {Comments} from "./Comments";
import {Intro} from "./Video";

export function MyTabs({data, position}) {
    const [index, setIndex] = useState(0);
    return (
        <View>
            <Tab value={index} onChange={setIndex}>
                {data.map(it => <Tab.Item title={it.title}/>)}
            </Tab>
            <TabView value={index} onChange={setIndex} style={position}>
                {
                    data.map(it => <TabView.Item>
                            {it.component}
                        </TabView.Item>
                    )
                }
            </TabView>
        </View>
    );
}
