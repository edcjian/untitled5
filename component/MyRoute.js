import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {Page} from "./Page";
import {Home} from "./Home";
import {Cards} from "./Cards";
import {FooterTab} from "./FooterTab";
import {Add} from "./Add";
import {Search} from "./Search";
import {Detail, p} from "./Detail";
import {Videos} from "./Videos";
import {Video} from "./Video";
import { MyTabs} from "./MyTabs";
import {Creation} from "./Creation";
import * as st from '../utils'
import {MyForm} from "./MyForm";
import {UserDetail} from "./UserDetail";
import {Comments} from "./Comments";
import {Login} from "./Login";
import {Publish} from "./Publish";

const Stack = createNativeStackNavigator();

export const MyRoute = ({children}) => {

    return <NavigationContainer>
        <Stack.Navigator>
            {/*<Stack.Screen name={"login"} component={Login}/>*/}
            <Stack.Screen name={"home"} component={Home}/>
            <Stack.Screen name={"footerTab"} component={FooterTab}/>
            <Stack.Screen name={"ca"} component={Cards}/>
            <Stack.Screen name={"userDetail"} component={UserDetail}/>
            <Stack.Screen name={"add"} component={Add}/>
            <Stack.Screen name={"search"} component={Search}/>
            <Stack.Screen name={"detail"} component={Detail}/>
            <Stack.Screen name={"video"} component={Video}/>
            <Stack.Screen name={"creation"} component={Creation}/>
            <Stack.Screen name={"myform"} component={MyForm}/>
            <Stack.Screen name={"publish"} component={Publish}/>

        </Stack.Navigator>
    </NavigationContainer>;


};
