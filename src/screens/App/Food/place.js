import React from 'react'
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './style';
import {PickPlace} from '../../../components/index';
import { useNavigation } from '@react-navigation/native';

function Place() {
    const navigation = useNavigation();
    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 4, flex: 1, flexWrap: 'wrap', marginLeft: 1}}>
                <PickPlace
                    title="ChickenPlus"
                    image={require('../../../assets/img/sample.png')}
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                />
                <PickPlace
                    title="ChickenPlus"
                    image={require('../../../assets/img/sample.png')}
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                />
                <PickPlace
                    title="ChickenPlus"
                    image={require('../../../assets/img/sample.png')}
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                />
                <PickPlace
                    title="ChickenPlus"
                    image={require('../../../assets/img/sample.png')}
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                />
            </View>            
        </View>
    );
};

export default Place;