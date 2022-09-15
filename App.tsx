import React from 'react';
import { StatusBar, StyleSheet,Text, View } from 'react-native';
import { AppRoutes } from './src/routes/app.routes';

export default function App() {
    return(
        <View style={{flex: 1}}>
            <StatusBar />
            <AppRoutes></AppRoutes>
        </View>
    )
}