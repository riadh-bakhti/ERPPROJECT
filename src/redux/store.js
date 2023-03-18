import { configureStore } from '@reduxjs/toolkit'
import moduleReducer from "./moduleSlice";
import clientReducer from "./clientSlice";
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['client']
};
const rootreducer = combineReducers({
  client: clientReducer,
  module:moduleReducer,
});
 
const persistedReducer = persistReducer(persistConfig, rootreducer);


export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});
export const persistor = persistStore(store);
