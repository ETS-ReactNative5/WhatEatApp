import React from 'react';
import FeatherIcon from 'feather-icons-react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home} from '../screens';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;

                    if(route.name === 'Trang Chủ'){
                        iconName = focused ? 'home' : 'home';
                    } 
                    return <FeatherIcon name={iconName} size={size} color={color} />;
                },
                headerShown: false,
            })}
            tabBarOption={{
                tabBarActiveTintColor: '#00B060',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle: [
                    {
                      display: 'flex',
                    },
                    null,
                ],
            }}
        >
            <Tab.Screen name='Trang Chủ' component={Home} />
        </Tab.Navigator>
    )
};

export default Tabs;