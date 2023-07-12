import {StyleSheet} from 'react-native';
import THEME from '../../constants/Theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    center: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardItemsMargin: {
        marginTop: 8,
        marginBottom: 8,
    },
    loginBtn: {
        width: '100%',
    },
    forgotPassword: {
        color: THEME.colors.background,
        fontWeight: 'bold',
        fontSize: 14,
    },
});
