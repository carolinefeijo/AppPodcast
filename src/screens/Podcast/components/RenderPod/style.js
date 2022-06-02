import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        marginTop: 30,

    },
    title: {
        fontSize: 14,
        fontFamily: F.PS,
        color: C.gray1,
        marginLeft: 15
    },

    safeAreaContainer: {
        marginLeft: 2,

    },
    renderItemImage: {
        width: 248,
        height: 247,
        margin: 15,
        borderRadius: 15
    },
    renderTitle: {
        left: 17,
        fontSize: 12,
        fontFamily: F.PBD,
        color: C.black2
    },
    renderDescription: {
        left: 17,
        fontSize: 10,
        fontFamily: F.PS,
        color: C.gray2
    }

});
export default styles;