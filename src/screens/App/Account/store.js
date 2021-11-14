import React from 'react'
import {Text, View} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import PostStored from '../../../components/postStored';

function Store() {
    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 4, flex: 1, flexWrap: 'wrap', marginLeft: 1}}>
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostStored 
                    author="Minh Hiếu"
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
            </View>
        </View>
    );
};

export default Store;