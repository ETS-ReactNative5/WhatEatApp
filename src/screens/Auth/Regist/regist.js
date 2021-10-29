import React from 'react'
import {Text, View, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { styles } from '../Regist/style';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

function Regist({navigation}) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/img/logo.png')}
                />
                <Text style={styles.title}>Đăng Ký</Text>
                <View style={{flexDirection: 'column', alignContent: 'center', marginHorizontal: 30, marginBottom: 10}}>
                    
                    <Text style={{marginBottom: 5, marginTop: 10, marginLeft: 5}}>
                        Họ và tên
                    </Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder="Họ và tên"
                        />
                    </View>
                    
                    <Text style={{marginBottom: 5, marginTop: 10, marginLeft: 5}}>
                        Email
                    </Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder="Email"
                        />
                    </View>

                    <Text style={{marginBottom: 5, marginTop: 10, marginLeft: 5}}>
                        Tên tài khoản
                    </Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder="Tên tài khoản"
                        />
                    </View>

                    <Text style={{marginBottom: 5, marginTop: 10, marginLeft: 5}}>
                        Mật khẩu
                    </Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder="Mật khẩu"
                            secureTextEntry={true}
                        />
                        <FontAwesome5Icon name='eye-slash' size={14} style={{marginTop: 17, marginLeft: 220}}/>
                    </View>

                    <Text style={{marginBottom: 5, marginTop: 10, marginLeft: 5}}>
                        Nhập lại mật khẩu
                    </Text>
                    <View style={styles.textInput}>
                        <TextInput
                            placeholder="Nhập lại mật khẩu"
                            secureTextEntry={true}
                        />
                        <FontAwesome5Icon name='eye-slash' size={14} style={{marginTop: 17, marginLeft: 145}}/>
                    </View>
                    
                    <Text style={{color: '#00B060', marginBottom: 25, marginTop: 10, marginLeft: 5}}>
                        Quên mật khẩu?
                    </Text>

                    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                        <TouchableOpacity style={styles.buttonGrey}>
                            <Text style={{color: 'white'}}>ĐĂNG KÝ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonGreen} onPress={() => navigation.navigate('Login')}>
                            <Text style={{color: 'white'}}>ĐĂNG NHẬP</Text>
                        </TouchableOpacity>
                    </View>
                </View> 

                <View style={{alignSelf: 'center', marginHorizontal: 10, flexDirection: 'row'}}>
                    <View style={{height: 0.5, width: 78, backgroundColor: 'black', marginVertical: 10}} /> 
                    <Text style={{paddingHorizontal: 10}}>Hoặc đăng nhập bằng</Text>
                    <View style={{height: 0.5, width: 78, backgroundColor: 'black', marginVertical: 10}} />
                </View>

                <View style={{alignSelf: 'center', marginTop: 10, flexDirection: 'row', marginBottom: 20}}>
                    <Image
                        style={{width: 32, height: 32, marginRight: 13}}
                        source={require('../../../assets/img/facebook_icon.png')}
                    />
                    <Image
                        style={{width: 32, height: 32, marginLeft: 13}}
                        source={require('../../../assets/img/google_icon.png')}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Regist;