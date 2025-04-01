import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Sorting = 'asc' | 'desc' | '';
export type ExpandedUserId = number | null;

interface UserState {
  userNameFilter: string;
  usersSorting: Sorting;
  expandedUserId: number | null;
}

const initialState: UserState = {
  userNameFilter: '',
  usersSorting: '',
  expandedUserId: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserNameFilter(state, action: PayloadAction<string>) {
      state.userNameFilter = action.payload;
    },
    setUsersSorting(state, action: PayloadAction<Sorting>) {
      state.usersSorting = action.payload;
    },
    setExpandedUserId(state, action: PayloadAction<ExpandedUserId>) {
      state.expandedUserId = action.payload;
    }
  },
});

const userReducer = userSlice.reducer;
const { setUserNameFilter, setUsersSorting, setExpandedUserId } = userSlice.actions;

export { userReducer, setUserNameFilter, setUsersSorting, setExpandedUserId };