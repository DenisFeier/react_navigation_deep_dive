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

const description =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, " +
    'when an unknown printer took a galley of type and scrambled it to make a type specimen book. ' +
    'It has survived not only five centuries, but also the leap into electronic typesetting, ' +
    'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset ' +
    'sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like ' +
    'Aldus PageMaker including versions of Lorem Ipsum.';

export const DUMMY_DATA: Product[] = [
    {
        id: 'p1',
        name: 'Antenna',
        imageURL: ANTENNA,
        category: Category.TECH,
        description,
    },
    {
        id: 'p2',
        name: 'Drone',
        imageURL: DRONE,
        category: Category.TECH,
        description,
    },
    {
        id: 'p3',
        name: 'Macbook',
        imageURL: MACBOOK,
        category: Category.TECH,
        description,
    },
    {
        id: 'p4',
        name: 'Metrix',
        imageURL: METRIX,
        category: Category.TECH,
        description,
    },
    {
        id: 'p5',
        name: 'Shirt',
        imageURL: SHIRT,
        category: Category.CLOTHES,
        description,
    },
    {
        id: 'p6',
        name: 'Steak',
        imageURL: STEAK,
        category: Category.FOOD,
        description,
    },
    {
        id: 'p7',
        name: 'Vegetarian',
        imageURL: VEGETARIAN,
        category: Category.FOOD,
        description,
    },
];
