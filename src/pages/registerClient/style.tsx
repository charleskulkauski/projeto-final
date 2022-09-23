import { StyleSheet } from 'react-native';

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
        marginBottom: 10,
        padding: 10,
        height: 45,
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    txtRadio: {
        width: "90%",
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 7,
        height: 25,
        color: cores.roxo,
        fontSize: 14,
        fontWeight: 'bold',

    },

    viewSwitch: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        height: 80,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        backgroundColor: '#e0e0e059'
    },

    txtSwitch:{
        fontWeight: 'bold',
        fontSize: 14,
        color: cores.roxo,
    },

    button: {
        width: "90%",
        height: 60,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 20,
        marginTop: 25,
        borderRadius: 15,
        borderColor: cores.roxo,
        borderWidth: 2,
        backgroundColor: cores.branco,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    },

    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: cores.roxo,
    }
})

