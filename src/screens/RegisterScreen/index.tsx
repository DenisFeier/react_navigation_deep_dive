import React, {useState} from 'react';
import {
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    useWindowDimensions,
} from 'react-native';
import InputText from '../../components/InputText';
import ThemedCard from '../../components/ThemedCard';
import RoundedButton from '../../components/RoundedButton';
import {styles} from './styles';
import DismissKeyboardOnMountHOC from '../../hoc/DismissKeyboardOnMountHOC';

const RegisterScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const {width} = useWindowDimensions();
    const cardWidth = width * 0.8;

    const handle = () => {
        console.log('Logging in with:', email, password, rePassword);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={styles.container} behavior={'height'}>
                <View style={styles.container}>
                    <ThemedCard style={{width: cardWidth}}>
                        <View>
                            <InputText
                                onChangeText={setEmail}
                                placeholder="Email"
                                style={styles.cardItemsMargin}
                            />
                            <InputText
                                onChangeText={setPassword}
                                placeholder="Password"
                                secureTextEntry
                                style={styles.cardItemsMargin}
                            />
                            <InputText
                                onChangeText={setRePassword}
                                placeholder="Re-Password"
                                secureTextEntry
                                style={styles.cardItemsMargin}
                            />
                            <RoundedButton
                                text="Register"
                                onPress={handle}
                                buttonStyle={styles.cardItemsMargin}
                            />
                        </View>
                    </ThemedCard>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboardOnMountHOC(RegisterScreen);
