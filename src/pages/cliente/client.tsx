import React from 'react';

import { 
    View, 
    Text, 
    FlatList,
    TouchableOpacity,
} from 'react-native';

import style, { cores } from './style';


export function Client({ navigation }){
    return (
        <View style={{flex:1, backgroundColor: cores.branco}}>
            <TouchableOpacity 
            style={style.button} 
            onPress={() =>{
                navigation.navigate('RegisterClient')
            }}>
                <Text style={{color: cores.branco}} >+ Adicionar</Text>
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}