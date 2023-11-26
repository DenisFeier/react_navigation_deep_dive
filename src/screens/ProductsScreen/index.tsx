import React from 'react';
import {DUMMY_DATA} from '../../data/dummyData';
import {Product} from '../../types/Product';
import ProductsList from '../../components/ProductsList';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductStackParams} from '../../router/ProductStack/params';

const ProductsScreen: React.FC = () => {
    const navigation =
        useNavigation<
            StackNavigationProp<ProductStackParams, 'ProductsList'>
        >();

    const onTap = (product: Product) => {
        navigation.navigate('ProductDetails', {
            product,
        });
    };

    return <ProductsList data={DUMMY_DATA} onTap={onTap} />;
};

export default ProductsScreen;
