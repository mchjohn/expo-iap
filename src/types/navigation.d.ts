import { RootTabParamList } from '../navigation/types/navigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootTabParamList {}
  }
}
