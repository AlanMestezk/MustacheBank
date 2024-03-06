import { StyleSheet } from "react-native";

export const GlobalStyles = StyleSheet.create(
    {
        container:{
            flex: 1,
            backgroundColor: '#4158D0',
        },
        viewTitle:{
            marginTop: 40,
            alignItems: "center",
            justifyContent: "center"
        },
        title:{
            fontSize: 50,
            fontWeight: "bold",
            color: 'aliceblue',
            textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
            textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
            textShadowRadius: 10, // Raio da sombra
            
        },
        viewImg:{
            borderRadius: 150,
            backgroundColor: 'aliceblue'
        },
        imgIcon:{
            width: 200,
            height: 200
        }
    }
)