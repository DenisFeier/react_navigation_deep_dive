import React from 'react';
import {View, Text} from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import {styles} from './styles';
import AppLogo from '../../components/AppLogo';
import {useNavigation} from '@react-navigation/native';
import {LoginStackParams} from '../../router/LoginStack/params';
import type {StackNavigationProp} from '@react-navigation/stack';

const WelcomeScreen = () => {
    const navigation =
        useNavigation<StackNavigationProp<LoginStackParams, 'Welcome'>>();

    const onLoginTapped = () => {
        navigation.push('Login');
    };

    const onRegisterTapped = () => {
        navigation.push('Register');
    };

    return (
        <View style={styles.container}>
            <AppLogo />
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Welcome to MyApp!</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <RoundedButton
                    text="Login"
                    onPress={onLoginTapped}
                    buttonStyle={styles.loginButton}
                    textStyle={styles.buttonText}
                />
                <RoundedButton
                    text="Register"
                    onPress={onRegisterTapped}
                    buttonStyle={styles.registerButton}
                    textStyle={styles.buttonText}
                />
            </View>
        </View>
    );
};

export default WelcomeScreen;
