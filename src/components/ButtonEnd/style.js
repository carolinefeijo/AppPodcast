import { StyleSheet } from 'react-native'
import * as F from '../../assets/contants/fonts';
import * as C from '../../assets/contants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        justifyContent: 'center'
    },
    title :{
        fontSize: 14,
        color: C.gray3,
        fontFamily: F.PS
    },
    button: {
        alignItems: "center",
        justifyContent:'center',
        padding: 10,
        width: '95%',
        borderColor: C.orange,
        borderWidth: 1,
        borderRadius: 46
    },
});
export default styles;