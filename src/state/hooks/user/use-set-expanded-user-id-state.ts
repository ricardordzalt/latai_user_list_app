
import { useAppDispatch } from '../use-app-dispatch';
import { setExpandedUserId, ExpandedUserId } from '../../stores/slices/user-slice';

export const useSetExpandedUserIdState = () => {
  const dispatch = useAppDispatch();
  const setExpandedUserIdState = (userId: ExpandedUserId) => {
    dispatch(setExpandedUserId(userId));
  };

  return {
    setExpandedUserIdState
  };
};
