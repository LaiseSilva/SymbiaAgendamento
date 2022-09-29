import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput, Dimensions} from "react-native"

const Input = ({label,placeholder}) => {
    return ( 
          <SafeAreaView>
              <Text>{label}</Text>
              <View>
                  <View style={styles.teste}>
                      <TextInput style={styles.input} placeholder={placeholder}/>
                  </View>
              </View>
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
}
});


export default Input;;