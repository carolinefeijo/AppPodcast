import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
       
    },
    title: {
        fontSize: 14,
        fontFamily: F.PS,
        color: C.gray1,
        marginLeft: 14
    },
    safeAreaContainer: {
        margin: 7,
    },
    
   
});
export default styles;