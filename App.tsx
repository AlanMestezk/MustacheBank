import { StyleSheet, Text, TextInput, View, Switch, Image } from 'react-native';
import { GlobalStyles }                                     from './src/styles/GlobalStyles';
import { useState }                                         from 'react';
import { Register }                                         from './src/components/RegisterSucess/Register';


export default function App() {

  return (
    <View style={GlobalStyles.container} >

        <View style={GlobalStyles.viewTitle}>

            <View style={GlobalStyles.viewImg}>

              <Image
                source={require("./src/assets/MustacheBank.png")}
                style={GlobalStyles.imgIcon}
              />
            </View>

            <Text style={GlobalStyles.title}>Mustache Bank</Text>

        </View>

        <View >

          <Register/>

        </View>

    </View>
  );
}


