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

const ForgotPasswordScreen = () => {
    const [email, setEmail] = useState('');
    const {width} = useWindowDimensions();
    const cardWidth = width * 0.8;

    const handle = () => {
        // Perform login logic with the entered username and password
        console.log('Logging in with:', email);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                style={[styles.container, styles.center]}
                behavior={'height'}>
                <View style={[styles.container, styles.center]}>
                    <ThemedCard style={{width: cardWidth}}>
                        <View style={styles.center}>
                            <InputText
                                onChangeText={setEmail}
                                placeholder="Email"
                                style={styles.cardItemsMargin}
                            />
                            <RoundedButton
                                text="Send Email"
                                onPress={handle}
                                buttonStyle={[
                                    styles.cardItemsMargin,
                                    styles.loginBtn,
                                ]}
                            />
                        </View>
                    </ThemedCard>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboardOnMountHOC(ForgotPasswordScreen);
