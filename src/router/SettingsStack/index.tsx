import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {SettingsStackParams} from './params';
import SettingsScreen from '../../screens/SettingsScreen';
import ModalScreen from '../../screens/ModalScreen';

const Stack = createStackNavigator<SettingsStackParams>();

const SettingsStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Settings" component={SettingsScreen} />

            <Stack.Group
                screenOptions={{
                    presentation: 'modal',
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}>
                <Stack.Screen name="Terms" component={ModalScreen} />
                <Stack.Screen name="Policy" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default SettingsStack;
