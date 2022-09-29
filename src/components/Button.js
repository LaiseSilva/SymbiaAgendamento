import React from "react";
import { TouchableOpacity, StyleSheet, Text, Dimensions } from "react-native";

const Button = ({textButton}) => {

   return (
       <TouchableOpacity style = {style.button}>
           <Text style={style.title} > {textButton} </Text>
       </TouchableOpacity>
   );

};

const style = StyleSheet.create({
    button: {
        height: Dimensions.get("window").height * 0.04,
        width: Dimensions.get("window").width * 0.25,
        backgroundColor: "#501537",
        justifyContent: "center",
        alignItems: "center",
        borderBottomRightRadius: 5,
        borderTopLeftRadius: 5
        
    },
    
   title:{
        color:"#FFFFFF",
        fontSize:18,
   }
})

export default Button;