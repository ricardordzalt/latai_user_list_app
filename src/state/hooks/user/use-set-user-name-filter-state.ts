import { useAppDispatch } from '../use-app-dispatch';
import { setUserNameFilter } from '../../stores/slices/user-slice';

export const useSetUserNameFilterState = () => {
  const dispatch = useAppDispatch();
  const setUserNameFilterState = (userName: string) => {
    dispatch(setUserNameFilter(userName));
  };

  return {
    setUserNameFilterState
  };
};
