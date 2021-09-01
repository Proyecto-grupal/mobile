import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableHighlight, TextInput, Image, Button, AppRegistry, TouchableWithoutFeedback} from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import styles from './styleLogin';
import Modal from 'react-native-modal'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
 
const Stack = createNativeStackNavigator(); 

export default function Login ({navigation}){
  
const [code, setCode] = useState(false); 

const onPressMail = () => {
  setCode(!code)
}

  return (
    <View style={styles.container}>
            <View style = {styles.textoInicio}>
              <Text>Podemos enviarte a tu correo un código de verificación para iniciar sesión o puedes hacerlo con tu cuenta de Google</Text>
            </View>
            <TextInput style = {styles.inputInicio} placeholder='Ingresa tu correo electrónico'></TextInput>
            <TouchableHighlight onPress={onPressMail} underlayColor="white">
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Enviar</Text>
                </View>
            </TouchableHighlight>
            <Modal isVisible={code} style = {styles.modal}>
                <View style = {styles.verificationcode1}>
                    <Text >Código de Verificación</Text>
                    <Text>Ingresa el código que hemos enviado al correo xxx@xxxx para iniciar sesión y continuar aprendiento</Text>
                </View>
                    <TextInput style = {styles.inputInicio}></TextInput>
                    <Button title="Ingresar" onPress={onPressMail} />
            </Modal>
            <View>
              <Text>O</Text>
            </View>
            <View>
            <TouchableWithoutFeedback onPress={() => alert('ingresé con Google')}  underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Ingresar con Google</Text>
              </View>
            </TouchableWithoutFeedback>
            </View>
          </View>
  )
}

