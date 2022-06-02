import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mainContainer: {
        margin: 10,
        backgroundColor: C.masktab,
        width: 370,
        height: 215,
        flexDirection: 'row',
        borderRadius: 10,
    },

    renderTitle: {
        color: C.black2,
        fontFamily: F.PBD,
        fontSize: 14,

    },
    renderDescription: {
        color: C.gray2,
        fontFamily: F.PS,
        fontSize: 11,

    },
    titleContainer: {
        margin: 5,
        marginTop: 10,
        marginLeft: 15,
    },
    subdescription: {
        marginTop: 10,
    },
    TitleGenre: {
        fontFamily: F.PS,
        color: C.black4,
        fontSize: 12
    },
    SubGenre: {
        fontFamily: F.PS,
        fontSize: 11,
        color: C.gray2
    },
    starContainer: {
        marginTop: 10
    },
    playcontainer: {
        flexDirection: 'row',
        marginTop: 12,
        width: '62%',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    renderImagePlay: {
        width: 67,
        height: 37,
    },
    renderImageExec: {
        width: 42,
        height: 42,
    },


});
export default styles;