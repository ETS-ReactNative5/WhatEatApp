import React from 'react';
import {Home, Map, Add, Notify, Account} from "../screens"
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createMaterialBottomTabNavigator();

const customTabBarStyle = {
    activeTintColor: '#00B060',
    inactiveTintColor: 'grey',
    style: {backgroundColor: 'white' },
}

const appStack = () => {
    return(
        <Tab.Navigator initialRouteName="Home" labeled={true} barStyle={{backgroundColor: "#ffffff"}}>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        <Feather name='home' color={'#00b060'} size={26} />
                    }
                }}
            />
            <Tab.Screen 
                name="Map"
                component={Map}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        <Feather name='map' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Add"
                component={Add}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        <Feather name='plus-circle' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Noti"
                component={Notify}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        <Feather name='bell' color={color} size={size} />
                    }
                }}
            />
            <Tab.Screen 
                name="Account"
                component={Account}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => {
                        <Feather name='user' color={color} size={size} />
                    }
                }}
            />
        </Tab.Navigator>
    )
};

export default appStack;