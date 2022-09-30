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
    Button,
    Alert

} from "react-native";
import firestore from '@react-native-firebase/firestore';
import { alertClasses } from "@mui/material";

export function RegisterClient({ navigation }) {
    //Button - Residencial ou comercial
    const [selected, setSelected] = useState(0);
    const [isEnabled, setIsEnabled] = useState(false);

    //Toogle - Entrega rastrável
    const [entregaRastreavel, setEntregaRastreavel] = useState<Boolean>(false)
    const alternarSwitch = () => {
        setIsEnabled(previousState => !previousState);
        if (!isEnabled) {
            setEntregaRastreavel(true);
        }
    }

    //CheckBox - Dias da entrega
    const optionsCheckBox = [
        { text: 'Segunda-Feira', id: 'Segunda-Feira' },
        { text: 'Terça-Feira', id: 'Terça-Feira' },
        { text: 'Quarta-Feira', id: 'Quarta-Feira' },
        { text: 'Quinta-Feira', id: 'Quinta-Feira' },
        { text: 'Sexta-Feira', id: 'Sexta-Feira' },
    ]

    //Options preferência de contato
    const optionsPreferenciaContato = [
        { text: 'E-mail', id: 'E-mail' },
        { text: 'Fax', id: 'Fax' },
        { text: 'WhatsApp', id: 'WhatsApp' },
        { text: 'Telefonema', id: 'Telefonema' },
    ]

    //Options Telefone whatsapp
    const optionsTelefoneWhatsApp = [
        { text: 'Este número de telefone é do WhatsApp?', id: 1 },
    ]

    //Options status da entrega
    const optionsStatusEntrega = [
        { text: 'Ativo', id: 1 },
        { text: 'Inativo', id: 12 }
    ]

    //Hora da entrega
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    //Informações usuário
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [numeroTelefoneWhatsApp, setNumeroTelefoneWhatsApp] = useState('');
    const [email, setEmail] = useState('');


    const [telefoneWhatsApp, setTelefoneWhatsApp] = useState<Boolean>(false)
    function confirmarWpp(data: any) {
        if (data != 1) {
            setTelefoneWhatsApp(false);
        } else {
            setTelefoneWhatsApp(true);
        }
    }

    const [diaEntrega, setDiaEntrega] = useState('');
    function infoDiaEntrega(data: any) {
        setDiaEntrega(data);
    }

    const [tipoEstabelecimento, setTipoEstabelecimento] = useState('');
    function infoEstabelecimento(data: any) {
        setTipoEstabelecimento(`${data}`);
    }

    const [preferenciaContato, setPreferenciaContato] = useState('')
    function infoPreferenciaContato(data: any) {
        setPreferenciaContato(data);
    }

    const [statusEntrega, setStatusEntrega] = useState<Boolean>(false)
    function infoStatus(data: any) {
        if (data == 1) {
            setStatusEntrega(true);
        }
    }

    const [horaEntrega, setHoraEntrega] = useState('')
    function infoHora(date) {
        setHoraEntrega(`${date.getHours()}:${date.getMinutes()}`);
    }

    function enviarForm() {
        if (nome.length 
            || sobrenome.length
            || email.length
            || telefone.length 
            || numeroTelefoneWhatsApp.length 
            < 1) {
            Alert.alert('Alguns campos precisam de atenção')
        } else {
            firestore()
                .collection('dadosCliente')
                .add({
                    nome: nome,
                    sobrenome: sobrenome,
                    telefone: telefone,
                    email: email,
                    numeroTelefoneWhatsApp: numeroTelefoneWhatsApp,
                    tipoEstabelecimento: tipoEstabelecimento,
                    telefoneWhatsApp: telefoneWhatsApp,
                    diaEntrega: diaEntrega,
                    preferenciaContato: preferenciaContato,
                    entregaRastreavel: entregaRastreavel,
                    statusEntrega: statusEntrega,
                    horaEntrega: horaEntrega

                })
                .then(() => {
                    Alert.alert('Cadastrado com sucesso!', 'Cadastrado');
                });

        }

    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: cores.branco }}>
            <Text style={style.label}>Registrar</Text>
            <TextInput
                style={style.input}
                placeholder="Nome"
                onChangeText={(value: string) => setNome(value)}
            />

            <TextInput
                style={style.input}
                placeholder="Sobrenome"
                onChangeText={(value: string) => setSobrenome(value)} />

            <TextInput
                style={style.input}
                placeholder="Telefone"
                keyboardType="numeric"
                onChangeText={(value: string) => setTelefone(value)} />

            <CheckBox
                style={{ marginTop: 15 }}
                options={optionsTelefoneWhatsApp}
                onChange={(op: any) => confirmarWpp(op)}
                multiple
            />

            <TextInput
                style={style.input}
                placeholder="Número de telefone do WhatsApp"
                keyboardType="numeric"
                onChangeText={(value: string) => setNumeroTelefoneWhatsApp(value)}
            />

            <TextInput
                style={style.input}
                placeholder="Email"
                onChangeText={(value: string) => setEmail(value)} />



            <Text style={style.txtRadio}>Dias para entrega</Text>
            <CheckBox
                options={optionsCheckBox}
                onChange={(op: any) => infoDiaEntrega(op)}
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
                            infoHora(date)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </>
                <Text style={{ marginTop: 10 }} >A entrega ocorrerá as {date.getHours()}:{date.getMinutes()}</Text>
            </View>

            <Text style={[style.txtRadio, { marginTop: 50 }]}>Preferência de contato</Text>
            <CheckBox
                options={optionsPreferenciaContato} onChange={(op: any) => infoPreferenciaContato(op)}
            />

            <Text style={style.txtRadio}>Tipo de estabelecimento</Text>
            <Radio

                //posicao selecionada
                selected={
                    selected
                }

                options={
                    ['Residencial', 'Comercial']
                }

                horizontal={
                    true
                }

                onChangeSelect={(opt: any, i) => {
                    setSelected(i)
                    infoEstabelecimento(opt)
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

            <Text style={[style.txtRadio, { marginTop: 25 }]}>Status da entrega</Text>
            <CheckBox
                options={optionsStatusEntrega} onChange={(op: any) => infoStatus(op)}
            />


            <TouchableOpacity style={style.button} onPress={enviarForm}>
                <Text style={style.textButton}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={style.buttonFechar} onPress={() => { navigation.goBack('client') }}>
                <Text style={style.textButtonFechar} onPress={() => { navigation.goBack('client') }}>Fechar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}