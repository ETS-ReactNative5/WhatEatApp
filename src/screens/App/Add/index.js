import React from 'react'
import {Text, View, Image, TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../Add/style'

function Add({navigation}) {
    return (
        <View>                          
            <View>        
                <View style={styles.container2}>                               
                    <Text style={styles.title}>Bài viết mới</Text>
                </View>
            </View>            
            <View>
                <ScrollView style={{height: 678}}>
                    <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 20, alignItems: 'center'}}>
                        <Image source={require('../../../assets/img/ava.png')} style={styles.ava}/>
                        <View style={{flexDirection: 'column', marginLeft: 4, marginTop: -6}}>
                            <Text style={styles.author}>Minh Hiếu</Text>
                        </View>                      
                    </View>
                    <View style={{paddingBottom: 100, flexDirection: 'column'}}>
                        <TextInput
                            style={styles.content}
                            multiline
                            numberOfLines={4}
                        />
                            <View style={styles.place}>
                                <Feather name="map-pin" style={{fontSize: 24}}/>
                                <View style={{marginLeft: 10}}>
                                    <Text style={styles.placeName}>Gà rán Chicken Plus</Text>
                                    <Text style={styles.placeAddress}>Số 6, Trần Văn Ơn, Thủ Dầu Một, Bình Dương</Text>
                                </View>                                
                            </View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{marginHorizontal: 5}}>
                                <Image source={require('../../../assets/img/sample.png')} style={styles.image}/>
                                <Image source={require('../../../assets/img/sample.png')} style={styles.image}/>
                                <Image source={require('../../../assets/img/sample.png')} style={styles.image}/>
                                <Image source={require('../../../assets/img/sample.png')} style={styles.image}/>
                            </ScrollView>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.bottonTab}>
                    <TouchableOpacity>
                        <Feather name='camera' style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='image' style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='map-pin' style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='upload' style={{fontSize: 32, marginHorizontal: 30, color: '#00b060'}}/>
                    </TouchableOpacity>
            </View>                
        </View>
    );
};

export default Add;