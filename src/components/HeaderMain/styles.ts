import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet,Dimensions } from "react-native";
const {height} = Dimensions.get('window')
const styles=StyleSheet.create({
    headerMain:{
        height: height * 0.064,
        backgroundColor:'#F7D102',
    },
    headerOne:{
        height: height * 0.064,
        width: '80%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderTopRightRadius:25,
        borderBottomRightRadius:25,
    },
    headerOneView: {
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,
        paddingLeft:8,
    },
    headerTwo:{
        width:'30%',
        //backgroundColor:'red',
        height :height* 0.062,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:10

    },
    image:{
        width:30,
        height:30,
    }

})  

export default styles;