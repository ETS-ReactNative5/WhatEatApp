import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Text,
  Alert
} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';

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
        <View style={{flex: 1}}>
            <MapView
                style={{flex: 1}}
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
        </View>
    );
};

export default Map;