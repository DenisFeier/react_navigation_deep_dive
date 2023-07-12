import {StyleSheet} from 'react-native';
import THEME from '../../constants/Theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: THEME.colors.background,
    },
    titleContainer: {
        marginTop: 50,
        marginBottom: 30,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: THEME.colors.text,
    },
    buttonsContainer: {
        marginBottom: 100,
        width: '80%',
    },
    loginButton: {
        backgroundColor: THEME.colors.primary,
        marginBottom: 20,
    },
    registerButton: {
        backgroundColor: THEME.colors.secondary,
    },
    buttonText: {
        fontSize: 18,
    },
});
