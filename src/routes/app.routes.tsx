import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import { Client } from '../pages/cliente/client';
import { Sync } from '../pages/sync/sync';
import { RegisterClient } from '../pages/registerClient/registerClient';

import { cores } from '../pages/cliente/style';







//Configurações de rotas

//Botões de navegação parte de baixo
const Tab = createBottomTabNavigator();
export function AppRoutes(){
    return(
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: cores.branco,
                tabBarInactiveTintColor: cores.cinza,
                tabBarActiveBackgroundColor: cores.branco,
                tabBarInactiveBackgroundColor: cores.roxo,

                tabBarLabelStyle: {
                    width: '100%',
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 16,
                    lineHeight: 21,
                    marginTop: 3,
                    paddingTop: 21,
                    backgroundColor: cores.roxo,
                },
                tabBarStyle: {
                    width: '100%',
                    height: 70,
                },

                tabBarIconStyle:{
                    display:'none',
                }
                }}>
                <Tab.Screen name="Cliente" component={ClientTabStack} 
                options={{
                    headerTransparent: true,
                    headerShown: false,
                }}/>
                <Tab.Screen name="Sync" component={Sync}/>
            </Tab.Navigator>
            </NavigationContainer>

    )
}

//Navegação adicionar cliente
const ClientStack = createStackNavigator();

export function ClientTabStack(){
    return (
        <ClientStack.Navigator>
            <ClientStack.Screen name="Clientes" component={Client}/>
            <ClientStack.Screen name="RegisterClient" component={RegisterClient} 
            options={{title: 'Novo cliente', }}/>
        </ClientStack.Navigator>
    )
}





