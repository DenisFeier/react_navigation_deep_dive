import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TabBarParams} from './params';
import {TabbarIconProps} from '../../types/TabBarIconProps';
import THEME from '../../constants/Theme';
import ProductStack from '../ProductStack';
import CategoryDrawer from '../CategoryDrawer';
import SettingsStack from '../SettingsStack';

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
            <Tab.Group>
                <Tab.Screen
                    name="Products"
                    component={ProductStack}
                    options={() => ({
                        tabBarIcon: ProductsIcon,
                    })}
                />
                <Tab.Screen
                    name="Categories"
                    component={CategoryDrawer}
                    options={() => ({
                        tabBarIcon: CategoryIcon,
                    })}
                />
                <Tab.Screen
                    name="SettingsStack"
                    component={SettingsStack}
                    options={() => ({
                        tabBarIcon: SettingsIcon,
                        tabBarLabel: 'Settings',
                    })}
                />
            </Tab.Group>
        </Tab.Navigator>
    );
};

export default TabBar;
