import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit';
import layoutReducer from './features/layout/layoutSlice';

const rootReducer = combineReducers({
  layout: layoutReducer,
});
export function setupStore(
  preloadedState?: PreloadedState<RootState>
) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
