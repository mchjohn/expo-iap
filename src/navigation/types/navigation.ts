import { RouteProp } from '@react-navigation/native';

import { IBook } from '~/interfaces';

export type RootTabParamList = {
  Home: undefined;
  Paywall: undefined;
  Book: {
    book: IBook;
  };
};

export type BookParamList = RouteProp<RootTabParamList, 'Book'>;
