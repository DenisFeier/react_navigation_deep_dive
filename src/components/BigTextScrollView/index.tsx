import React from 'react';
import {ScrollView, Text, ViewStyle} from 'react-native';
import {styles} from './styles';

type BigTextScrollViewProps = {
    bigText: string;
    style?: ViewStyle;
};

const BigTextScrollView: React.FC<BigTextScrollViewProps> = ({
    bigText,
    style,
}) => {
    return (
        <ScrollView
            contentContainerStyle={styles.scrollContainer}
            style={style}>
            <Text style={styles.text}>{bigText}</Text>
        </ScrollView>
    );
};

export default BigTextScrollView;
