
import { useAppDispatch } from '../use-app-dispatch';
import { setUsersSorting, Sorting } from '../../stores/slices/user-slice';

export const useSetUsersSortingState = () => {
  const dispatch = useAppDispatch();
  const setUsersSortingState = (sorting: Sorting) => {
    dispatch(setUsersSorting(sorting));
  };

  return {
    setUsersSortingState
  };
};
