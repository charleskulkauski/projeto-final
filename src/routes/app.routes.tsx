import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from "@react-navigation/stack";

import { Client } from '../pages/cliente/client';
import { Sync } from '../pages/sync/sync';
import { RegisterClient } from '../pages/registerClient/registerClient';

import { cores } from '../pages/cliente/style';


//Botões de navegação parte de baixo
const ClientStack = createStackNavigator();
const Tab = createBottomTabNavigator();
export function AppRoutes() {
    return (
        <NavigationContainer>
            <ClientStack.Navigator>
            <ClientStack.Screen name="TabNavigation" component={TabNavigation} options={{headerShown: false}}/>
            <ClientStack.Screen name="Clientes" component={Client} />
            <ClientStack.Screen name="RegisterClient" component={RegisterClient}
                options={{ title: 'Novo cliente', headerTintColor: cores.roxo }} />
        </ClientStack.Navigator>
        </NavigationContainer>

    )
}

export function TabNavigation(){
    return(
        <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: cores.branco,
                    tabBarInactiveTintColor: cores.cinza,
                    tabBarActiveBackgroundColor: cores.branco,
                    tabBarInactiveBackgroundColor: cores.roxo,
                    headerTintColor: cores.roxo,

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
                        display: 'flex',
                        width: '100%',
                        height: 70,
                    },

                    tabBarIconStyle: {
                        display: 'none',
                    }
                }}>
                <Tab.Screen name="Cliente" component={Client}/>
                <Tab.Screen name="Sync" component={Sync} />
            </Tab.Navigator>
    )
}

//Navegação adicionar cliente

const RegisterStack = createStackNavigator();
export function RegisterTabStack() {
    return (
        <RegisterStack.Navigator>
                <RegisterStack.Screen name="Clientes" component={Client} />
                <RegisterStack.Screen name="RegisterClient" component={RegisterClient}
                    options={{ title: 'Novo cliente' }} />
            </RegisterStack.Navigator>
    )
}






