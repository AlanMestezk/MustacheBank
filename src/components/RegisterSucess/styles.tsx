import { StyleSheet } from "react-native"

export const Styles = StyleSheet.create(

    {
        content:{
            marginTop: 30,
            alignItems: "center",
            justifyContent: "center"
        },
        title:{
            fontSize: 30,
            fontWeight: 'bold',
            color: "#ff2dab",
            textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
            textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
            textShadowRadius: 5, // Raio da sombra
        },
        input:{
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            height: 60,
            width: 300,
            color: "aliceblue",
            textAlign: "center",
            borderBottomWidth: 2, // Largura da borda inferior
            borderBottomColor: '#FF2dab', // Cor da borda inferior
        },
        titlePicker:{
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#FF2dab',
        },
        picker:{
            height: 50, 
            width: 155, 
            color: 'aliceblue',
            fontWeight: 'bold',
            fontSize: 20
        }
    }
)