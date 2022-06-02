import { StyleSheet } from 'react-native'
import * as C from '../../assets/contants/colors';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderBottomColor: C.orange,
    },
    mainInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '85%',
        marginBottom: 2,
    },
    titleError: {
        color: 'red'
    },
    title: {
        fontSize: 14,

    },
    borderError: {
        color: 'red'
    }
});
export default styles;