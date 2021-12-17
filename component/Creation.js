import React, {useContext, useState} from 'react';
import {Text, View} from "react-native";
import {Avatar, Button} from "react-native-elements";
import sb from './pic/8f5f91547d684c7bcad9a171ce8775f.jpg'
import {row} from "./Detail";
import {gen, phs, pws} from "../utils";
import {launchImageLibrary} from "react-native-image-picker";
import axios from "axios";
import {useNavigation} from "@react-navigation/native";
import request from "../request";
import {MyContext} from "../App";

export const Creation = () => {
    const state = useContext(MyContext);
    const form = ['title', 'partition', 'types', 'tag', 'dynamic', 'location']
    const data = {name: 'VmProtect', fans: 5}
    const [file, setFile] = useState();
    const nav = useNavigation();
    const options = {
        title: '选择视频',
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '录制视频',
        chooseFromLibraryButtonTitle: '选择视频',
        mediaType: 'video',
        videoQuality: 'medium'
    };
    const op = {
        title: '选择图片',
        cancelButtonTitle: '取消',
        takePhotoButtonTitle: '拍照',
        chooseFromLibraryButtonTitle: '相册',
        mediaType: 'photo'
    }

    async function fileUpload(f, e) {
        let files = f["assets"][0]
        let data = new FormData();
        data.append('file', {
            uri: files.uri,
            type: files.type,
            name: files.fileName
        });
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        let res = await axios.post(
            'http://192.168.1.191:8080/test/upload', data, config)
        console.log(res.data.data)
        let a = {...e, cover: res.data.data,upId:state.id}
        console.warn(a)
        let r = await request.post('/info', a);
        console.log(r)

    }

    return <View>
        <View style={row}>

            <Avatar source={sb} size='small'/>
            <View>
                <Text>{data.name}</Text>
                <Text>{data.fans}粉丝</Text>
            </View>
            <Button title='选择' onPress={async () => {
                let res = await launchImageLibrary(op)
                setFile(res)
            }
            } color='pink'/>
            <Button title='上传' onPress={async () => {
                nav.navigate('publish', {
                    name: form,
                    event: (e) => {
                        console.log(e)
                        fileUpload(file, e)
                    }
                })
            }
            } color='pink'/>
        </View>
        <View style={{
            ...row, flexWrap: 'wrap', height: phs(5), borderBottomWidth: 2
        }}>
            {gen(8).map(it => <Button title='粉丝数5' type='outline' buttonStyle={{width: pws(4)}}/>)}
        </View>
        <Text>数据中心</Text>
        <View style={{...row, flexWrap: 'wrap', height: phs(5), borderBottomWidth: 2}}>
            {gen(6).map(it => <Button title='粉丝数5' type='clear' buttonStyle={{width: pws(3)}}/>)}
        </View>

    </View>
}
