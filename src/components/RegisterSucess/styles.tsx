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
            textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
            textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
            textShadowRadius: 5, // Raio da sombra
            
        },
        picker:{
            height: 50, 
            width: 155, 
            color: 'aliceblue',
            fontWeight: 'bold',
            fontSize: 20
        },
        titleSlider:{
            marginTop: 20,
            fontSize: 20,
            color: '#FF2dab',
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
            textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
            textShadowRadius: 5, // Raio da sombra
        },
        slider:{
            width: 200,
            height: 40
        },
        titleSlider2:{
            fontSize: 15,
            color: 'aliceblue',
            fontWeight: 'bold',
            textShadowColor: 'rgba(0, 0, 0, 0.5)', // Cor da sombra
            textShadowOffset: { width: 2, height: 2 }, // Deslocamento da sombra
            textShadowRadius: 5, // Raio da sombra
        },
        divButton:{
            marginTop: 50,
            backgroundColor: '#FF2dab',
            width: 200,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 100
        },
        textButton:{
            fontSize: 20,
            color: 'aliceblue',
            fontWeight: 'bold'
        }
    }
)