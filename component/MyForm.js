import React from "react";
import {useController, useForm} from "react-hook-form";
import {Button, Text, TextInput, View} from "react-native";
import {row} from "./Detail";

function MyInput({name, control}) {
    const {field} = useController({
        control, defaultValue: '', name,
    })
    return <TextInput
        value={field.value}
        onChangeText={field.onChange}/>
}

export function MyForm({data,click}) {
    console.warn(click)
    const {control, handleSubmit} = useForm();
    return <View>
        {
            data?.map(item => (<View>
                    <Text> {item}</Text>
                    <MyInput control={control} name={item}/>
                </View>
            ))
        }
        <View style={row}>
            {click?.map(({name, event, disable}) => <Button title={name} onPress={handleSubmit(event)}
                                                           disabled={disable ?? false}/>)}
        </View>
    </View>
}

