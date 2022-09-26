import React, { useState } from "react";
import style, { cores } from "./style";
import Radio from "../../component/Radio";
import CheckBox from "../../component/Checkbox/index";
import DatePicker from 'react-native-date-picker'
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    Switch,
    View,
    Button

} from "react-native";

export function RegisterClient() {
    //Button - Residencial ou comercial
    const [selected, setSelected] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);

    //Toogle - Entrega rastrável
    const alternarSwitch = () => {
        setIsEnabled(previousState => !previousState);
    }

    //CheckBox - Dias da entrega
    const optionsCheckBox = [
        { text: 'Segunda-Feira', id: 1 },
        { text: 'Terça-Feira', id: 2 },
        { text: 'Quarta-Feira', id: 3 },
        { text: 'Quinta-Feira', id: 4 },
        { text: 'Sexta-Feira', id: 5 },
    ]

    //Hora da entrega
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    //Preferência de contato
    const optionsPreferenciaContato = [
        { text: 'E-mail', id: 1 },
        { text: 'Fax', id: 2 },
        { text: 'WhatsApp', id: 3 },
        { text: 'Telefonema', id: 4 },
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
                options={optionsCheckBox} 
                onChange={op => alert(op)}
                multiple
            />

            <Text style={style.txtRadio}>Hora da entrega</Text>
            <View style={style.buttonTime}>
                <>
                    <Button title="Escolher" onPress={() => setOpen(true)} />
                    <DatePicker
                        modal
                        open={open}
                        date={date}
                        mode={'time'}
                        onConfirm={(date) => {
                            setOpen(false)
                            setDate(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </>
                <Text style={{marginTop: 10}} >A entrega ocorrerá as {date.getHours()}:{date.getMinutes()}</Text>
            </View>
            
            <Text style={[style.txtRadio, {marginTop: 50}]}>Preferência de contato</Text>
            <CheckBox
                options={optionsPreferenciaContato} onChange={op => alert(op)}
            />

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