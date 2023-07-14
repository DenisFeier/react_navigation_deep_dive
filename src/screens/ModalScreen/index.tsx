import React from 'react';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {SettingsStackParams} from '../../router/SettingsStack/params';
import {StackNavigationProp} from '@react-navigation/stack';
import {styles} from './styles';
import BigTextScrollView from '../../components/BigTextScrollView';
import RoundedButton from '../../components/RoundedButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const ModalScreen: React.FC = () => {
    const navigation =
        useNavigation<StackNavigationProp<SettingsStackParams>>();
    const route = useRoute<RouteProp<SettingsStackParams>>();
    const text = route.params?.text || '';
    const title = route.name;
    const {top} = useSafeAreaInsets();

    const dismiss = () => {
        navigation.goBack();
    };

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
