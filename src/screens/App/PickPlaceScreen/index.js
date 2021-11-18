import React, {useState} from 'react'
import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import {styles} from '../PickPlaceScreen/style'
import {PickPlace} from '../../../components/index'

function PickPlaceScreen(){
    return(
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    placeholder="Nhập địa điểm bạn cần tìm"
                    style={styles.textInput}
                />
                <TouchableOpacity>
                    <Feather name="search" size={28} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            <ScrollView style={styles.container2}>
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
                <PickPlace
                    title="Chicken Plus"
                    address="200, Trần Văn Ơn, Thủ Dầu Một, Bình Dương"
                    phone="0346489037"
                    image={require('../../../assets/img/sample.png')}
                />
            </ScrollView>
        </View>
    )
};

export default PickPlaceScreen;