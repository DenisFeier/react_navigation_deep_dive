import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {TabBarParams} from './params';

const HomeScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Home!</Text>
        </View>
    );
};

const SettingsScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Settings!</Text>
        </View>
    );
};

const Tab = createBottomTabNavigator<TabBarParams>();

const TabBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Products" component={HomeScreen} />
            <Tab.Screen name="Categories" component={SettingsScreen} />
        </Tab.Navigator>
    );
};

export default TabBar;
