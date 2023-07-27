import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import BigTextScrollView from '../../components/BigTextScrollView';
import RoundedButton from '../../components/RoundedButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ModalScreen: React.FC = () => {
    const text = '';
    const title = '';
    const {top} = useSafeAreaInsets();

    const dismiss = () => {};

    return (
        <View style={[styles.container, {marginTop: top}]}>
            <Text style={styles.title} numberOfLines={0}>
                {title}
            </Text>
            <BigTextScrollView bigText={text} />
            <RoundedButton onPress={dismiss} text="Dismiss" />
        </View>
    );
};

export default ModalScreen;
