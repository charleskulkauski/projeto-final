import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    FlatList,
    TouchableOpacity,
} from 'react-native';
import style, { cores } from './style';
import firestore from '@react-native-firebase/firestore';

interface Client{
    nome: string,
    sobrenome: string,
    telefone: string,
}

export function Client({ navigation }){
    const [clientes, setClientes] = useState<Client[]>([]);

    useEffect (() => {

        const subscriber = 
        firestore().collection('dadosCliente')

        .onSnapshot(querySnapshot =>{
            const storageClient: Client[] = [];
            querySnapshot.forEach(document => {
                const data = document.data() as Client;
                const id = document.id;
                const client = {...data, id};
                storageClient.push(client);

                
            });
            setClientes(storageClient);

        });

        return() => subscriber();
    }, []);



    return (
        <View style={{flex:1, backgroundColor: cores.branco}}>
            <TouchableOpacity 
            style={style.button} 
            onPress={() =>{
                navigation.navigate('RegisterClient')
            }}>
                <Text style={{color: cores.branco}} >+ Adicionar</Text>
            </TouchableOpacity>

            <View>
                <FlatList
                showsVerticalScrollIndicator={false}
                data={clientes}
                renderItem={({item}) => (
                    <View style={style.boxRegistro}>
                        <Text style={style.textoRegistro}>{item.nome} {item.sobrenome}</Text>
                        <Text style={[style.textoRegistro, {color: '#6c7174', fontSize: 15}]}>{item.telefone}</Text>
                    </View>
                )}

                keyExtractor={({id}) => id}
                    ListEmptyComponent={
                        <Text style={{marginTop: '70%', marginLeft: '30%'}}>Nenhum cliente adicionado</Text>
                    }
                />

            </View>

            
        </View>
    )
}
