import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {LoginStackParams} from './params';
import LoginScreen from '../../screens/LoginScreen';
import WelcomeScreen from '../../screens/WelcomeScreen';
import RegisterScreen from '../../screens/RegisterScreen';
import ForgotPasswordScreen from '../../screens/ForgotPasswordScreen';

const Stack = createStackNavigator<LoginStackParams>();

const LoginStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{
                    header: () => null,
                }}
            />

            <Stack.Screen name="Login" component={LoginScreen} />

            <Stack.Screen name="Register" component={RegisterScreen} />

            <Stack.Screen
                name="ResetPassword"
                component={ForgotPasswordScreen}
                options={{
                    title: 'Reset Password',
                }}
            />
        </Stack.Navigator>
    );
};

export default LoginStack;
