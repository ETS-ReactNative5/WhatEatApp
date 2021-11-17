import React, {useState} from 'react';
import {
    View,
    Text, 
    Image,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style'
import Place from './place';
import FoodPost from './food'

function Food({navigation}){
    const [state, setState] = useState({
        activeIndex: 1,
    });  
    
    const selectTab = ( index ) => {
        setState({
            activeIndex: index,
        })
    }
    
    const renderTabContent = () => {
        if( state.activeIndex == 1 ) {
            return(
                <View style={{marginTop: 10, alignItems: 'center', marginBottom: 50}}>
                    <FoodPost/>
                </View>
            )
        }
        else if( state.activeIndex == 2 ) {
            return(
                <View style={{marginTop: 10, alignItems: 'center', marginBottom: 50}}>
                    <Place/>
                </View>
            )
        }
    }

    return(
        <View>
            <View>
                <TouchableOpacity 
                    style={{marginBottom: -35, marginTop: 10, marginLeft: 15}}
                    onPress={() => navigation.goBack()}
                >
                    <Feather name="chevron-left" style={{fontSize: 32}}/>                    
                </TouchableOpacity>          
                <View style={styles.container2}>                               
                    <Text style={styles.title}>Phở</Text>
                </View>
            </View> 
            <ScrollView style={styles.container3}>
                <Image source={require('../../../assets/img/bunbo.png')} style={styles.image}/>
                <Text style={styles.description}>
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                    Mô tả món ăn, mô tả món ăn, mô tả món ăn, mô tả món ăn,
                </Text>
                <View style={{marginTop: 20}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                            <TouchableOpacity
                                onPress={() => selectTab(1)} 
                                style={[state.activeIndex == 1 ? { borderBottomWidth: 2, borderBottomColor: 'black', alignItems: 'center', width: 80} : { borderBottomWidth: 0, alignItems: 'center'}]}
                            >
                                <Text style={[state.activeIndex == 1 ? styles.buttonTabActive : styles.buttonTabInActive]}>
                                    BÀI VIẾT
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => selectTab(2)} 
                                style={[state.activeIndex == 2 ? { borderBottomWidth: 2, borderBottomColor: 'black', alignItems: 'center', width: 80} : { borderBottomWidth: 0, alignItems: 'center'}]}
                            >
                                <Text style={[state.activeIndex == 2 ? styles.buttonTabActive : styles.buttonTabInActive]}>
                                    ĐỊA ĐIỂM
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {renderTabContent({navigation})}
            </ScrollView>
        </View>
    )
};

export default Food;