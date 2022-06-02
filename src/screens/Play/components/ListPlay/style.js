import { StyleSheet } from 'react-native'
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    renderItemContainer: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    renderItemImageSmall: {
        width: 264,
        height: 264,
        borderRadius: 15
    },
    renderItemImageLarge: {
        width: 300,
        height: 317,
    },
    renderMainContainer: {
        marginTop: 40,
        marginRight: 60
    },
    renderTitle: {
        fontSize: 20,
        fontFamily: F.PS,
        color: C.black2,
        fontWeight: '600'
    },
    renderSubTitle: {
        fontSize: 14,
        fontFamily: F.PS,
        color: C.gray5,
        fontWeight: '600'
    },
    renderItemPlay: {
        marginTop: 40
    },
    mainTime: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '86%',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: F.PS,
        fontSize: 12,
        color: C.lightgray,
        fontWeight: '600'
    }
});
export default styles;