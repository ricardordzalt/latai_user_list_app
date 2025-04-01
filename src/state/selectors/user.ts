import { RootState } from '../stores/store';

export const selectUserNameFilter = (state: RootState) => state.user.userNameFilter;
