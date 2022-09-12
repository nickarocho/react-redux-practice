import { createStore, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { todos } from "./todos/reducers";

const reducers = {
  todos,
};

const persistConfig = {
  key: "root",
  storage, // defaults to `localStorage` on the web
  stateReconciler: autoMergeLevel2, // tells ReduxPersist how to store the inital & stored states of the app
};

const rootReducer = combineReducers(reducers);
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => createStore(persistedReducer);
