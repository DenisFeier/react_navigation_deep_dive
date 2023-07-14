import {
    ANTENNA,
    DRONE,
    MACBOOK,
    METRIX,
    SHIRT,
    STEAK,
    VEGETARIAN,
} from '../constants/Images';
import {Category} from '../types/Category';
import {Product} from '../types/Product';
import {DUMMY_TEXT} from './dummyText';

export const DUMMY_DATA: Product[] = [
    {
        id: 'p1',
        name: 'Antenna',
        imageURL: ANTENNA,
        category: Category.TECH,
        description: DUMMY_TEXT,
    },
    {
        id: 'p2',
        name: 'Drone',
        imageURL: DRONE,
        category: Category.TECH,
        description: DUMMY_TEXT,
    },
    {
        id: 'p3',
        name: 'Macbook',
        imageURL: MACBOOK,
        category: Category.TECH,
        description: DUMMY_TEXT,
    },
    {
        id: 'p4',
        name: 'Metrix',
        imageURL: METRIX,
        category: Category.TECH,
        description: DUMMY_TEXT,
    },
    {
        id: 'p5',
        name: 'Shirt',
        imageURL: SHIRT,
        category: Category.CLOTHES,
        description: DUMMY_TEXT,
    },
    {
        id: 'p6',
        name: 'Steak',
        imageURL: STEAK,
        category: Category.FOOD,
        description: DUMMY_TEXT,
    },
    {
        id: 'p7',
        name: 'Vegetarian',
        imageURL: VEGETARIAN,
        category: Category.FOOD,
        description: DUMMY_TEXT,
    },
];
