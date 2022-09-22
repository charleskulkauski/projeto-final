import { StyleSheet } from 'react-native';
import { cores } from '../../pages/cliente/style';

export default StyleSheet.create({
    optContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    outlineCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderColor: '#777',
        borderWidth: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'

    },
    
    txtOption: {
        fontSize: 14,
        marginLeft: 4,
    },

    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: cores.roxo,
    },

})