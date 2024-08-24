import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  REGISTER,
  REHYDRATE,
  PERSIST,
} from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import eventReducer from "./AllContent/eventSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["ui"],
};

const rootReducer = combineReducers({
  event: eventReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [REHYDRATE, PERSIST, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
