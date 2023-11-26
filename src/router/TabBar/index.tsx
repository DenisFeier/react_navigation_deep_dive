import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBarParams} from './params';
import WelcomeScreen from '../../screens/WelcomeScreen';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabbarIconProps} from '../../types/TabBarIconProps';
import ProductStack from '../ProductStack';

const Tab = createBottomTabNavigator<TabBarParams>();

const ProductsIcon: React.FC<TabbarIconProps> = ({color, size}) => {
    return <Feather name="list" color={color} size={size} />;
};

const CategoryIcon: React.FC<TabbarIconProps> = ({color, size}) => {
    return <MaterialIcons name="category" color={color} size={size} />;
};

const SettingsIcon: React.FC<TabbarIconProps> = ({color, size}) => {
    return <Feather name="settings" color={color} size={size} />;
};

const TabBar = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Tab.Screen
                name="Products"
                component={ProductStack}
                options={{
                    tabBarIcon: ProductsIcon,
                }}
            />

            <Tab.Screen
                name="Categories"
                component={WelcomeScreen}
                options={{
                    tabBarIcon: CategoryIcon,
                }}
            />

            <Tab.Screen
                name="Settings"
                component={WelcomeScreen}
                options={{
                    tabBarIcon: SettingsIcon,
                }}
            />
        </Tab.Navigator>
    );
};

export default TabBar;
