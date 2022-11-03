import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput, Dimensions} from "react-native"

const Input = ({label,placeholder,error,typeKeyboard, lenght ,onFocus = () =>{}, ...props}) => {
    return ( 
          <SafeAreaView>
              <Text>{label}</Text>
              <View>
                  <View style={[styles.teste, {borderColor: error ? "#FF0000": "#000000"}]}>
                      <TextInput style={styles.input} placeholder={placeholder} onFocus={()=>{onFocus()}} autoCorrect={false}
                      keyboardType={typeKeyboard} maxLength={lenght}
                      {...props}/>
                  </View>
              </View>

              <Text style={styles.error}>{error}</Text>
          </SafeAreaView>
      );
}

const styles = StyleSheet.create({

title: {
  fontSize: 24,
  fontWeight: '600',
},

teste:{
  width: "100%",
  height: 40,
  backgroundColor: "#A9B3CE",
  borderTopLeftRadius:5,
  borderTopRightRadius: 5,
  borderBottomRightRadius: 5
},

input:{
  width: Dimensions.get("window").width * 0.7,
  color: "#000000",
 flex: 1
},

error:{
  fontSize:10,
  color: "#FF0000"
}
});


export default Input;;