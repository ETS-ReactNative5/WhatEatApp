import React from 'react'
import {Text, View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {PostFollowing} from '../../../components/index'

function YourFollow() {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <PostFollowing 
                title="Gà rán Chicken Plus"
                author="Minh Hiếu"
                time="Vừa xong"
                avatar={require('../../../assets/img/ava.png')}
                image={require('../../../assets/img/sample.png')}
                place="Số 6, Trần văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương"
                content="Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review."
                numLike="10"
                numComment="10"
            />
            <PostFollowing 
                title="Gà rán Chicken Plus"
                author="Minh Hiếu"
                time="Vừa xong"
                avatar={require('../../../assets/img/ava.png')}
                image={require('../../../assets/img/sample.png')}
                place="Số 6, Trần văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương"
                content="Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review."
                numLike="10"
                numComment="10"
            />
            <PostFollowing 
                title="Gà rán Chicken Plus"
                author="Minh Hiếu"
                time="Vừa xong"
                avatar={require('../../../assets/img/ava.png')}
                image={require('../../../assets/img/sample.png')}
                place="Số 6, Trần văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương"
                content="Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review."
                numLike="10"
                numComment="10"
            />
            <PostFollowing 
                title="Gà rán Chicken Plus"
                author="Minh Hiếu"
                time="Vừa xong"
                avatar={require('../../../assets/img/ava.png')}
                image={require('../../../assets/img/sample.png')}
                place="Số 6, Trần văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương"
                content="Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review. Nội dung review."
                numLike="10"
                numComment="10"
            />
        </ScrollView>
    );
};

export default YourFollow;