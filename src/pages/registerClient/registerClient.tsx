import React, { useState } from "react";
import style, { cores } from "./style";
import { useForm, Controller } from "react-hook-form";
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
import firestore from '@react-native-firebase/firestore';

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

    //Options preferência de contato
    const optionsPreferenciaContato = [
        { text: 'E-mail', id: 1 },
        { text: 'Fax', id: 2 },
        { text: 'WhatsApp', id: 3 },
        { text: 'Telefonema', id: 4 },
    ]

    //Options Telefone whatsapp
    const optionsTelefoneWhatsApp = [
        { text: 'Este número de telefone é do WhatsApp?', id: 1 },
    ]

    //Hora da entrega
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)

    //Pegando informações das inputs manualmente(retirar após utilizar Hook Form)
    function handleSignIn() {
        const data = {
            nome,
            sobrenome,
            telefone,
            email,
            date,

        }

        console.log(data)
    }



    //-----------COMO ENVIAR PARA O FIREBASE
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');

    //Salvando estados, valores radio
    const [diaEntrega, setDiaEntrega] = useState('');
    const [horaEntrega, setHoraEntrega] = useState('');
    const [estabelecimento, setEstabeleciomento] = useState('');
    const [preferenciaContato, setPreferenciaContato] = useState('');
    const [entregaRastreavel, setEntregaRastreavel] = useState('');
    const [telefoneWhatsApp, setTelefoneWhatsApp] = useState<boolean>(false);

    //----------------------------------------------------------------Retirar após hook form

    //TESTE HOOK FORM ----------------------------------------------------------------------

    type FormData = {
        nome: string;
        sobrenome: string;
        telefone: string;
        telefoneWhatsApp: string;
        email: string;
    }
    const { control, handleSubmit } = useForm<FormData>();
    const onSubmit = (data: FormData) => console.log(data);


    //-------------------------------------------------------------------Testehookform


    function enviarForm() {
        firestore().collection('dadosCliente').add({
            nome: nome,
            sobrenome: sobrenome,
            telefone: telefone,
            email: email,
        })
    }

    return (
        <ScrollView style={{ flex: 1, backgroundColor: cores.branco }}>
            <Text style={style.label}>Registrar</Text>

            <Controller
                control={control}
                name="nome"
                render={({ field: { value, onChange } }) => (

                    <TextInput
                        style={style.input}
                        placeholder="Nome"
                        value={value}
                        onChangeText={onChange} />

                )}
            />

            <Controller
                control={control}
                name="sobrenome"
                render={({ field: { value, onChange } }) => (

                    <TextInput
                        style={style.input}
                        placeholder="Sobrenome"
                        value={value}
                        onChangeText={onChange} />

                )}
            />

            <Controller
                control={control}
                name="telefone"
                render={({ field: { value, onChange } }) => (

                    <TextInput
                        style={style.input}
                        placeholder="Telefone"
                        value={value}
                        keyboardType="numeric"
                        onChangeText={onChange} />

                )}
            />


            <CheckBox
                style={{ marginTop: 15 }}
                options={optionsTelefoneWhatsApp}
                onChange={op => setTelefoneWhatsApp(true)}
                //onChange={op => setTelefoneWhatsApp(true) {(value:boolean)}}
                multiple
            />

            <Controller
                control={control}
                name="telefoneWhatsApp"
                render={({ field: { value, onChange } }) => (

                    <TextInput
                        style={style.input}
                        placeholder="Número de telefone do WhatsApp"
                        value={value}
                        keyboardType="numeric"
                        onChangeText={onChange}
                    />

                )}
            />


            <Controller
                control={control}
                name="email"
                render={({ field: { value, onChange } }) => (

                    <TextInput
                        style={style.input}
                        placeholder="Email"
                        value={value}
                        onChangeText={onChange} />

                )}
            />
            
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
                <Text style={{ marginTop: 10 }} >A entrega ocorrerá as {date.getHours()}:{date.getMinutes()}</Text>
            </View>

            <Text style={[style.txtRadio, { marginTop: 50 }]}>Preferência de contato</Text>
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




            <TouchableOpacity style={style.button} onPress={handleSubmit(onSubmit)}
            >
                <Text style={style.textButton}>Salvar</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}