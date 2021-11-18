import React, { useState } from 'react'
import {Text, View, Image, Button, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../Account/style'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import Modal from "react-native-modal";

import Place from './place';
import Post from './post';
import Store from './store';

function Account() { 
    const navigation = useNavigation();

    const [isModalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

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
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>        
                <Text style={styles.title}>Minh Hiếu</Text>
            </View>
            <TouchableOpacity style={{marginTop: -23, marginLeft: 370}} onPress={toggleModal}>
                <Feather name="menu" size={24}/>
            </TouchableOpacity>
            <ScrollView style={{marginBottom: 45}}>
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
                <Modal isVisible={isModalVisible} animationIn='slideInUp' animationInTiming={500} style={{marginTop: 450}}>
                    <View style={{ backgroundColor: 'white', width: 410, borderRadius: 8, height: 360, marginLeft: -20, paddingHorizontal: 20}}>
                        <TouchableOpacity onPress={toggleModal} style={{padding: 10, borderRadius: 8, marginLeft: 325, marginTop: 5}}>
                            <Feather name="x" size={28}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomWidth: 0.5, borderBottomColor: 'grey', flexDirection: 'row', paddingVertical: 10}}>
                            <Feather name="settings" size={32}/>
                            <Text style={{marginTop: 6, marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>Cài đặt</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{borderBottomWidth: 0.5, borderBottomColor: 'grey', flexDirection: 'row', paddingVertical: 10}}>
                            <Feather name="key" size={32}/>
                            <Text style={{marginTop: 6, marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('AuthStack')} style={{borderBottomWidth: 0.5, borderBottomColor: 'grey', flexDirection: 'row', paddingVertical: 10}}>
                            <Feather name="log-out" size={32}/>
                            <Text style={{marginTop: 6, marginLeft: 15, fontSize: 16, fontWeight: 'bold'}}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
        </View>
        
    );
};

export default Account;