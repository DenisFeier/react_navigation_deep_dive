import {NavigatorScreenParams} from '@react-navigation/native';
import {ProductStackParams} from '../ProductStack/params';
import {CategoryDrawerParams} from '../CategoryDrawer/params';
import {SettingsStackParams} from '../SettingsStack/params';

export type TabBarParams = {
    Products: NavigatorScreenParams<ProductStackParams>;
    Categories: NavigatorScreenParams<CategoryDrawerParams>;
    SettingsStack: NavigatorScreenParams<SettingsStackParams>;
};
