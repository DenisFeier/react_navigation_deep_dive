import {NavigatorScreenParams} from '@react-navigation/native';
import {ProductStackParams} from '../ProductStack/params';
import {CategoryDrawerParams} from '../CategoryDrawer/params';

export type TabBarParams = {
    Products: NavigatorScreenParams<ProductStackParams>;
    Categories: NavigatorScreenParams<CategoryDrawerParams>;
    Settings: undefined;
};
