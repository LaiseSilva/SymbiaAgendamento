import React from 'react';
import {StyleSheet, SafeAreaView, View, Text, TextInput} from "react-native"

const Input = ({label}) => {
    ( 
        <SafeAreaView>
            <Text>{label}</Text>

            <View style={styles.corTeste}>
                <View style={styles.teste}>
                    <TextInput style={styles.input}/>
                </View>
            </View>
        </SafeAreaView>
      )


      const styles = StyleSheet.create({
        corTeste:{
        backgroundColor:'#CCCCCC'
      },
    
      title: {
        fontSize: 24,
        fontWeight: '600',
      },
    
      teste:{
        width: "100%",
        height: 40,
        backgroundColor: "#44C4C4"
      },
    
      input:{
        color: "#000000",
       flex: 1
      }
    });

}

export default Input;;