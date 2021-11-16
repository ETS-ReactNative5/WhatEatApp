import React, { useState } from 'react'
import {Text, View, Image, Button} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../Account/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Place from './place';
import Post from './post';
import Store from './store';

function Account() { 
    const [state, setState] = useState({
        activeIndex: 1,
    });  
    
    const selectTab = ( index ) => {
        setState({
            activeIndex: index,
        })
    }
    
    const renderTabContent = () => {
        if( state.activeIndex == 1 ) {
            return(
                <View style={{marginTop: 10, alignItems: 'center'}}>
                    <Post/>
                </View>
            )
        }
        else if( state.activeIndex == 2 ) {
            return(
                <View style={{marginTop: 10, alignItems: 'center'}}>
                    <Place/>
                </View>
            )
        }
        else if( state.activeIndex == 3 ) {
            return(
                <View style={{marginTop: 10, alignItems: 'center'}}>
                    <Store/>
                </View>
            )
        }
    }

    return (
        <View>                          
            <View>        
                <Text style={styles.title}>Minh Hiếu</Text>
            </View>
            <ScrollView style={{marginBottom: 40}}>
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
                    <View style={{marginTop: 20}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                            <TouchableOpacity
                                onPress={() => selectTab(1)} 
                                style={[state.activeIndex == 1 ? { borderBottomWidth: 2, borderBottomColor: 'black', alignItems: 'center', width: 40} : { borderBottomWidth: 0, alignItems: 'center'}]}
                            >
                                <Feather 
                                    name="grid" 
                                    size={32} 
                                    style={[state.activeIndex == 1 ? styles.buttonTabActive : styles.buttonTabInActive]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => selectTab(2)} 
                                style={[state.activeIndex == 2 ? { borderBottomWidth: 2, borderBottomColor: 'black', alignItems: 'center', width: 40} : { borderBottomWidth: 0, alignItems: 'center'}]}
                            >
                                <Feather 
                                    name="map" 
                                    size={32} 
                                    style={[state.activeIndex == 2 ? styles.buttonTabActive : styles.buttonTabInActive]}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => selectTab(3)} 
                                style={[state.activeIndex == 3 ? { borderBottomWidth: 2, borderBottomColor: 'black', alignItems: 'center', width: 40} : { borderBottomWidth: 0, alignItems: 'center'}]}
                            >
                                <Feather 
                                    name="bookmark" 
                                    size={32} 
                                    style={[state.activeIndex == 3 ? styles.buttonTabActive : styles.buttonTabInActive]}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {renderTabContent()}
                </ScrollView>
        </View>
        
    );
};

export default Account;