import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import THEME from '../../constants/Theme';

interface ThemedCardProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

const ThemedCard: React.FC<ThemedCardProps> = ({children, style}) => {
    return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: THEME.colors.secondary,
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginHorizontal: 20,
        marginBottom: 20,
    },
});

export default ThemedCard;
