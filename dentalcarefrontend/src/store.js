import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import userReducer from '../src/slices/userSlice'
import locationReducer from '../src/slices/locationSlice'
import userDetailsReducer from '../src/slices/userDetailsSlica'

const userPersistConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2,
}

const locationPersistConfig = {
  key: 'location',
  storage,
  stateReconciler: autoMergeLevel2,
}

const userDetailsPersistConfig = {
  key: 'userdetails',
  storage,
  stateReconciler: autoMergeLevel2,
}


const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  location: persistReducer(locationPersistConfig, locationReducer),
  userdetails: persistReducer(userDetailsPersistConfig, userDetailsReducer),
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
