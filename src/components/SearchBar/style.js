import { StyleSheet } from 'react-native'
import * as F from '../../assets/contants/fonts';
import * as C from '../../assets/contants/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 15,
        marginHorizontal: 15,
    },
    searchContainer: {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: C.maskPink,
        borderRadius: 22,
    },
    Input: {
        marginLeft: 15,
        width: '50%',
        fontSize: 14,
        fontFamily: F.PR,
        fontWeight: '500',
        color: '#A9A9A9',
    },
    iconSearch: {
        margin: 10,
        width: 20,
        height: 20
    },
});
export default styles;