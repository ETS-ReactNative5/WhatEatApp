import React from 'react'
import {Text, View} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ForYou from './forYou'
import YourFollow from './yourFollow';

const Tab = createMaterialTopTabNavigator();

function Home() {
    return (
        <Tab.Navigator initialRouteName="Dành cho bạn" labeled={true} barStyle={{backgroundColor: "#F2F2F2"}}>
            <Tab.Screen 
                name="Đang theo dõi"
                component={YourFollow}
            />
            <Tab.Screen 
                name="Dành cho bạn"
                component={ForYou}
            />
        </Tab.Navigator>
    );
};

export default Home;