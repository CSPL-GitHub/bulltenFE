import { combineReducers, configureStore } from "@reduxjs/toolkit";


import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import currencySlice from "./currencySlice";


const persistConfig = {
  key: "bullten",
  storage,
};

const rootReducer = combineReducers({
  currency:currencySlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
