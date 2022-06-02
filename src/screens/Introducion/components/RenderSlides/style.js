import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 80
    },
    logo: {
        resizeMode: 'cover',
    },
    title: {
        textAlign: 'center',
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 36,
        fontFamily: 'Poppins-Black',
        color: '#EA7317'
    },
    description: {
        textAlign: 'center',
        color: '#3A3A3A',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold',
        paddingHorizontal: 40,
    }
});
export default styles;