import React from 'react'
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native'
import { styles } from '../Login/style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

function Login({navigation}) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/img/logo.png')}
            />
            <Text style={styles.title}>Đăng nhập</Text>
            <View style={{flexDirection: 'column', alignContent: 'center', marginHorizontal: 30, marginVertical: 10}}>
                
                <Text style={{marginBottom: 5, marginTop: 10, marginLeft: 5}}>
                    Tên đăng nhập
                </Text>

                <View style={styles.textInput}>
                    <TextInput
                        placeholder="Tên đăng nhập"
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
                
                

                <Text style={{color: '#00B060', marginBottom: 25, marginTop: 10, marginLeft: 5}}>
                    Quên mật khẩu?
                </Text>

                <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                    <TouchableOpacity style={styles.buttonGrey} onPress={() => navigation.navigate('Regist')}>
                        <Text style={{color: 'white'}}>ĐĂNG KÝ</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonGreen}>
                        <Text style={{color: 'white'}}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
            </View> 

            <View style={{alignSelf: 'center', marginHorizontal: 10, flexDirection: 'row'}}>
                <View style={{height: 0.5, width: 78, backgroundColor: 'black', marginVertical: 10}} /> 
                <Text style={{paddingHorizontal: 10}}>Hoặc đăng nhập bằng</Text>
                <View style={{height: 0.5, width: 78, backgroundColor: 'black', marginVertical: 10}} />
            </View>

            <View style={{alignSelf: 'center', marginVertical: 10, flexDirection: 'row'}}>
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
    );
};

export default Login;