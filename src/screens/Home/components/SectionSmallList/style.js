import { StyleSheet } from 'react-native' 
import * as F from '../../../../assets/contants/fonts'
import * as C from '../../../../assets/contants/colors'

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    },
    renderItemImageSmall: {
        width: 94,
        height: 94,
        margin: 10,
        borderRadius: 15
    },
    renderItemImageLarge: {
        width: 122,
        height: 143,
        margin: 10,
        borderRadius: 15
    },
    renderItemImageBig:{
        width: 280,
        height: 180,
        margin: 10,
        borderRadius: 18
    },
    title: {
        fontSize: 14,
        fontFamily: F.PS,
        color: C.gray1,
        marginLeft: 15
    },
    renderTitle: {
        left: 10,
        fontSize: 11,
        fontFamily: F.PBD,
        color: C.black2
    },
    renderDescription:{
        left: 10,
        fontSize: 9,
        color: C.gray2,
        fontFamily: F.PS
    },
    safeAreaContainer: {
        marginLeft: 5
    }   
   
});
export default styles ;