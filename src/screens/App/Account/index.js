import React from 'react'
import {Text, View, Image,} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../Account/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

function Account() {
    return (
        <View>                          
            <View>        
                <Text style={styles.title}>Minh Hiếu</Text>
            </View>            
            <View>
                <ScrollView style={{height: 678}}>
                    <Image source={require('../../../assets/img/ava.png')} style={styles.ava}/>
                    <Text style={styles.username}>@hieutm</Text>
                    <View style={styles.container2}>
                        <View style={styles.countContain}>
                            <Text style={styles.count}>10</Text>
                            <Text>Đang theo dõi</Text>
                        </View>
                        <View style={styles.countContain}>
                            <Text style={styles.count}>10</Text>
                            <Text>Bài viết</Text>
                        </View>
                        <View style={styles.countContain}>
                            <Text style={styles.count}>10</Text>
                            <Text>Người theo dõi</Text>
                        </View>
                    </View>
                    <Text style={styles.username}>
                        Food Reviewer {'\n'}
                        #20000812 
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <Text>Chỉnh sửa trang cá nhân</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>  
        </View>
        
    );
};

export default Account;