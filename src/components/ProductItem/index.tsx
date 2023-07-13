import React from 'react';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import {Product} from '../../types/Product';
import {styles} from './styles';

type ProductItemProps = {
    product: Product;
    itemWidth: number;
    onTap?: () => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
    product,
    itemWidth,
    onTap,
}) => {
    return (
        <TouchableOpacity onPress={onTap} disabled={!onTap}>
            <View
                style={{
                    width: itemWidth,
                    height: itemWidth * 0.75,
                }}>
                <Image
                    source={product.imageURL}
                    style={styles.container}
                    resizeMode="stretch"
                />
                <View style={styles.image}>
                    <Text style={styles.text}>{product.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ProductItem;
