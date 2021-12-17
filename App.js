import * as React from 'react';
import {createContext, useEffect, useState} from 'react';
import {MyRoute} from "./component/MyRoute";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {ThemeProvider} from 'react-native-elements';
import {Login} from "./component/Login";
import DeviceStorage from "./component/DeviceStorage";

export const MyContext = createContext(123);

function LoginProvider({children}) {
    const [state, setState] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const res = await DeviceStorage.get('tel');
            console.log('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy')
            console.log(res)
            setState(res)
        }
        fetchData()
    }, []);
    return state !== null ?
        <MyContext.Provider value={state}>
            {children}
        </MyContext.Provider>
        : <Login event={setState}/>
}

export default function App() {
    return <SafeAreaProvider>
        <ThemeProvider>
            <LoginProvider>
                <MyRoute/>
            </LoginProvider>
        </ThemeProvider>
    </SafeAreaProvider>
}
