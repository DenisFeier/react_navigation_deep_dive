import React from 'react';
import {DUMMY_DATA} from '../../data/dummyData';
import {Product} from '../../types/Product';
import ProductsList from '../../components/ProductsList';

const ProductsScreen: React.FC = () => {
    const onTap = (product: Product) => {
        console.log(product);
    };

    return <ProductsList data={DUMMY_DATA} onTap={onTap} />;
};

export default ProductsScreen;
