import React, {useState} from 'react';
import {
    View,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Keyboard,
    useWindowDimensions,
    Text,
} from 'react-native';
import InputText from '../../components/InputText';
import ThemedCard from '../../components/ThemedCard';
import RoundedButton from '../../components/RoundedButton';
import {styles} from './styles';
import DismissKeyboardOnMountHOC from '../../hoc/DismissKeyboardOnMountHOC';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoginStackParams} from '../../router/LoginStack/params';

const LoginScreen = () => {
    const navigation =
        useNavigation<StackNavigationProp<LoginStackParams, 'Login'>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {width} = useWindowDimensions();
    const cardWidth = width * 0.8;

    const handle = () => {
        // Perform login logic with the entered username and password
        console.log('Logging in with:', email, password);
    };

    const onResetPasswordTapped = () => {
        navigation.push('ResetPassword');
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
                            <InputText
                                onChangeText={setPassword}
                                placeholder="Password"
                                secureTextEntry
                                style={styles.cardItemsMargin}
                            />
                            <RoundedButton
                                text="Login"
                                onPress={handle}
                                buttonStyle={[
                                    styles.cardItemsMargin,
                                    styles.loginBtn,
                                ]}
                            />
                            <TouchableOpacity
                                onPress={onResetPasswordTapped}
                                style={styles.cardItemsMargin}>
                                <Text style={styles.forgotPassword}>
                                    Forgot your password?
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </ThemedCard>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default DismissKeyboardOnMountHOC(LoginScreen);
