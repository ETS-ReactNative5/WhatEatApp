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
      width: null,
      marginTop: 10
    },
    title: {
        color: '#00B060',
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 15,
        alignSelf: 'center'
    },
    ava: {
      width: 72,
      height: 72,
      borderRadius: 50,
      alignSelf: 'center',
      marginTop: 15
    },
    username: {
      fontSize: 14,
      marginTop: 10,
      textAlign: 'center',
      alignSelf: 'center'
    },
    countContain: {
      alignItems: 'center', 
      marginHorizontal: 10
    },
    count: {
      fontSize: 18, 
      color: '#00b060', 
      fontWeight: 'bold'
    },
    button: {
      alignSelf: 'center',
      borderWidth: 0.5,
      borderRadius: 8,
      paddingHorizontal: 10,
      paddingVertical: 2,
      marginTop: 10
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
      bottom: 60,
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
      width: 72,
      height: 72,
      borderRadius: 50,
      marginHorizontal: 5,      
    }
});