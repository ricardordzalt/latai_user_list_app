
import { useAppSelector } from '../use-app-selector';
import { selectExpandedUserId } from '../../selectors/user';

export const useGetExpandedUserIdState = () => {
  const expandedUserId = useAppSelector(selectExpandedUserId);
  return {
    expandedUserId
  };
};
