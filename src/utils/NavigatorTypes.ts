import {ProductType} from './Types';

export type AppNavigatorType = {
  Home: undefined;
  Product: {
    product: ProductType;
  };
  Cart: undefined;
};
