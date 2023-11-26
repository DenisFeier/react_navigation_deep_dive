import {NavigatorScreenParams} from '@react-navigation/native';
import {ProductStackParams} from '../ProductStack/params';

export type TabBarParams = {
    Products: NavigatorScreenParams<ProductStackParams>;
    Categories: undefined;
    Settings: undefined;
};
