import React, { useState } from "react";
import style, { cores } from "./style";
import Radio from "../../component/Radio";
import CheckBox from "../../component/Checkbox/index";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    View
} from "react-native";


//TESTE CAMPO HORÁRIO



export function RegisterClient() {

    const [selected, setSelected] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const alternarSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    const optionsCheckBox = [
        { text: 'Segunda-Feira', id: 1 },
        { text: 'Terça-Feira', id: 2 },
        { text: 'Quarta-Feira', id: 3 },
        { text: 'Quinta-Feira', id: 4 },
        { text: 'Sexta-Feira', id: 5 },
    ]

    return (
        <ScrollView style={{ flex: 1, backgroundColor: cores.branco }}>
            <Text style={style.label}>Registrar</Text>

            <TextInput style={style.input} placeholder="Nome"></TextInput>

            <TextInput style={style.input} placeholder="Sobrenome"></TextInput>

            <TextInput
                style={style.input}
                placeholder="Telefone"
                keyboardType="numeric"
            ></TextInput>

            <TextInput
                style={style.input}
                placeholder="Telefone whatsapp"
                keyboardType="numeric"
            ></TextInput>

            <TextInput style={style.input} placeholder="E-mail"></TextInput>

            <Text style={style.txtRadio}>Dias para entrega</Text>


            <CheckBox
                options={optionsCheckBox} onChange={op => alert(op)}
            />


            <TextInput style={style.input} placeholder="Horário de entrega">



            </TextInput>

            <TextInput style={style.input} placeholder="Preferência de contato"></TextInput>

            <Text style={style.txtRadio}>Tipo de estabelecimento</Text>

            <Radio
                //##Tratar ambos valores do radio para enviar para o banco-------------------------------------------Tarefa

                //posicao selecionada
                selected={
                    selected
                }


                //Options recebe um array das informações
                options={
                    ['Residencial', 'Comercial']
                }

                //Hoizontal recebe true
                horizontal={
                    true
                }

                onChangeSelect={(opt, i) => {
                    const optionSelected = (i)
                    setSelected(i)
                }
                } />

            <View style={style.viewSwitch}>
                <Text style={style.txtSwitch}>Entrega Rastreável </Text>
                <Switch
                    //Cor barrinha de trás
                    trackColor={{ false: cores.cinza, true: cores.cinza }}

                    //Cor bolinha da frente
                    thumbColor={!isEnabled ? cores.branco : cores.roxo}
                    onValueChange={alternarSwitch}
                    value={isEnabled}
                />
            </View>





            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}