import { RootState } from '../stores/store';

export const selectUserNameFilter = (state: RootState) => state.user.userNameFilter;

export const selectUsersSorting = (state: RootState) => state.user.usersSorting;

export const selectExpandedUserId = (state: RootState) => state.user.expandedUserId;