import React from 'react'
import {Text, View, Image} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import { styles } from './style';
import PostProfile from '../../../components/postProfile';
import { useNavigation } from '@react-navigation/native';

function Post() {
    const navigation = useNavigation();
    
    return (
        <View>
            <View style={{flexDirection: 'row', marginTop: 4, flex: 1, flexWrap: 'wrap', marginLeft: 1}}>
                <PostProfile 
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                    onPress={() => navigation.navigate('DetailPost')}
                />
                <PostProfile 
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostProfile 
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostProfile 
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostProfile 
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostProfile 
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
                <PostProfile 
                    title="Chicken Plus"
                    image={require('../../../assets/img/sample.png')}
                    rate="4.5"
                />
            </View>            
        </View>
    );
};

export default Post;