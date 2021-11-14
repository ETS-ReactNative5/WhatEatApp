import React, { useState } from 'react'
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './style';

function Place() {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <View>
            <View style={styles.containerPlace}>
                <Image 
                    source={require('../../../assets/img/sample.png')}
                    style={styles.imagePlace}
                />
                <View style={styles.textPlace}>
                    <Text style={styles.namePlace}>Chicken Plus</Text>
                    <Text
                        style={styles.address}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        200 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương
                    </Text>
                    <Text>0886 320 324</Text>
                </View>
            </View>
            <View style={styles.containerPlace}>
                <Image 
                    source={require('../../../assets/img/sample.png')}
                    style={styles.imagePlace}
                />
                <View style={styles.textPlace}>
                    <Text style={styles.namePlace}>Chicken Plus</Text>
                    <Text
                        style={styles.address}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        200 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương
                    </Text>
                    <Text>0886 320 324</Text>
                </View>
            </View>
            <View style={styles.containerPlace}>
                <Image 
                    source={require('../../../assets/img/sample.png')}
                    style={styles.imagePlace}
                />
                <View style={styles.textPlace}>
                    <Text style={styles.namePlace}>Chicken Plus</Text>
                    <Text
                        style={styles.address}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        200 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương
                    </Text>
                    <Text>0886 320 324</Text>
                </View>
            </View>
            <View style={styles.containerPlace}>
                <Image 
                    source={require('../../../assets/img/sample.png')}
                    style={styles.imagePlace}
                />
                <View style={styles.textPlace}>
                    <Text style={styles.namePlace}>Chicken Plus</Text>
                    <Text
                        style={styles.address}
                        numberOfLines={1}
                        ellipsizeMode='tail'
                    >
                        200 Trần Văn Ơn, Phú Hoà, Thủ Dầu Một, Bình Dương
                    </Text>
                    <Text>0886 320 324</Text>
                </View>
            </View>
        </View>
    );
};

export default Place;