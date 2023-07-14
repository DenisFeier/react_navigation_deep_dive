import {StyleSheet} from 'react-native';
import THEME from '../../constants/Theme';

export const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: THEME.colors.secondary,
        borderRadius: 20,
        height: 80,
        padding: 14,
        backgroundColor: THEME.colors.background,
    },
    buttonIcon: {
        marginRight: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '700',
    },
    logoutButton: {
        backgroundColor: 'red',
        borderColor: 'red',
    },
    logoutButtonText: {
        color: 'white',
    },
});
