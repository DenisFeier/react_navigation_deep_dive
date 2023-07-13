import React from 'react';
import {View, FlatList, useWindowDimensions} from 'react-native';
import {styles} from './styles';
import {DUMMY_DATA} from '../../data/dummyData';
import ProductItem from '../../components/ProductItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {ProductStackParams} from '../../router/ProductStack/params';
import {Product} from '../../types/Product';

const ItemSeparator = () => <View style={styles.separator} />;

const ProductsScreen: React.FC = () => {
    const {width} = useWindowDimensions();
    const itemWidth = width * 0.9;
    const navigation =
        useNavigation<
            StackNavigationProp<ProductStackParams, 'ProductsList'>
        >();

    const onTap = (product: Product) => {
        navigation.navigate('ProductDetails', {product});
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DUMMY_DATA}
                ItemSeparatorComponent={ItemSeparator}
                contentContainerStyle={styles.center}
                renderItem={({item}) => (
                    <ProductItem
                        product={item}
                        itemWidth={itemWidth}
                        onTap={() => onTap(item)}
                    />
                )}
            />
        </View>
    );
};

export default ProductsScreen;
