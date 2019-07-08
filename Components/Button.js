import React,{Component} from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';
import {ACCENT_COLOR,WHITE_COLOR} from "../colors";
import {responsiveFontSize, responsiveHeight} from "react-native-responsive-dimensions";

export default class Button extends Component{

    render(){
        return(

            <TouchableOpacity style={[styles.buttonContainer,this.props.styles]} onPress={() => this.props.onPress()}>
                <Text style={styles.textContainer}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}
Button.defaultprops={
    styles:{}
};
const styles=StyleSheet.create({
   buttonContainer:{
       flexDirection:'row',
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:ACCENT_COLOR,
       paddingVertical:responsiveHeight(2),

       // marginVertical:responsiveHeight(1),
       // marginHorizontal:responsiveWidth(8)
   } ,
    textContainer:{
        color:WHITE_COLOR,
        fontSize:responsiveFontSize(2.5),

    },
});