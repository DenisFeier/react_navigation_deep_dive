import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
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
            <Stack.Group>
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Group>
            <Stack.Group
                screenOptions={{
                    presentation: 'modal',
                    ...TransitionPresets.FadeFromBottomAndroid,
                }}>
                <Stack.Screen name="Policy" component={ModalScreen} />
                <Stack.Screen name="Terms" component={ModalScreen} />
            </Stack.Group>
        </Stack.Navigator>
    );
};

export default SettingsStack;
