import React, {useState} from 'react';
import {Tab, Text} from 'react-native-elements';

export const FooterTab = ({data}) => {
    const [index, setIndex] = useState();
    return <Tab value={index} onChange={setIndex}>
        {data?.map((item) => <Tab.Item title={item} active={true}>
            <Text>{item}</Text>
            {/*<Home/>*/}
        </Tab.Item>)
        }
    </Tab>

}
