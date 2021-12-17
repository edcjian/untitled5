import React from 'react';
import {Avatar} from "react-native-elements";

export const MyAvatar = () => {
    return <Avatar onPress={() => {
        console.log(123)
    }}/>
}
