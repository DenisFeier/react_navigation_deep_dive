import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    image: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '25%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '700',
    },
});
