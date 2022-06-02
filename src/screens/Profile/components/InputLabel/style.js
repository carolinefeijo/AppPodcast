import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts';
import * as C from '../../../../assets/contants/colors';

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
    title: {
        fontFamily : F.PR,
        fontSize: 14,
        color: C.lightgray
    }
 
});
export default styles;