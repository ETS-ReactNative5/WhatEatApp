import React from 'react'
import {Text, View, Image, StyleSheet, TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {Comment} from '../../../components/index'

function CommentScreen({navigation: {goBack}}) {
    return (
        <View> 
            <View>
                <TouchableOpacity 
                    style={{marginBottom: -27, marginTop: 10, marginLeft: 10}}
                    onPress={() => goBack()}    
                >
                    <Feather name="chevron-left" style={{fontSize: 32}}/>                    
                </TouchableOpacity>          
                <View style={styles.container2}>                               
                    <Text style={styles.title}>Bài viết của Minh Hiếu</Text>
                </View>
            </View>
            <View style={{paddingBottom: 160, marginTop: 10}}>
                <ScrollView>                          
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
                    <Comment
                        author="Minh Hiếu"
                        image={require('../../../assets/img/ava.png')}
                        content="Nội dung bình luận. Nội dung bình luận. Nội dung"
                    />
                </ScrollView>
            </View>
            <View style={styles.bottonTab}>
                <TextInput
                    placeholder='Nhập bình luận của bạn'
                    style={styles.textInput}
                />
                <TouchableOpacity>
                    <Feather name='send' style={{fontSize: 32, marginLeft: 10}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CommentScreen;

const styles = StyleSheet.create({
    bottonTab: {
        flexDirection: 'row',
      backgroundColor: 'white',
      width: 380,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 50,
      flex: 1,
      borderRadius: 8,
        shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,

            elevation: 4,
    },
    textInput: {
        borderWidth: 0.5,
        borderColor: '#c4c4c4',
        borderRadius: 8,
        width: 300
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: null
    },
    title: {
        color: '#00B060',
        fontSize: 16,
        fontWeight: 'bold',
    }
})