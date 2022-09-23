import { StyleSheet } from 'react-native';
import { cores } from '../../pages/cliente/style';

export default StyleSheet.create({
    container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    
    optContainer: {
        flexDirection: 'row',
        justifyContaine: 'space-between',
        marginBottom: 7,
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

    innerCircle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: cores.roxo,
    },
    txtOption: {
        fontSize: 14,
        marginLeft: 4,
    },
})