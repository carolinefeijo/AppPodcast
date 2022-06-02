import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    mainContainer: {
        backgroundColor: C.card,
        borderRadius: 15,
        width: '100%',
        height: 115,
        flexDirection: 'row',
        marginTop: 10
    },
    renderItemImage: {
        marginTop: 10,
        width: 94,
        height: 95,
        marginLeft: 10
    },
    mainTitle: {
        flex: 1,
        margin: 10,
    },
    renderTitle: {
        color: C.black2,
        fontFamily: F.PBD,
        fontSize: 11
    },
    renderDescription: {
        color: C.orange,
        fontFamily: F.PS,
        fontSize: 11
    },
    renderSubdescription: {
        color: C.gray2,
        fontFamily: F.PS,
        fontSize: 9
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
    directionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    img: {
        width: 3,
        height: 15,
        right: 5,
        marginTop: 2
    },
    playContainer: {
        marginTop: 9,
        right: 7,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    imgPlay: {
        width: 29,
        height: 29
    },

});
export default styles;