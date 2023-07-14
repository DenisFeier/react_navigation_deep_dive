import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {CategoryDrawerParams} from './params';
import ProductsList from '../../components/ProductsList';
import {DUMMY_DATA} from '../../data/dummyData';
import {Category} from '../../types/Category';

const Drawer = createDrawerNavigator<CategoryDrawerParams>();

const FoodCategory = () => {
    return <ProductsList data={DUMMY_DATA} category={Category.FOOD} />;
};
const ClothesCategory = () => {
    return <ProductsList data={DUMMY_DATA} category={Category.CLOTHES} />;
};
const TechCategory = () => {
    return <ProductsList data={DUMMY_DATA} category={Category.TECH} />;
};

const CategoryDrawer = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Food" component={FoodCategory} />
            <Drawer.Screen name="Clothes" component={ClothesCategory} />
            <Drawer.Screen name="Tech" component={TechCategory} />
        </Drawer.Navigator>
    );
};

export default CategoryDrawer;
