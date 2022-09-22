import React, { useState } from "react";
import { 
    ScrollView, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Switch } from "react-native";

import style, {cores} from "./style";

//Teste de radio
import Radio from "../../component/Radio"
///////////////////////////////////////////

export function RegisterClient(){
    const [selected, setSelected] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);
    const alternarSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }
    
    return(
        <ScrollView  style={{flex:1, backgroundColor: cores.branco}}>
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
            <Radio
             //posicao selecionada
             selected = {
                selected
            }


            //Options recebe um array das informações
            options = {
                ['Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira']
            } 

            //Hoizontal recebe true
            horizontal = {
                false
            }

            onChangeSelect = {(opt, i) => {
                const optionSelected = (i)
                setSelected(i)
            }
            }/>

            <TextInput style={style.input} placeholder="Horário de entrega"></TextInput>

            <TextInput style={style.input} placeholder="Preferência de contato"></TextInput>

            <Text style={style.txtRadio}>Tipo de estabelecimento</Text>

            <Radio
            //##Tratar ambos valores do radio para enviar para o banco-------------------------------------------Tarefa

            //posicao selecionada
            selected = {
                selected
            }


            //Options recebe um array das informações
            options = {
                ['Residencial', 'Comercial']
            } 

            //Hoizontal recebe true
            horizontal = {
                true
            }

            onChangeSelect = {(opt, i) => {
                const optionSelected = (i)
                setSelected(i)
            }
            }/>

            <Text style= {style.txtRadio}> Entrega Rastreável?
                <Switch
                    //Cor barrinha de trás
                    trackColor= {{ false: cores.cinza, true: cores.cinza}}

                    //Cor bolinha da frente
                    thumbColor= {!isEnabled ? cores.branco : cores.roxo}
                    onValueChange= {alternarSwitch}
                    value= {isEnabled}
                />
            </Text>
           
            <TouchableOpacity style={style.button}>
                <Text style={style.textButton}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}""