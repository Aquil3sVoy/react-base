import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export type Layout = {
  darkMode: boolean;
};

const initialState: Layout = {
  darkMode: false,
};

const todosSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    darkModeChanged: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { darkModeChanged } = todosSlice.actions;
export const selectDarkMode = (state: RootState) =>
  state.layout.darkMode;

export default todosSlice.reducer;
