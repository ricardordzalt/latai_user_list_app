
import { useAppSelector } from '../use-app-selector';
import { selectUsersSorting } from '../../selectors/user';

export const useGetUsersSortingState = () => {
  const usersSorting = useAppSelector(selectUsersSorting);
  return {
    usersSorting
  };
};
