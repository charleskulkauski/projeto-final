import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Client } from '../pages/client';
import { Sync } from '../pages/sync';

import { cores } from '../style/styles';

const { Navigator, Screen } = createBottomTabNavigator();


export function AppRoutes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{
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
                <Screen name="Cliente" component={Client} />
                <Screen name="Sync" component={Sync}/>
            </Navigator>
        </NavigationContainer>
    )
}