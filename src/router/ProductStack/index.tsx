import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ProductStackParams} from './params';
import ProductsScreen from '../../screens/ProductsScreen';
import ProductDetailsScreen from '../../screens/ProductDetailsScreen';

const Stack = createStackNavigator<ProductStackParams>();

const ProductStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProductsList"
                component={ProductsScreen}
                options={{
                    headerTitle: 'Products',
                }}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={({route}) => ({
                    headerTitle: route.params.product.name,
                })}
            />
        </Stack.Navigator>
    );
};

export default ProductStack;
