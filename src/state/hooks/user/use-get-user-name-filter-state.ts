import { useAppSelector } from '../use-app-selector';
import { selectUserNameFilter } from '../../selectors/user';

export const useGetUserNameFilterState = () => {
  const userNameFilter = useAppSelector(selectUserNameFilter);
  return {
    userNameFilter,
  };
};
