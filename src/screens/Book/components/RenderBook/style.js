import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        margin: 10,
    },
    renderItemImage: {
        marginTop: 10,
        width: 124,
        height: 188,
        marginLeft: 10
    },
    renderTitle: {
        color: C.black2,
        fontFamily: F.PBD,
        fontSize: 14
    },
    renderDescription: {
        color: C.gray2,
        fontFamily: F.PS,
        fontSize: 10
    },
    titleContainer: {
        marginLeft: 10,
        marginTop: 10,
    }


});
export default styles;