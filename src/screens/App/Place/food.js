import React from 'react'
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './style';
import {FoodPrice} from '../../../components/index';
import { useNavigation } from '@react-navigation/native';

function PlaceFood() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 4, flex: 1, flexWrap: 'wrap', marginLeft: 1}}>
                <FoodPrice
                    title="Mì"
                    price="25.000đ"
                    image={require('../../../assets/img/sample.png')}
                />
                <FoodPrice
                    title="Mì gia truyền"
                    price="25.000đ"
                    image={require('../../../assets/img/sample.png')}
                />
                <FoodPrice
                    title="Mì gia truyền cha truyền con nối"
                    price="25.000đ"
                    image={require('../../../assets/img/sample.png')}
                />
            </View>            
        </View>
    );
};

export default PlaceFood;