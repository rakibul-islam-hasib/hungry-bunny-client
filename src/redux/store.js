import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;