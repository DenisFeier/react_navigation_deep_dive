import React from 'react';
import {TextInput, StyleSheet, View, StyleProp, ViewStyle} from 'react-native';
import THEME from '../../constants/Theme';

interface InputTextProps {
    placeholder: string;
    secureTextEntry?: boolean;
    onChangeText: (text: string) => void;
    style?: StyleProp<ViewStyle>;
}

const InputText: React.FC<InputTextProps> = ({
    placeholder,
    secureTextEntry = false,
    onChangeText,
    style,
}) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                onChangeText={onChangeText}
                placeholderTextColor={THEME.colors.secondary}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: THEME.colors.background,
        borderRadius: 10,
        paddingHorizontal: 16,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        color: THEME.colors.text,
    },
});

export default InputText;
