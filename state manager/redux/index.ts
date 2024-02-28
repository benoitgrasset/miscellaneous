import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer, { AuthState } from './authSlice';
import githubTokenReducer, { GithubTokenState } from './githubSlice';
import globalReducer, { GlobalState } from './globalSlice';
import menuReducer from './menuSlice';
import snackbarReducer from './snackbarSlice';
import userReducer, { UserState } from './userSlice';
import wizardReducer, { WizardState } from './wizardSlice';

export type RootState = {
  auth: AuthState;
  global: GlobalState;
  githubToken: GithubTokenState;
  user: UserState;
  menu: ReturnType<typeof menuReducer>;
  snackbar: ReturnType<typeof snackbarReducer>;
  wizard: WizardState;
};

const rootReducer = combineReducers({
  auth: authReducer,
  global: globalReducer,
  wizard: wizardReducer,
  githubToken: githubTokenReducer,
  user: userReducer,
  menu: menuReducer,
  snackbar: snackbarReducer,
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth', 'githubToken'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
