import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice/slice';
import { contactsApi } from './contactsSliceRTK/contactsSliceRTK';
import { authApi } from './auth/authApi';
import authReducer from './auth/Slice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['contactsApi', 'authApi'],
};

const rootReduser = combineReducers({
  [contactsApi.reducerPath]: contactsApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  auth: authReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReduser);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(contactsApi.middleware, authApi.middleware),
});
export const persistor = persistStore(store);
