import React from 'react'
import {Text, View, Image} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../DetailPost/style'
import {Comment} from '../../../components/index'

function DetailPost({navigation}) {
    return (
        <View>                          
                <View>
                    <TouchableOpacity 
                        style={{marginBottom: -27, marginTop: 10, marginLeft: 10}}
                        onPress={() => navigation.goBack()}
                    >
                        <Feather name="chevron-left" style={{fontSize: 32}}/>                    
                    </TouchableOpacity>          
                    <View style={styles.container2}>                               
                        <Text style={styles.title}>Bài viết của Minh Hiếu</Text>
                    </View>
                </View>            
                <View>
                    <ScrollView style={{height: 678}}>
                        <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 20, alignItems: 'center'}}>
                                <Image source={require('../../../assets/img/ava.png')} style={styles.ava}/>
                                <View style={{flexDirection: 'column', marginLeft: 4, marginTop: -6}}>
                                    <Text style={styles.author}>Minh Hiếu</Text>
                                    <Text style={styles.time}>Vừa xong</Text>
                                </View>
                                <TouchableOpacity style={styles.follow}>
                                    <Text style={{color: 'white'}}>Đang theo dõi</Text>
                                </TouchableOpacity>                       
                        </View>
                        <View style={{paddingBottom: 100, flexDirection: 'column'}}>
                            <Text style={styles.content}>
                            Nội dung review. Nội dung review. Nội dung review. 
                            Nội dung review. Nội dung review. Nội dung review. 
                            Nội dung review. Nội dung review. Nội dung review. 
                            Nội dung review. Nội dung review. Nội dung review. 
                            Nội dung review. Nội dung review. Nội dung review. 
                            Nội dung review. Nội dung review. Nội dung review. 
                            Nội dung review. Nội dung review. Nội dung review. 
                            Nội dung review. Nội dung review. Nội dung review. 
                            </Text>
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
                            <View style={{flexDirection: 'row', justifyContent: 'center', marginVertical: 10}}>
                                <Text style={{marginHorizontal: 90, textAlign: 'left', fontWeight: 'bold'}}>10 lượt thích</Text>
                                <Text style={{marginHorizontal: 90, textAlign: 'right', fontWeight: 'bold'}}>10 bình luận</Text>                              
                            </View>
                            <Comment
                                author="Minh Hiếu"
                                image={require('../../../assets/img/ava.png')}
                                content="Nội dung bình luận. Nội dung bình luận. Nội dung"
                            />
                            <Comment
                                author="Minh Hiếu"
                                image={require('../../../assets/img/ava.png')}
                                content="Nội dung bình luận. Nội dung bình luận. Nội dung"
                            />
                            <Comment
                                author="Minh Hiếu"
                                image={require('../../../assets/img/ava.png')}
                                content="Nội dung bình luận. Nội dung bình luận. Nội dung"
                            />
                        </View>
                    </ScrollView>
                </View>
                <View style={styles.bottonTab}>
                    <TouchableOpacity>
                        <Feather name='heart' style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('CommentScreen')}>
                        <Feather name='message-square' style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='bookmark' style={styles.icon}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name='map' style={styles.icon}/>
                    </TouchableOpacity>
                </View>                
            </View>
    );
};

export default DetailPost;