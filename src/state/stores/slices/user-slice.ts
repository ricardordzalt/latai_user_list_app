import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userNameFilter: string;
}

const initialState: UserState = {
  userNameFilter: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserNameFilter(state, action: PayloadAction<string>) {
      state.userNameFilter = action.payload;
    },
  },
});

const userReducer = userSlice.reducer;
const { setUserNameFilter } = userSlice.actions;

export { userReducer, setUserNameFilter };