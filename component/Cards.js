import React from 'react';
import sa from './sa.png'
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
export const Cards = () => {
    const users = [
        {
            name: "haha",
            avatar: sa
        }
    ]
    return <View>
        <Card>
            <Card.Title>CARD WITH DIVIDER</Card.Title>
            <Card.Divider>
                <Text>123</Text>
                <Text>123</Text>
                <Text>123</Text>
                <Text>123</Text>
            </Card.Divider>
            <Cards/>
        </Card>
    </View>

}
