import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    StyleProp,
    ViewStyle,
    TextStyle,
} from 'react-native';
import THEME from '../../constants/Theme';

interface RoundedButtonProps {
    text: string;
    onPress: () => void;
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
    text,
    onPress,
    buttonStyle,
    textStyle,
}) => {
    return (
        <TouchableOpacity
            style={[styles.button, buttonStyle]}
            onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 20,
        backgroundColor: THEME.colors.primary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        minWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: THEME.colors.background,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500',
    },
});

export default RoundedButton;
