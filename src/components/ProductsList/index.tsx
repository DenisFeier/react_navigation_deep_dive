import React from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import {styles} from './styles';
import {Product} from '../../types/Product';
import ProductItem from '../ProductItem';
import {Category} from '../../types/Category';

const ItemSeparator = () => <View style={styles.separator} />;

type ProductsListProps = {
    onTap?: (product: Product) => void;
    category?: Category;
    data: Product[];
};

const ProductsList: React.FC<ProductsListProps> = ({onTap, data, category}) => {
    const {width} = useWindowDimensions();
    const itemWidth = width * 0.9;

    const products =
        category !== undefined
            ? data.filter(p => p.category === category)
            : data;

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                ItemSeparatorComponent={ItemSeparator}
                contentContainerStyle={styles.center}
                renderItem={({item}) => (
                    <ProductItem
                        product={item}
                        itemWidth={itemWidth}
                        onTap={onTap}
                    />
                )}
            />
        </View>
    );
};

export default ProductsList;
