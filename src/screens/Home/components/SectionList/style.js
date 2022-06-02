import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    },
    title: {
        fontSize: 14,
        fontFamily: F.PS,
        color: C.gray1,
        marginLeft: 15
    },
    safeAreaContainer: {
        marginLeft: 20,
    },
    renderItemImage: {
        width: 350,
        height: 250,
        margin: 10
    }
});
export default styles;