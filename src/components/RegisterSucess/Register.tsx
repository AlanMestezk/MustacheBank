import React, { useState }                         from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Picker }                                  from "@react-native-picker/picker";
import { Styles }                                  from "./styles";
import Slider                                      from "@react-native-community/slider";

interface GenderProps {

  key   : number;
  gender: string;
}

export const Register: React.FC = () => {

    
    const [listGender] = useState<GenderProps[]>(

        [
            { key: 1, gender: "Masculino" },
            { key: 2, gender: "Feminino" },
            { key: 3, gender: "Outro" },
        ]
    );
    const [gender, setGender] = useState<number | any>(listGender[0]?.key || 0);
    const [name,     setName] = useState<string | any>('')
    const [cpf,       setCpf] = useState<string | number | any>()
    const [cell,     setCell] = useState<string | number | any>()
    const [slider, setSlider] = useState<number>(500)

    const genderItem = listGender.map((value) => (

        <Picker.Item 
            key={value.key} 
            value={value.key} 
            label={value.gender} 
        />
    ));

    const handleInputName = (inputName: string)=>{
        setName(inputName)
    }

    const handleInputCpf = (inputCpf: number | string)=>{
        setCpf(inputCpf)
    }

    const handleInputCell = (inputCell: number | string)=>{
        setCell(inputCell)
    }

    const handleInputSlider = (value: number)=>{
        setSlider(value)
    }

    const hanldeShowAccount = ()=>{

        alert(`${name}, bem vindo!!  Sua conta esta em processamento, assim que possivel entraremos em contato no numero ${cell}`)
        

        setName('')
        setCpf('')
        setGender(0),
        setSlider(500)
    }

    return (
        <View style={Styles.content}>

            <Text style={Styles.title}>REGISTRE-SE</Text>

            <TextInput
                placeholder="Digite seu nome completo..."
                value={name}
                onChangeText={handleInputName}
                style={Styles.input}
            />

            <TextInput
                placeholder="Digite seu cpf..."
                value={cpf}
                onChangeText={handleInputCpf}
                keyboardType="numeric"
                style={Styles.input}
            />

            <TextInput
                placeholder="Digite seu celular..."
                value={cell}
                onChangeText={handleInputCell}
                keyboardType="numeric"
                style={Styles.input}
            />

            <Text style={Styles.titlePicker}>Gênero</Text>
            <Picker
                selectedValue={gender}
                onValueChange={
                    (itemValue, __itemIndex) => setGender(itemValue)
                }
                itemStyle={{ color: 'blue', fontSize: 16 }}
                style={Styles.picker}
            >

                {genderItem}

            </Picker>

            <Text style={Styles.titleSlider}>Qual o limite desejado?</Text>
            
            <Slider
                style={Styles.slider}
                minimumValue={200}
                maximumValue={1000}
                step={10}
                value={slider}
                onValueChange={handleInputSlider}
                minimumTrackTintColor="#FF2dab" // Cor da trilha mínima
                maximumTrackTintColor="#f00" // Cor da trilha máxima
                thumbTintColor="#FF2dab" // Cor do polegar
            />

            <Text style={Styles.titleSlider2}>Credito inicial: {slider.toFixed(0)} reais</Text>

            {


            }
            
            <TouchableOpacity 
                style={[Styles.divButton, !name || !cpf || !cell ? { display: 'none' } : null]} 
                onPress={hanldeShowAccount}
            >

                <Text style={Styles.textButton}>Pronto!</Text>

            </TouchableOpacity>

        </View>
    );
};