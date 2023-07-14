import {Category} from '../../types/Category';
import {Product} from '../../types/Product';

export type ProductStackParams = {
    ProductsList: {
        category?: Category;
    };
    ProductDetails: {
        product: Product;
    };
};
