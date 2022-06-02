import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        margin: 10
    },
    iconContainer: {
        width: 45,
        height: 45,
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer: {
        alignItems:'center',
        justifyContent:'center'
    },
    title: {
        fontFamily: "Poppins-SemiBold",
        fontSize: 24,
        color: '#333333'
    },
});
export default styles;
