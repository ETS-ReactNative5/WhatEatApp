import React from 'react'
import {Text, View, Image, TextInput} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from '../Notify/style'

function Notify({navigation}) {
    return (
        <View>                          
            <View>        
                <View style={styles.container2}>                               
                    <Text style={styles.title}>Thông báo</Text>
                </View>
            </View>            
            <View>
                <ScrollView style={{height: 678}}>
                    <Text style={styles.timeNew}>Hôm nay</Text>
                    
                </ScrollView>
            </View>               
        </View>
    );
};

export default Notify;