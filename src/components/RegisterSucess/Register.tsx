import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Styles } from "./styles";

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

            <Text>Qual o limite desejado?</Text>
            
            
        </View>
    );
};