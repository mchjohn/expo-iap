import { RouteProp } from '@react-navigation/native';

import { IBook } from '~/interfaces';

export type RootTabParamList = {
  HomeStack: undefined;
  Paywall: undefined;
};

export type RootStackParamList = {
  Home: undefined;
  Book: {
    book: IBook;
  };
};

export type BookParamList = RouteProp<RootStackParamList, 'Book'>;
