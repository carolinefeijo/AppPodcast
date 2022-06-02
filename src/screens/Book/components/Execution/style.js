import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    mainContainer: {
        marginTop: 5,
        flexDirection: 'row',
        width: '88%',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: C.gray5,
        fontFamily: F.PS,
        fontSize: 11,
        fontWeight: '600'
    }

});
export default styles;