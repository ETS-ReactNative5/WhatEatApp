import React from 'react'
import {Text, View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style'
import {FoodRecommend} from '../../../components/index'
import {PlaceRecommend} from '../../../components/index';
import {PostForYou} from '../../../components/index';

function ForYou({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Hôm nay ăn gì?</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.foodContainer}>
                <FoodRecommend 
                    title="Phở"
                    image={require('../../../assets/img/bunbo.png')}
                />
                <FoodRecommend 
                    title="Phở"
                    image={require('../../../assets/img/bunbo.png')}
                />
                <FoodRecommend 
                    title="Phở"
                    image={require('../../../assets/img/bunbo.png')}
                />
                <FoodRecommend 
                    title="Phở"
                    image={require('../../../assets/img/bunbo.png')}
                />
                <FoodRecommend 
                    title="Phở"
                    image={require('../../../assets/img/bunbo.png')}
                />
            </ScrollView>
            <Text style={styles.title}>Địa điểm nổi bật</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.placeContainer}>
                <PlaceRecommend 
                    title="Mì gia Khánh Duy"
                    rate='4.5'
                    image={require('../../../assets/img/place.png')}
                />
                <PlaceRecommend 
                    title="Mì gia Khánh Duy"
                    rate='4.5'
                    image={require('../../../assets/img/place.png')}
                />
                <PlaceRecommend 
                    title="Mì gia Khánh Duy"
                    rate='4.5'
                    image={require('../../../assets/img/place.png')}
                />
                <PlaceRecommend 
                    title="Mì gia Khánh Duy"
                    rate='4.5'
                    image={require('../../../assets/img/place.png')}
                />
            </ScrollView>
            <PostForYou
                title='Gà rán Chicken Plus'
                image={require('../../../assets/img/sample.png')}
                place='Số 6, Trần Văn Ơn, TDM, Bình Dương'
                author='Minh Hiếu'
                numLike='10'
                numComment='10'
                onPress={() => navigation.navigate('DetailPost')}
            />
            <PostForYou
                title='Gà rán Chicken Plus'
                image={require('../../../assets/img/sample.png')}
                place='Số 6, Trần Văn Ơn, TDM, Bình Dương'
                author='Minh Hiếu'
                numLike='10'
                numComment='10'
            />
            <PostForYou
                title='Gà rán Chicken Plus'
                image={require('../../../assets/img/sample.png')}
                place='Số 6, Trần Văn Ơn, TDM, Bình Dương'
                author='Minh Hiếu'
                numLike='10'
                numComment='10'
            />
            <PostForYou
                title='Gà rán Chicken Plus'
                image={require('../../../assets/img/sample.png')}
                place='Số 6, Trần Văn Ơn, TDM, Bình Dương'
                author='Minh Hiếu'
                numLike='10'
                numComment='10'
            />
        </ScrollView>
    );
};

export default ForYou;