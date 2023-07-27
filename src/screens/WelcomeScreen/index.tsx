import React from 'react';
import {View, Text} from 'react-native';
import RoundedButton from '../../components/RoundedButton';
import {styles} from './styles';
import AppLogo from '../../components/AppLogo';

const WelcomeScreen = () => {
    const onLoginTapped = () => {};

    const onRegisterTapped = () => {};

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
