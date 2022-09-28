import React from 'react';
import { SafeAreaView, StyleSheet } from "react-native"

const Register = () => {
   
   //Armazenamento dos dados
   const {inputs,setInputs} = React.useState({
      nome_paciente: "",
      telefone_paciente: "",
      celular_paciente : "",
      email_paciente: "",
      nome_responsavel: "",
      telefone_responsavel: ""
   })

   //Entrada de dados
   const handlerOnChange = (text, input) => {

      setInputs((prevState) => (
         {...prevState, [input]: text}
      ));
   }

   const validate = () => {
      let validate = true;
      
   }

   return(
      <SafeAreaView>
         
      </SafeAreaView>
   )
}

export default Register;    