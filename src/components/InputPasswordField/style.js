import { StyleSheet } from 'react-native'
import * as C from '../../assets/contants/colors';

const styles = StyleSheet.create({
    container: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#EA7317',
    },
    mainInput: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    input: {
        width: '85%',
        marginBottom: 2
    },
    title: {
        fontSize: 14,
        color: C.lightgray,
    },
});
export default styles;