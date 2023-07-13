import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabBarParams} from './params';
import {TabbarIconProps} from '../../types/TabBarIconProps';
import THEME from '../../constants/Theme';
import ProductStack from '../ProductStack';

const CategoryScreen = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Category!</Text>
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
                tabBarActiveTintColor: THEME.colors.primary,
            }}>
            <Tab.Screen
                name="Products"
                component={ProductStack}
                options={() => ({
                    tabBarIcon: ProductsIcon,
                })}
            />
            <Tab.Screen
                name="Categories"
                component={CategoryScreen}
                options={() => ({
                    tabBarIcon: CategoryIcon,
                })}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={() => ({
                    tabBarIcon: SettingsIcon,
                })}
            />
        </Tab.Navigator>
    );
};

export default TabBar;
