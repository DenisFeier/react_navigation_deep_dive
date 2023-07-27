import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import {styles} from './styles';
import ProductItem from '../../components/ProductItem';
import BigTextScrollView from '../../components/BigTextScrollView';
import {DUMMY_DATA} from '../../data/dummyData';

const ProductDetailsScreen: React.FC = () => {
    const product = DUMMY_DATA[0];
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
