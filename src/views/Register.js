import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Dimensions, ScrollView} from "react-native"
import Input from '../components/Input';
import Button from '../components/Button';
import apiSymbiaAgendamento from '../service/apiSymbiaAgendamento'


const Register = () => {
   
   //Armazenamento dos dados
   const [dadosPaciente,setdadosPaciente] = React.useState({
      nome_paciente: "",
      telefone_paciente: "",
      celular_paciente : "",
      email_paciente: "",
      nome_responsavel: "",
      telefone_responsavel: ""
   });

   //Entrada de dados
   const handlerOnChange = (text, input) => {

      setdadosPaciente((prevState) => (
         {...prevState, [input]: text}
      ));
   }

       useEffect(() => {
        console.log(dadosPaciente)
    }, [dadosPaciente])


  const [errors, setErrors] = React.useState({})
   


   const handlerErrors = (errorMenssage, input) =>{
      setErrors((prevState) => ({...prevState, [input]:errorMenssage}));
   }

   const validate = () => {
      let validate = true;

      if(!dadosPaciente.nome_paciente){
         validate = false;
         handlerErrors('Por favor preencha o campo o obrigatório', 'nome_paciente')
      }else{

      }
      
      if(!dadosPaciente.telefone_paciente){
         validate = false;
         handlerErrors('Por favor preencha o campo o obrigatório', 'telefone_paciente')
      }else{

      }

      if(!dadosPaciente.celular_paciente){
         validate = false;
         handlerErrors('Por favor preencha o campo o obrigatório', 'celular_paciente')
      }else{

      }
      
      if(!dadosPaciente.email_paciente){
         validate = false;
         handlerErrors('Por favor preencha o campo o obrigatório', 'email_paciente')
      }else{

      }

      if(validate){

         cadastrar()
         console.log("cadastrar")
      }
      
   }

   const cadastrar = ()=>{

      try{
        const response = apiSymbiaAgendamento.post('cadastrarPaciente', 
        {
         nome_paciente: dadosPaciente.nome_paciente,
         telefone_paciente: dadosPaciente.telefone_paciente,
         celular_paciente : dadosPaciente.celular_paciente,
         email_paciente: dadosPaciente.email_paciente,
         nome_responsavel: dadosPaciente.nome_responsavel,
         telefone_responsavel: dadosPaciente.telefone_responsavel
        });
      }catch(error){}

  }

   return(    
            <View style={style.register}>
               <View style={style.containerHeader}>
                  <Text style={style.title}> Clínicas Symbian </Text>
                  <Text style={style.subtitle}> Bem Vindo </Text>
               </View>
               <ScrollView>
                  <View style={style.containerdadosPaciente}>
                     <View style={style.titleContainer}>
                        <Text style={style.titleView}>Cadastro</Text>
                     </View>
                     <View style={style.dadosPaciente}>
                        <Input 
                           label= "Nome Paciente:" 
                           placeholder="Nome paciente"
                           error = {errors.nome_paciente}
                           typeKeyboard = {"default"}
                           onFocus = {()=>{handlerErrors(null, 'nome_paciente')}}
                           onChangeText = {(text) => handlerOnChange(text, "nome_paciente")}
                           />

                        <Input 
                           label= "Telefone Paciente:" 
                           placeholder="Telefone paciente"
                           error = {errors.telefone_paciente} 
                           typeKeyboard = {"numeric"}
                           onFocus = {()=>{handlerErrors(null, 'telefone_paciente')}}
                           onChangeText  = {(text) => handlerOnChange(text, "telefone_paciente")}/>
                    

                        <Input 
                           label= "Celular Paciente:" 
                           placeholder="Celular paciente"
                           typeKeyboard={"numeric"} 
                           error = {errors.celular_paciente}
                           onFocus = {()=>{handlerErrors(null, 'celular_paciente')}}
                           onChangeText  = {(text) => handlerOnChange(text, "celular_paciente")}/>
                        

                        <Input 
                           label= "Email Paciente:" 
                           placeholder="Email paciente" 
                           typeKeyboard={"email-address"}
                           error = {errors.email_paciente}
                           onFocus = {()=>{handlerErrors(null, 'email_paciente')}}
                           onChangeText  = {(text) => handlerOnChange(text, "email_paciente")}/>
                       
                        
                        <Input 
                           label= "Nome Responsável:" 
                           placeholder="Nome Responsável" 
                           typeKeyboard = {"default"}
                           error = {errors.nome_responsavel}
                           onFocus = {()=>{handlerErrors(null, 'nome_responsavel')}}
                           onChangeText  = {(text) => handlerOnChange(text, "nome_responsavel")}/>
                      

                        <Input 
                           label= "Telefone Responsável:" 
                           placeholder="Telefone Responsável"
                           error = {errors.telefone_responsavel} 
                           typeKeyboard={"numeric"} 
                           onFocus = {()=>{handlerErrors(null, 'telefone_responsavel')}}
                           onChangeText  = {(text) => handlerOnChange(text, "telefone_responsavel")}/>
                       
                     </View>

                     <View style={style.containerButton}>
                        <Button textButton={"Finalizar"} onPress={validate}/>
                     </View>
                  </View>
               </ScrollView>
            </View>
   )
}

const style = StyleSheet.create({
   register:{
      flex:1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#7D6483"
   },

   containerHeader:{
      height: Dimensions.get("window").height * 0.2,
      alignItems: 'center',
      justifyContent: 'space-around',
   },

   title:{
      fontSize: 35,
      fontWeight: 'bold',
      textAlignVertical: 'center',
      color: "#FFFFFF"
   },

   subtitle:{
      color: "#FFFFFF",
      fontSize: 25,
   },

   containerdadosPaciente:{
      height: Dimensions.get("window").height * 0.7,
      width: Dimensions.get("window").width * 0.9,
      backgroundColor: "#D9D9D9",
      borderTopLeftRadius:20,
      borderTopRightRadius: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
   },

   titleContainer:{
      height: "10%",
      width: "100%",
      backgroundColor: "#501537",
      borderTopLeftRadius:20,
      borderTopRightRadius: 20,
      justifyContent: "center",
      alignItems: 'center'
   },

   titleView:{
      color: "#FFFFFF",
      fontSize: 30
   },

   dadosPaciente:{
      width: '100%',
      flex:1,
      alignItems:"center",
      justifyContent:  "space-around"
   },

   containerButton:{
      width: Dimensions.get("window").width * 0.3,
      alignSelf: "flex-end",
      marginBottom: 10
   }
})

export default Register;    