import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from './rootReducer';

const persistConfig = {
    key: 'hackathon',
    storage,
}

export const store = createStore(persistReducer(persistConfig, rootReducer));
export const persistor = persistStore(store)
