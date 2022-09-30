import { StyleSheet } from 'react-native';

export const cores = {
    roxo: '#6C63FF',
    branco: '#FFFAFA',
    cinza: '#C2C2C2',
}

export default StyleSheet.create({
    preencher: {
        flex: 1,
    },

    button: {
        backgroundColor: '#6C63FF',
        fontColor: '#FFFAFA',
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
    },

    boxRegistro:{
        backgroundColor: 'white',
        width: '100%',
        height: 60,
        marginTop: 4,
        flexDirection: 'column',
    },

    textoRegistro: {
        color: 'black',
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 5
    }
})

