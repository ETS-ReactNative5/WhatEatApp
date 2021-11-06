import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F2F2F2',
    },
    container2: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: null
    },
    title: {
        color: '#00B060',
        fontSize: 16,
        fontWeight: 'bold',
    },
    ava: {
      width: 33,
      height: 33,
      borderRadius: 50,
    },
    author: {
      color: '#000',
      fontWeight: 'bold',
      fontSize: 14,
      marginTop: 4, 
      textAlign: 'left'
    },
    time: {
      color: '#000',
      fontStyle: 'italic',
      fontSize: 12,
      marginTop: 0,
      textAlign: 'left'
    },
    follow: {
      borderRadius: 8,
      backgroundColor: '#00b060',
      paddingHorizontal: 10,
      marginLeft: 150
    },
    unfollow: {

    },
    bottonTab: {
      flexDirection: 'row',
      backgroundColor: 'white',
      width: 360,
      height: 64,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      position: 'absolute',
      bottom: 30,
      flex: 1,
      borderRadius: 8,
      shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    icon: {
      fontSize: 32,
      marginHorizontal: 30
    },
    content: {
      textAlign: 'left',
      marginHorizontal: 20
    },
    place: {
      marginHorizontal: 18,
      marginVertical: 20,
      flexDirection: 'row',
      alignItems: 'center'
    },
    placeName: {
      fontWeight: 'bold'
    },
    placeAddress: {
      fontStyle: 'italic'
    },
    image: {
      width: 250,
      height: 250,
      borderRadius: 8,
      marginHorizontal: 5
    }
});