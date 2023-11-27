import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import { authSlice } from './features/auth/authSlice'
import { persistReducer, persistStore } from "redux-persist";
import persistConfig from "./persistConfig";

// Define the RootState type
interface RootState {
  [apiSlice.reducerPath]: ReturnType<typeof apiSlice.reducer>;
  auth: ReturnType<typeof authSlice.reducer>;
}

// const rootReducer = {
//   [apiSlice.reducerPath]: apiSlice.reducer,
//   auth: authSlice.reducer,
// };

// Combine the reducers
const rootReducer = combineReducers<RootState>({
  [apiSlice.reducerPath]: apiSlice.reducer,
  auth: authSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
  devTools: true
})

const persistor = persistStore(store);

export { persistor }