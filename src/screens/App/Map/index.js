import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Alert,
  TextInput,
  Picker,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MapView, {Marker, Callout} from 'react-native-maps';
import Feather from 'react-native-vector-icons/Feather';

function Map() {
    const coordinates = [
        {name: 'Family Mart', latitude: 10.981308, longitude: 106.675406,},
        {name: 'Đại học Thủ Dầu Một', latitude: 10.980638, longitude: 106.674723,},
        {name: 'Trung tâm ngoại ngữ TDMU', latitude: 10.980289, longitude: 106.675560,},
        {name: 'Trà sữa Đậu', latitude: 10.980950, longitude: 106.675705,},
        {name: 'Circle K', latitude: 10.980145, longitude: 106.675873,},
        {name: 'Tiệm in Thái Bình', latitude: 10.980296, longitude: 106.675828,},
    ]
    
    const showMessages = () => {
        Alert.alert(
          'Chào mừng đến với ...')
    }
    return (
        <View>
            <MapView
                    style={{width: null, height: 660}}
                    region={{
                        latitude: 10.980638,
                        longitude: 106.674723,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    >

                    {
                        coordinates.map(markers => (
                        <Marker
                            key={markers.name}
                            coordinate={{latitude: markers.latitude, longitude: markers.longitude}}
                            title={markers.name}
                        >
                            <Callout onPress={showMessages}>
                            <Text><Image source={markers.img}/></Text>
                            <Text>{markers.name}</Text>
                            </Callout>
                        </Marker>
                        ))
                    }
            </MapView>
            <View style={{height: 100, borderRadius: 8, marginHorizontal: 10, backgroundColor: 'rgba(52, 52, 52, 0.4)', marginTop: -650}}>
                <View style={{flexDirection: 'row'}}>
                    <View style={{backgroundColor: 'white', marginHorizontal: 5, marginVertical: 5, borderRadius: 8, flexDirection: 'row', height: 40}}>
                        <TextInput style={{width: 230, marginHorizontal: 5}} placeholder="Nhập tên món ăn hoặc địa điểm"></TextInput>
                        <TouchableOpacity>
                            <Feather name="camera" size={24} color={'grey'} style={{marginHorizontal: 10, marginTop: 6}}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="mic" size={24} color={'grey'} style={{marginHorizontal: 5, marginTop: 6}}/>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity>
                        <Feather name="search" size={24} color={'white'} style={{marginTop: 12, marginHorizontal: 5}}/>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 7}}>
                    <TouchableOpacity style={{backgroundColor: 'white', width: 110, height: 30, borderRadius: 8, alignItems: 'center', marginHorizontal: 5}}>
                        <Text style={{color: 'grey', marginTop: 5}}>Địa điểm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', width: 110, height: 30, borderRadius: 8, alignItems: 'center', marginHorizontal: 5}}>
                        <Text style={{color: 'grey', marginTop: 5}}>Danh mục</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: 'white', width: 110, height: 30, borderRadius: 8, alignItems: 'center', marginHorizontal: 5}}>
                        <Text style={{color: 'grey', marginTop: 5}}>Đánh giá</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Map;