import {ImageSourcePropType} from 'react-native';
import {Category} from './Category';

export type Product = {
    id: string;
    name: string;
    imageURL: ImageSourcePropType;
    category: Category;
    description: string;
};
