import { StyleSheet } from 'react-native';
import { FlipInEasyX } from 'react-native-reanimated';

export const cores = {
    roxo: '#6C63FF',
    branco: '#FFFAFA',
    cinza: '#C2C2C2',
}

export default StyleSheet.create({
    label: {
        width: "90%",
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: cores.roxo,
        fontWeight: 'bold'
    },

    input: {
        borderBottomColor: cores.roxo,
        borderBottomWidth: 1,
        width: "90%",
        marginTop: 10,
        padding: 10,
        height: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    txtRadio: {
        width: "90%",
        marginTop: 20,
        borderColor: '#000',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 25,
        color: cores.roxo,
        fontSize: 14,
        fontWeight: 'bold',
        borderColor: '#000',
        borderWidth: 4,

    },

    button: {
        width: "90%",
        height: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        marginTop: 50,
        borderRadius: 15,
        backgroundColor: cores.roxo,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',

    },

    textButton: {
        fontSize: 20,
        color: cores.branco,
    }
})

