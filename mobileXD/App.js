import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, TouchableHighlight, Button, TextInput, Image} from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Login from './Screens/Login/Login';


const Stack = createNativeStackNavigator(); 


export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions = {{
          headerStyle : {
            backgroundColor: '#142d4c'
          }, 
          headerTintColor: 'white', 
          headerTitleAlign: 'center', 
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}>
        <Stack.Screen name='Login' component={Login} 
        options= {{
          title: 'AprendoXD'
        }}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


