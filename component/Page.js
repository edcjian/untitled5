import React, {useState} from "react";
import {Alert, Button, Linking, Platform, Text, TextInput, View} from "react-native";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-android";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import request from "../request";
import axios from "axios";
export async function handleAddPicCheck() {
    // console.warn('添加图片------check')

    const options = {
        title: '选择图片',
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '拍照',
        chooseFromLibraryButtonTitle: '相册',
        cameraType: 'back',
        mediaType: 'photo',
        videoQuality: 'high',
        durationLimit: 10,
        maxWidth: 720,
        maxHeight: 1280,
        aspectX: 2,
        aspectY: 1,
        quality: 1,
        angle: 0,
        allowsEditing: false,
        noData: false,
        storageOptions: {
            skipBackup: true,
            path: 'PickLocalImg' // 存储本地地址
        }
    };
    let e = await launchImageLibrary(options);
    let file = e?.assets?.[0].uri;
    let param = new FormData();
    param.append('file', file, e?.assets?.[0].fileName);
    setParams(param)

}

async function upload(e) {


    console.log(123)
}

export const Page = props => {
    const {navigation} = props;
    const [text, setText] = useState("hello");
    const [data, setData] = useState("input");
    const [params, setParams] = useState();
    const click = e => {
        console.log(e);
        alert(e);
    };


    return <View>

        <Text>
            {data}
        </Text>
        <TextInput defaultValue={data} onChangeText={setText}/>
        <Button title={"查看"} onPress={async () => {
            navigation.push("home");
        }}/>
        <Button title={"添加"} onPress={async () => {
            navigation.push("add");
        }}/>
        <Button title={"搜索"} onPress={async () => {
            navigation.push("search", text);
        }}/>
        <Button title={"选择"} onPress={() => {
            handleAddPicCheck().then(r => console.log(r))
        }}/>
        <Button title={"上传"} onPress={async () => {
            let res = await request.get('list');
            console.log(res)

        }}/>
    </View>;
}
