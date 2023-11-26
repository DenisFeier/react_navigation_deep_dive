import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {styles} from './styles';
import ProductItem from '../../components/ProductItem';
import BigTextScrollView from '../../components/BigTextScrollView';

import {RouteProp, useRoute} from '@react-navigation/native';
import {ProductStackParams} from '../../router/ProductStack/params';

const ProductDetailsScreen: React.FC = () => {
    const route = useRoute<RouteProp<ProductStackParams, 'ProductDetails'>>();
    const product = route.params.product;
    const {width} = useWindowDimensions();
    const cardWidth = width * 0.8;

    return (
        <View style={[styles.container, styles.center]}>
            <View>
                <ProductItem product={product} itemWidth={cardWidth} />
                <BigTextScrollView
                    bigText={product.description}
                    style={{width: cardWidth}}
                />
            </View>
        </View>
    );
};

export default ProductDetailsScreen;
